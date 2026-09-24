import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Soft steam wisps rising over the hero photo, like the hot pools on a cold morning.
const COUNT = 36

function makePuffTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
  grad.addColorStop(0, 'rgba(255,255,255,0.9)')
  grad.addColorStop(0.4, 'rgba(255,255,255,0.35)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 128, 128)
  return new THREE.CanvasTexture(c)
}

type Puff = { x: number; y: number; speed: number; phase: number; scale: number }

function Steam() {
  const texture = useMemo(makePuffTexture, [])
  const puffs = useMemo<Puff[]>(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: (Math.random() - 0.5) * 16,
        y: -5 + Math.random() * 10,
        speed: 0.25 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        scale: 2 + Math.random() * 3,
      })),
    [],
  )
  const refs = useRef<(THREE.Sprite | null)[]>([])
  // Scale the wisps to the visible width so narrow phone screens don't fill with haze.
  const { viewport } = useThree()
  const spread = viewport.width
  const k = Math.min(1, viewport.width / 14)

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    puffs.forEach((p, i) => {
      const s = refs.current[i]
      if (!s) return
      p.y += p.speed * dt
      if (p.y > 5) {
        p.y = -5
        p.x = (Math.random() - 0.5) * 16
      }
      // Fade in near the bottom, fade out near the top, and widen as it rises.
      const life = (p.y + 5) / 10
      const mat = s.material as THREE.SpriteMaterial
      mat.opacity = Math.sin(life * Math.PI) * (0.1 + 0.12 * k)
      s.position.set((p.x / 16) * spread + Math.sin(t * 0.4 + p.phase) * 0.6 * k, p.y, 0)
      const grow = p.scale * k * (0.7 + life * 0.9)
      s.scale.set(grow, grow, 1)
    })
  })

  return (
    <>
      {puffs.map((_, i) => (
        <sprite key={i} ref={(el) => { refs.current[i] = el }}>
          <spriteMaterial map={texture} transparent depthWrite={false} opacity={0} />
        </sprite>
      ))}
    </>
  )
}

export default function SteamScene() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      frameloop={reduced ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: false }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Steam />
    </Canvas>
  )
}
