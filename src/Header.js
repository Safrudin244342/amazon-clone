import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header () {
  return (
    <nav class='header'>
      {/* amazon logo */}
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon logo'
          class='headerLogo'
        />
      </Link>

      {/* Search box */}
      <input type='text' class='headerSearch' />
      <SearchIcon class='headerSearchIcon' />

      {/* Action navigatin */}
      <div class='headerNav'>
        <Link to='/login' class='headerLink'>
          <div class='headerOption'>
            <span class='one'>Hay safrudin</span>
            <span class='two'>Sign In</span>
          </div>
        </Link>

        <Link to='/' class='headerLink'>
          <div class='headerOption'>
            <span class='one'>Returns</span>
            <span class='two'>& Orders</span>
          </div>
        </Link>

        <Link to='/' class='headerLink'>
          <div class='headerOption'>
            <span class='one'>Your</span>
            <span class='two'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' class='headerLink'>
          <div class='headerOptionCart'>
            <ShoppingBasketIcon />
            <span class='two count'>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
