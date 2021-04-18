import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import ProductDetails from '../ProductDetails'
import Cart from '../Cart/CartList.jsx'
import Wishlist from '../WishList/WishList'

export default function Main() {
    return (
        <div>
            <BrowserRouter >
            <Switch>
            <Route exact path="/"><Redirect to="/Homepage"></Redirect></Route>
        <Route exact path="/Homepage" component={Homepage}/>
            <Route exact path="/ProductDetail" component={ProductDetails}></Route>
            <Route exact path="/Cart" component={Cart}> </Route>
            <Route exact path="/wishlist" component={Wishlist}></Route>
            </Switch>
            </BrowserRouter>

        </div>
    )
}
