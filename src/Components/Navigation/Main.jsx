import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Homepage from '../Homepage/Header'
import ProductDetails from '../ProductDetails'
import Cart from '../Cart/CartList.jsx'
import Wishlist from '../WishList/WishList'
import Rings from '../Jewellry/Rings/Rings';

export default function Main() {
    return (
        <div>
            <BrowserRouter >
            <Switch>
            <Route exact path="/"><Redirect to="/Homepage"></Redirect></Route>
        <Route exact path="/Homepage" component={Homepage}/>
            <Route exact path="/Rings" component={Rings}></Route>
            <Route exact path="/Cart" component={Cart}> </Route>
            <Route exact path="/wishlist" component={Wishlist}></Route>
            </Switch>
            </BrowserRouter>

        </div>
    )
}
