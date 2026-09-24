import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-amber-500" aria-label="5 out of 5 stars">★★★★★</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-pine">Guests keep coming back</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-pine/5">
            <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-pine">{r.name}</span>
              <span className="text-muted"> · {r.from}</span>
              <span className="mt-0.5 block text-xs text-moss">Stayed at {r.cabin}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
