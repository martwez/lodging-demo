import { useState, type Dispatch, type SetStateAction } from 'react'
import { business, cabins } from '../data'
import type { BookingDraft } from '../App'

const field = 'mt-1 w-full rounded-lg border border-pine/15 bg-white px-3 py-2.5 text-sm text-ink focus:border-ember focus:outline-none'
const label = 'block text-xs font-semibold text-muted'

function nightsBetween(a: string, b: string) {
  if (!a || !b) return 0
  const n = Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000)
  return n > 0 ? n : 0
}

type Props = { draft: BookingDraft; setDraft: Dispatch<SetStateAction<BookingDraft>> }

export default function Booking({ draft, setDraft }: Props) {
  const [sent, setSent] = useState(false)
  const cabin = cabins.find((c) => c.id === draft.cabinId) ?? cabins[0]
  const nights = nightsBetween(draft.checkIn, draft.checkOut)
  const subtotal = nights * cabin.rate
  const total = nights ? subtotal + cabin.cleaningFee : 0
  // What the same stay would cost on a booking site with a typical ~15% guest service fee.
  const siteFee = Math.round(total * 0.15)
  const today = new Date().toISOString().slice(0, 10)
  const tooMany = draft.guests > cabin.sleeps

  return (
    <section id="book" className="bg-pine py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl bg-cream p-6 text-ink shadow-2xl md:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-moss/15 text-2xl text-moss">✓</div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-pine">Request sent!</h3>
              <p className="mx-auto mt-2 max-w-sm text-muted">
                We will confirm your dates for {cabin.name} within a few hours and text you a secure payment link.
              </p>
              <p className="mx-auto mt-4 max-w-sm rounded-lg bg-sand/70 p-3 text-xs text-muted">
                Demo note: on a real site this form emails the host instantly. Nothing was sent.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-ember hover:underline">
                Start another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <h3 className="font-display text-2xl font-semibold text-pine sm:col-span-2">Request to book</h3>
              <label className={`${label} sm:col-span-2`}>
                Cabin
                <select value={cabin.id} onChange={(e) => setDraft({ ...draft, cabinId: e.target.value })} className={field}>
                  {cabins.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} (sleeps {c.sleeps}, ${c.rate}/night)
                    </option>
                  ))}
                </select>
              </label>
              <label className={label}>
                Check in
                <input required type="date" min={today} value={draft.checkIn} onChange={(e) => setDraft({ ...draft, checkIn: e.target.value })} className={field} />
              </label>
              <label className={label}>
                Check out
                <input required type="date" min={draft.checkIn || today} value={draft.checkOut} onChange={(e) => setDraft({ ...draft, checkOut: e.target.value })} className={field} />
              </label>
              <label className={label}>
                Guests
                <input required type="number" min={1} max={12} value={draft.guests} onChange={(e) => setDraft({ ...draft, guests: Number(e.target.value) })} className={field} />
                {tooMany && <span className="mt-1 block font-normal text-ember-dark">{cabin.name} sleeps {cabin.sleeps}. Try Hilltop Lodge for bigger groups.</span>}
              </label>
              <label className={label}>
                Name
                <input required autoComplete="name" className={field} />
              </label>
              <label className={label}>
                Email
                <input required type="email" autoComplete="email" className={field} />
              </label>
              <label className={label}>
                Phone
                <input type="tel" autoComplete="tel" className={field} />
              </label>
              <label className={`${label} sm:col-span-2`}>
                Anything we should know?
                <textarea rows={3} placeholder="Bringing a dog, celebrating something, arriving late..." className={field} />
              </label>
              <button disabled={tooMany} className="rounded-full bg-ember px-6 py-3 font-semibold text-white hover:bg-ember-dark disabled:opacity-50 sm:col-span-2">
                Send Booking Request
              </button>
              <p className="text-center text-xs text-muted sm:col-span-2">No payment now. We confirm availability first.</p>
            </form>
          )}
        </div>

        <aside className="self-start">
          <p className="text-sm font-semibold tracking-[0.2em] text-ember uppercase">Your stay</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">{cabin.name}</h2>
          <div className="mt-6 space-y-3 border-y border-cream/15 py-6 text-sm">
            <div className="flex justify-between">
              <span className="text-cream/70">
                ${cabin.rate} x {nights || '-'} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/70">Cleaning fee</span>
              <span>{nights ? `$${cabin.cleaningFee}` : '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/70">Service fee</span>
              <span className="font-semibold text-ember">$0</span>
            </div>
            <div className="flex justify-between border-t border-cream/15 pt-3 text-base font-semibold">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
          {nights > 0 && (
            <p className="mt-5 rounded-xl bg-pine-light p-4 text-sm">
              Booking direct saves you about <span className="font-semibold text-ember">${siteFee}</span> in booking site service fees on this stay.
            </p>
          )}
          <p className="mt-6 text-sm text-cream/70">
            Rather talk it through? Call or text <a href={`tel:${business.phone}`} className="font-semibold text-cream underline-offset-2 hover:underline">{business.phone}</a>.
          </p>
        </aside>
      </div>
    </section>
  )
}
