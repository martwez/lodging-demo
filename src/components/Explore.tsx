import { explore } from '../data'
import Img from './Img'

export default function Explore() {
  return (
    <section id="explore" className="bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-ember uppercase">Explore Lava</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-pine md:text-5xl">A small town with big weekends</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {explore.map((e) => (
            <article key={e.title} className="group relative isolate overflow-hidden rounded-2xl">
              <Img
                name={e.image}
                alt={e.title}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                <p className="mt-1 max-w-md text-sm text-cream/85">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
