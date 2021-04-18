import React from 'react'
import Header from './Header';
import '../Homepage/Product.css';
import p1 from '../../Images/p1.jpg'
import p2 from '../../Images/p2.jpg'
import p3 from '../../Images/p3.jpg'
import p4 from '../../Images/p4.jpg'
import p5 from '../../Images/p5.jpg'
import p6 from '../../Images/p6.jpg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import {useState} from 'react';
import List from '../Homepage/ListPage'
export default function Homepage() {
    const products=require('../JsonData/DummyData.json')
    const f=require('../../Images/p1.jpg')
    console.log(products)
    console.log(f)
    const [wishCounter,setWishCounter]=useState(0);
    const counterWishList=(index)=>{
        if(index===true){
            const value=wishCounter+1
            setWishCounter(value)

        }
       console.log(wishCounter)
    }
    return (
        <div>
            <section style={{position:"sticky",top:"0px",left:"0px",zIndex:"200"}}>
                <Header></Header>
                </section>
                <section style={{display:"flex",flexWrap:"wrap"}}>

                    {products.map((user)=>(<List data={user} counterWishList={counterWishList}></List>))}
                </section>
            
        </div>
    )
}
