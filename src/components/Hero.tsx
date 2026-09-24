import { lazy, Suspense, useState } from 'react'
import Img from './Img'
import type { BookingDraft } from '../App'

// Three.js is loaded after the page paints so the photo shows instantly.
const SteamScene = lazy(() => import('./SteamScene'))

const field = 'w-full rounded-lg border border-pine/15 bg-white px-3 py-2.5 text-sm text-ink focus:border-ember focus:outline-none'

export default function Hero({ onSearch }: { onSearch: (d: Partial<BookingDraft>) => void }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const today = new Date().toISOString().slice(0, 10)

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Img name="hero-cabin-dusk" alt="Wooden cabin glowing at dusk with a fire pit out front" eager className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pine/60 via-pine/30 to-pine/80" />
      <Suspense fallback={null}>
        <div className="absolute inset-0 -z-10">
          <SteamScene />
        </div>
      </Suspense>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 md:pb-16">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cream/90 uppercase">Lava Hot Springs, Idaho</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-white md:text-7xl">
          Soak, float, and sleep under the pines.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-cream/90">
          Three cozy cabins a five minute walk from the hot pools. Book direct and skip the booking site fees.
        </p>

        <form
          className="mt-8 grid gap-3 rounded-2xl bg-cream/95 p-4 shadow-2xl backdrop-blur sm:grid-cols-2 md:grid-cols-[1fr_1fr_0.7fr_auto] md:items-end"
          onSubmit={(e) => {
            e.preventDefault()
            onSearch({ checkIn, checkOut, guests })
          }}
        >
          <label className="text-xs font-semibold text-muted">
            Check in
            <input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={`${field} mt-1`} />
          </label>
          <label className="text-xs font-semibold text-muted">
            Check out
            <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={`${field} mt-1`} />
          </label>
          <label className="text-xs font-semibold text-muted">
            Guests
            <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={`${field} mt-1`}>
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </label>
          <button className="rounded-lg bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-dark sm:col-span-2 md:col-span-1">
            Check Availability
          </button>
        </form>
      </div>
    </section>
  )
}
