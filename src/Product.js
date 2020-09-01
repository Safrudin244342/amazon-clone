import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
  return (
    <div class='product'>
      <div class='productInfo'>
        <p>{title}</p>
      
        <p class='productPrice'>
          <strong>{price}</strong>
        </p>

        <div class='productRating'>
          {
            Array(rating)
              .fill()
              .map( _ => (
                <p style={{fontSize: '25px', color: '#ffc700'}}>★</p>
              ))
          }
        </div>
      </div>
      
      <img src={image} alt='' />
      <button>Add to basket</button>
    </div>
  )
}

export default Product
