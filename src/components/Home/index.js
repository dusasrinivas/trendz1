// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air clothes and sarees and chudidars and
          the kids wear is also available in this store. so please shop maximum
          of maximum clothes sarees chudidars and shoes and belongings and
          necessary items.
        </p>
        <button className="btn1" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clother-image"
      />
    </div>
  </div>
)

export default Home
