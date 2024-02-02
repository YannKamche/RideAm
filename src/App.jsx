import { Auction, Footer, Navbar, Home, Review, Search, Sellers, Trending } from './sections'
import React from 'react'

const App = () => {
  return (
    <main className='relative max-container'>
      <Navbar />

      <section className='container'>
        <Home />
      </section>
      
      <section className='container'>
        <Search/>
      </section>

      <section className='container'>
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
