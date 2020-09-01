import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

  const [{}, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div class='product'>
      <div class='productInfo'>
        <p>{title}</p>
      
        <p class='productPrice'>
          <small>$</small>
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
      <button onClick={addToCart}>Add to basket</button>
    </div>
  )
}

export default Product
