import { perks } from '../data'

const icons = [
  <path key="a" d="M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2 2.6 5 3.2 5 1.4 5 3.3-2.2 3-5 3-5-1.1-5-3" />,
  <path key="b" d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Zm-3.5 9 2.5 2.5 4.5-5" />,
  <path key="c" d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
]

export default function Perks() {
  return (
    <section className="bg-pine text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[0.8fr_2fr] md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-ember uppercase">Book direct</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Same cabins. Lower price.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {perks.map((p, i) => (
            <div key={p.title}>
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-ember" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {icons[i]}
              </svg>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
