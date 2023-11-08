import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Products = () => {
  const token = Cookies.get('token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="procontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png" alt="products"className="pro"
        />
      </div>
    </>
  )
}
export default Products