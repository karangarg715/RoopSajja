import React from 'react'
import '../Homepage/Product.css';
import p1 from '../../Images/p1.jpg'
import p2 from '../../Images/p2.jpg'
import p3 from '../../Images/p3.jpg'
import p4 from '../../Images/p4.jpg'
import p5 from '../../Images/p5.jpg'
import p6 from '../../Images/p6.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip'
import WishList from '../WishList/WishList'

export default function ListPage(props) {
    const {data,counterWishList}=props
    console.log(data.image)
    const wishlist=()=>{
        const dat=data
        counterWishList(true)
        window.alert("added to wishlist")
    }
    const addedCart=()=>{
        window.alert("added to cart")
    }
    return (
        <React.Fragment>
               <div className="d1">

                    <img style={{height:"100%",width:"100%"}} src={p1}></img>
                    <div className="p1" style={{backgroundColor:"rgba(25,20,22,0.54)"}}>
                    <h2 style={{position:"relative",left:"20px",top:"30px",color:"white"}}>{data.productDesc}</h2>
                    
                    <h4 style={{position:"absolute",color:"white",top:"81%",left:"3%"}}>{data.price}/- INR</h4>

                            <FavoriteBorderIcon onClick={wishlist} className="icon1" ></FavoriteBorderIcon>

                            <ShoppingCartIcon onClick={addedCart} className="icon2" ></ShoppingCartIcon>


                    </div>
                    </div>

        </React.Fragment>
    )
}
