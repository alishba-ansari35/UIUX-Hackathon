import Categeories from '@/components/Categeories'
import Companylogo from '@/components/Companylogo'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Items from '@/components/Items'
import Ourproducts from '@/components/Ourproducts'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <main>
        <Header/>
        <Hero/>
        <Companylogo/>
        <Feature/>
        <Categeories/>
        <Items/>
        <Ourproducts/>
       <Footer/>
      </main>
    </div>
  )
}

export default Homepage

