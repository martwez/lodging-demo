import { faqs } from '../data'

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <h2 className="text-center font-display text-4xl font-semibold text-pine">Good to know</h2>
      <div className="mt-10 divide-y divide-pine/10 border-y border-pine/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-pine">
              {f.q}
              <span className="text-2xl leading-none text-ember transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
