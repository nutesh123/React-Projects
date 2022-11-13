import React from 'react'
import { Route } from 'react-router-dom'
import ProductPage from '../store/ProductsPage'
import SignUp from './SignUp'
import { redirect } from 'react-router-dom'


export default function RedirectLogin(props) {
  console.log('inside redirect login comp.')
  return (
    <div>Redirect
 {/* { props.isLoggedIn ? <ProductPage itemlist={props.itemlist} addtocart={props.addtocart} />:<redirect to='/login'></redirect>} */}
    </div>
  )
}
