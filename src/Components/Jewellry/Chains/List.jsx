import React,{useEffect,useState} from 'react';
import '../../Homepage/Product.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


//import r from '../../../Images/RingImages/R01.jpg';
export default function List(props) {
    const [rere,setrere]=useState("");
    const [border,setborder]=useState("2px solid blue");
    const [output,setoutput]=useState("");
    const [f1,setf1]=useState(false);
    const {data}=props
//console.log(req)

    
    


const rer=(value,index,arr)=>{
arr[index]=20;
};
    
    
    return (
    <React.Fragment>
    <div className="d1" style={{zIndex:"1"}}>
        <img alt="hello" style={{height:"100%",width:"100%",boxShadow:"0px 0px 10px 10px gold"}} src={data.url.default} ></img>
        <div className="p1" style={{backgroundColor:"rgba(25,20,22,0.54)"}}>
        <h2 style={{position:"relative",left:"20px",top:"30px",color:"gold"}}>{data.heading}</h2>
        <div  style={{height:"50%",width:"90%",color:"white",position:"relative",top:"5%",left:"5%",boxSizing:"border-box",overflow:"hidden"}}><p style={{fontWeight:"bold",letterSpacing:"2px",fontSize:"20px"}}>Authentic design with latest carvation of product  designed with lots of love and care, specially for you.</p></div>
        <h4 style={{position:"absolute",color:"white",top:"81%",left:"3%"}}>{data.price}/- INR</h4>
    </div>
    </div>

        </React.Fragment>
    )
}
