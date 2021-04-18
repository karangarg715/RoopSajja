import React from 'react'
import '../Homepage/Product.css';
import p1 from '../../Images/p1.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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

                    <img alt="hello" style={{height:"100%",width:"100%"}} src={p1}></img>
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
