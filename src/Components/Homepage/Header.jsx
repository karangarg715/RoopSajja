import React from 'react'
import '../Homepage/Header.css';
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default function Homepage() {
    return (
        <React.Fragment>
            <section  style={{height:"8vh",width:"100vw",backgroundColor:"grey",borderBottom:"2px solid black"}}>
            <div className="Header" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"inherit",width:"inherit"}}>
                <div style={{position:"relative",right:"12vw"}}><NavLink  style={{textDecoration:"none",color:"black",fontSize:"1.3em"}} to="/Homepage">Home</NavLink></div>
                <div style={{position:"relative",left:"15vw"}}><NavLink style={{textDecoration:"none",color:"black",fontSize:"1.3em",letterSpacing:"2px",fontWeight:"bold"}} to="/ProductDetail">RoopSajja</NavLink></div>
                <div style={{position:"relative",left:"33vw"}}><NavLink style={{textDecoration:"none",color:"black",fontSize:"1.3em"}} to="/Wishlist"><FavoriteBorderIcon style={{fontSize:"1.5em"}}></FavoriteBorderIcon></NavLink></div>
                <div style={{position:"relative",left:"22vw"}}><NavLink  style={{textDecoration:"none",color:"black",fontSize:"1.3em"}} to="/Cart"><ShoppingCartIcon style={{fontSize:"1.5em"}}></ShoppingCartIcon></NavLink></div>
                <div style={{position:"relative",left:"10vw"}}>Signout</div>
            </div>
            </section>





        </React.Fragment>
       
    )
}
