import { useState } from 'react'
import DemoBanner from './components/DemoBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import Perks from './components/Perks'
import Cabins from './components/Cabins'
import Explore from './components/Explore'
import Reviews from './components/Reviews'
import Booking from './components/Booking'
import Faq from './components/Faq'
import Footer from './components/Footer'

export type BookingDraft = {
  cabinId: string
  checkIn: string
  checkOut: string
  guests: number
}

export default function App() {
  const [draft, setDraft] = useState<BookingDraft>({ cabinId: 'aframe', checkIn: '', checkOut: '', guests: 2 })

  // Hero search bar and cabin "Request to Book" buttons both prefill the booking form.
  const startBooking = (patch: Partial<BookingDraft>) => {
    setDraft((d) => ({ ...d, ...patch }))
    document.getElementById('book')?.scrollIntoView()
  }

  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero onSearch={startBooking} />
        <Perks />
        <Cabins onBook={(cabinId) => startBooking({ cabinId })} />
        <Explore />
        <Reviews />
        <Booking draft={draft} setDraft={setDraft} />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
