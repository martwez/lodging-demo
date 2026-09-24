// All site content lives here. Edit these arrays, not the JSX.

export const business = {
  name: 'Cedar & Steam Cabins',
  town: 'Lava Hot Springs, Idaho',
  phone: '(208) 555-0142',
  email: 'stay@cedarandsteamcabins.com',
  address: '120 Pine Hollow Ln, Lava Hot Springs, ID 83246',
  checkIn: '4:00 PM',
  checkOut: '11:00 AM',
}

export type Cabin = {
  id: string
  name: string
  tagline: string
  description: string
  images: string[]
  sleeps: number
  beds: string
  baths: number
  rate: number
  cleaningFee: number
  amenities: string[]
  airbnb: string
  vrbo: string
}

export const cabins: Cabin[] = [
  {
    id: 'aframe',
    name: 'The A-Frame',
    tagline: 'Cozy loft hideaway for two',
    description:
      'Wood stove, a sleeping loft under the peak, and a deck that looks straight into the aspens. Built for couples who want quiet evenings after a long soak.',
    images: ['aframe-exterior', 'aframe-stove', 'aframe-loft'],
    sleeps: 2,
    beds: '1 queen (loft)',
    baths: 1,
    rate: 165,
    cleaningFee: 60,
    amenities: ['Wood stove', 'Private deck', 'Fire pit', 'Fast Wi-Fi', 'Coffee bar'],
    airbnb: 'https://www.airbnb.com/',
    vrbo: 'https://www.vrbo.com/',
  },
  {
    id: 'river',
    name: 'Riverside Cabin',
    tagline: 'Steps from the tubing put-in',
    description:
      'A classic log cabin with a stone fireplace and a big front lawn. Grab a tube, float the river, and walk back for dinner on the porch.',
    images: ['river-exterior', 'river-living', 'river-bedroom'],
    sleeps: 4,
    beds: '1 king, 1 queen sofa',
    baths: 1,
    rate: 215,
    cleaningFee: 80,
    amenities: ['Stone fireplace', 'Full kitchen', 'Tube storage', 'Gas grill', 'Pet friendly'],
    airbnb: 'https://www.airbnb.com/',
    vrbo: 'https://www.vrbo.com/',
  },
  {
    id: 'lodge',
    name: 'Hilltop Lodge',
    tagline: 'Room for the whole crew',
    description:
      'Three bedrooms, a wraparound porch, and a kitchen big enough for family dinners. Best for reunions, ski weekends, and group trips to the pools.',
    images: ['lodge-exterior', 'lodge-living', 'lodge-bedroom', 'lodge-kitchen'],
    sleeps: 8,
    beds: '2 queens, 2 bunks',
    baths: 2,
    rate: 340,
    cleaningFee: 120,
    amenities: ['Wraparound porch', 'Hot tub', 'Chef kitchen', 'Washer & dryer', 'EV charger'],
    airbnb: 'https://www.airbnb.com/',
    vrbo: 'https://www.vrbo.com/',
  },
]

export const perks = [
  { title: 'No service fees', text: 'Booking sites add 14 to 18 percent on top. Book with us and pay the nightly rate plus cleaning, nothing else.' },
  { title: 'Best rate, guaranteed', text: 'Find the same cabin for less somewhere else and we will match it.' },
  { title: 'Talk to a real host', text: 'Questions about pets, early check-in, or tubing gear? Text us and we answer the same day.' },
]

export const explore = [
  { image: 'soak', title: 'Soak the hot pools', text: 'Mineral pools from 102 to 112 degrees, open year round. A five minute walk from every cabin.' },
  { image: 'tubing', title: 'Float the river', text: 'Summer tubing on the Portneuf runs right through town. Rent a tube or bring your own, we have storage.' },
  { image: 'valley', title: 'Hike and bike', text: 'Trails climb straight out of town into the hills with big views over the valley.' },
  { image: 'bonfire', title: 'Slow evenings', text: 'Every cabin has a fire pit and a stack of firewood waiting. S’mores kit included.' },
]

export const reviews = [
  { name: 'Kelsey M.', from: 'Salt Lake City, UT', cabin: 'The A-Frame', text: 'Perfect anniversary weekend. The loft is so cozy and we walked to the pools every morning. Booking direct saved us almost $90.' },
  { name: 'The Ortiz family', from: 'Boise, ID', cabin: 'Hilltop Lodge', text: 'Plenty of room for three generations. The hot tub after a day of tubing was the highlight for the kids.' },
  { name: 'Dan R.', from: 'Idaho Falls, ID', cabin: 'Riverside Cabin', text: 'Spotless, well stocked, and the host texted us tips for dinner spots. Already booked again for fall.' },
]

export const faqs = [
  { q: 'What are check-in and check-out times?', a: `Check-in is ${business.checkIn} and check-out is ${business.checkOut}. Early check-in is free when the cabin is ready, just ask.` },
  { q: 'Are pets allowed?', a: 'Dogs are welcome at Riverside Cabin for a $35 flat fee. The A-Frame and Hilltop Lodge are pet free for guests with allergies.' },
  { q: 'What is the cancellation policy?', a: 'Full refund up to 14 days before arrival. Inside 14 days we refund any nights we are able to rebook.' },
  { q: 'How does booking direct work?', a: 'Send a request with your dates. We confirm availability within a few hours and send a secure payment link. Nothing is charged until you approve.' },
]

export const photoCredits = [
  'Jonathan Adams', 'Clay Banks', 'Andrea Davis', 'Mike Petrucci', 'Roger Starnes Sr',
  'Cole Ankney', 'Hans', 'Joshua Sortino', 'Brooke Balentine', 'Alex Moliski', 'Troy Olson',
]
