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
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />
      </div>

      <div class='homeRow'>
        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />
      </div>

      <div class='homeRow'>
        <Product 
          id="1"
          title='Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

<Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />

        <Product 
          id="1"
          title='Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product Fisrt Product'
          price={11.96}
          rating={5}
          image='https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_960_720.jpg'
        />
      </div>
    </div>
  )
}

export default Home
