import React from 'react'
import Banner from './img/banner.jpg'
import './Home.css'

function Home() {
  return (
    <div>
      <img
        class="homeBanner"
        src={Banner}
        alt='Banner'
      />
    </div>
  )
}

export default Home
