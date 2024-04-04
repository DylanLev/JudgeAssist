import React from 'react'
import "./Home.scss"

import Featured from '../../components/featured/Featured.jsx'
import Banner from '../../components/banner/Banner.jsx'

const Home = () => {
    
  return (
    <div className='home'>
        <Featured/>
        <Banner/>
    </div>
  )
}

export default Home