import React from 'react'
import Banner from './img/banner.jpg'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div class='home'>
      <img
        class='homeBanner'
        src={Banner}
        alt='Banner'
      />

      <div class='homeRow'>
        <Product 
          id="1"
          title='best watch in the worl'
          price={100}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="2"
          title='Tablet new generation, just for you'
          price={90}
          rating={5}
          image='https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272_960_720.jpg'
        />
      </div>

      <div class='homeRow'>
        <Product 
          id="3"
          title='new earphone, music every where'
          price={90.9}
          rating={5}
          image='https://cdn.pixabay.com/photo/2015/01/20/13/13/ipad-605439_960_720.jpg'
        />

        <Product 
          id="4"
          title='casual guitar'
          price={60.5}
          rating={5}
          image='https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg'
        />

        <Product 
          id="5"
          title='New smartphone with AR'
          price={150}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg'
        />
      </div>

      <div class='homeRow'>
        <Product 
          id="6"
          title='Laptop new generation'
          price={200}
          rating={5}
          image='https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg'
        />

        <Product 
          id="7"
          title='drone'
          price={120}
          rating={5}
          image='https://cdn.pixabay.com/photo/2015/10/10/08/55/parrot-980478_960_720.jpg'
        />

        <Product 
          id="8"
          title='sailing boat'
          price={250}
          rating={5}
          image='https://cdn.pixabay.com/photo/2018/05/14/08/32/sailing-boat-3399002_960_720.jpg'
        />

        <Product 
          id="9"
          title='sailing ship, scale 1:1'
          price={500}
          rating={5}
          image='https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_960_720.jpg'
        />
      </div>
    </div>
  )
}

export default Home
