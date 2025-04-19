import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopAstrologers from '../components/TopAstrologers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopAstrologers/>
        <Banner/>
    </div>
  )
}

export default Home