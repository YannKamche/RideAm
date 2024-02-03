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

      <section className='container'>
        <Sellers />
      </section>

      <section className='container'>
        <Auction />
      </section>

      <section className='container'>
        <Review />
      </section>

      <section className='container'>
        <Footer />
      </section>
    </main>
  )
}

export default App
