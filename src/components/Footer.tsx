import { business, photoCredits } from '../data'
import { Mark } from './Header'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-cream">
            <Mark className="h-8 w-8 text-ember" />
            <span className="font-display text-xl font-semibold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm">Locally owned cabins in {business.town}.</p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-cream">Contact</h3>
          <p className="mt-3">
            <a href={`tel:${business.phone}`} className="hover:text-ember">{business.phone}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`} className="hover:text-ember">{business.email}</a>
          </p>
          <p className="mt-2">{business.address}</p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-cream">Stay info</h3>
          <p className="mt-3">Check in {business.checkIn}</p>
          <p>Check out {business.checkOut}</p>
          <p className="mt-2">Open year round</p>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-6 text-center text-xs text-cream/50">
        <p>
          Demo website designed and built by{' '}
          <a href="https://lavatechpro.com/" className="font-semibold text-ember hover:underline">LavaTech Pro</a>. Want one for your business?
        </p>
        <p className="mt-2">Photos via Unsplash: {photoCredits.join(', ')}.</p>
      </div>
    </footer>
  )
}
