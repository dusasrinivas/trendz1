// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nxt-trnd-logo"
    />
    <div className="link-container">
      <ul className="list-container">
        <Link to="/">
          <li className="list-element">Home</li>
        </Link>

        <Link to="/products">
          <li className="list-element">Products</li>
        </Link>

        <Link to="/cart">
          <li className="list-element">Cart</li>
        </Link>
      </ul>
      <button className="btn" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
