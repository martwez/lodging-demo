import { useState } from 'react'
import { cabins, type Cabin } from '../data'
import Img from './Img'

function CabinCard({ cabin, onBook, flip }: { cabin: Cabin; onBook: () => void; flip: boolean }) {
  const [active, setActive] = useState(0)
  return (
    <article className="grid gap-6 md:grid-cols-2 md:items-center md:gap-12">
      <div className={flip ? 'md:order-2' : ''}>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Img
            name={cabin.images[active]}
            alt={`${cabin.name} photo ${active + 1}`}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="mt-3 flex gap-2">
          {cabin.images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`overflow-hidden rounded-lg ring-2 transition ${i === active ? 'ring-ember' : 'ring-transparent opacity-70 hover:opacity-100'}`}
            >
              <Img name={img} alt="" sizes="96px" className="h-14 w-20 object-cover md:h-16 md:w-24" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold tracking-wide text-moss uppercase">{cabin.tagline}</p>
        <h3 className="mt-1 font-display text-3xl font-semibold text-pine md:text-4xl">{cabin.name}</h3>
        <p className="mt-4 leading-relaxed text-muted">{cabin.description}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-sand/60 p-4 text-center text-sm">
          <div>
            <dt className="text-muted">Sleeps</dt>
            <dd className="font-semibold text-ink">{cabin.sleeps}</dd>
          </div>
          <div>
            <dt className="text-muted">Beds</dt>
            <dd className="font-semibold text-ink">{cabin.beds}</dd>
          </div>
          <div>
            <dt className="text-muted">Baths</dt>
            <dd className="font-semibold text-ink">{cabin.baths}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {cabin.amenities.map((a) => (
            <li key={a} className="rounded-full border border-pine/15 px-3 py-1 text-xs font-medium text-pine">
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <p>
            <span className="font-display text-3xl font-semibold text-pine">${cabin.rate}</span>
            <span className="text-muted"> / night</span>
          </p>
          <button onClick={onBook} className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-dark">
            Request to Book
          </button>
        </div>
        <p className="mt-3 text-xs text-muted">
          Prefer a booking site? Also listed on{' '}
          <a href={cabin.airbnb} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-2 hover:text-ember">
            Airbnb
          </a>{' '}
          and{' '}
          <a href={cabin.vrbo} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-2 hover:text-ember">
            VRBO
          </a>
          .
        </p>
      </div>
    </article>
  )
}

export default function Cabins({ onBook }: { onBook: (cabinId: string) => void }) {
  return (
    <section id="cabins" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-ember uppercase">The cabins</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-pine md:text-5xl">Pick your hideout</h2>
        <p className="mt-4 text-lg text-muted">From a two person A-frame to a lodge that sleeps eight. Each one is cleaned, stocked, and inspected by us, not a management company.</p>
      </div>
      <div className="space-y-20 md:space-y-28">
        {cabins.map((c, i) => (
          <CabinCard key={c.id} cabin={c} flip={i % 2 === 1} onBook={() => onBook(c.id)} />
        ))}
      </div>
    </section>
  )
}
