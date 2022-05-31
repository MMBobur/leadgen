import React from 'react'

import Navbar from "../../components/navbar"
import Banner from "../../components/banner"
import Thousand from "../../components/thousand"
import Everyone from "../../components/everyone"
import Causes from "../../components/causes"
import Charity from "../../components/charity"
import Help from "../../components/help"
import Success from "../../components/success"
import Toronto from "../../components/toronto"
import Some from "../../components/some"
import Questions from "../../components/questions"
import Footer from "../../components/footer"

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Thousand />
      <Everyone />
      <Causes />
      <Charity />
      <Help />
      <Success />
      <Toronto />
      <Some />
      <Questions />
      <Footer />
    </div>
  )
}

export default Home