// Every photo ships in two sizes: <name>-sm.jpg (1200px) and <name>.jpg (2400px).
// The browser picks the right one for the screen, so big displays get full res.
type Props = {
  name: string
  alt: string
  sizes?: string
  className?: string
  eager?: boolean
}

const base = import.meta.env.BASE_URL

export function src(name: string, size: 'sm' | 'lg' = 'lg') {
  return `${base}images/${name}${size === 'sm' ? '-sm' : ''}.jpg`
}

export default function Img({ name, alt, sizes = '100vw', className = '', eager = false }: Props) {
  return (
    <img
      src={src(name, 'sm')}
      srcSet={`${src(name, 'sm')} 1200w, ${src(name)} 2400w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}
