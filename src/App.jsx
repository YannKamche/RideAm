import { Auction, Footer, Home, Navbar, Review, Search, Sellers, Trending } from './sections'
import React from 'react'

const App = () => {
  return (
    <main className='relative max-container'>
      <Navbar />

      <section>
        <Home />
      </section>

      <section>
        <Search/>
      </section>

      <section>
        <Trending />
      </section>

      <section>
        <Sellers />
      </section>

      <section>
        <Auction />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
