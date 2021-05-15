import React,{useState} from 'react'
import '../Homepage/Header.css';
import {NavLink} from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import '../Homepage/Product.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import headerImage from '../Homepage/headerImage.jpg'

export default function Homepage() {
    const[click,setclick]=useState("");
    const[click2,setclick2]=useState(false);
    const[click3,setclick3]=useState(false);
    const[click4,setclick4]=useState(false);
    const[height1,setheight1]=useState("5%");
    const [height2,setheight2]=useState("100%");
    const[height3,setheight3]=useState("5%");
    const [height4,setheight4]=useState("100%"); 
    const[height5,setheight5]=useState("5%");
    const [height6,setheight6]=useState("100%");
    const clickFunction=()=>{
        if(click==="0%"){
            setclick("-100%")
        }
        else{
            setclick("0%")
        }
    }
    
    return (
        <React.Fragment>
            <section  style={{height:"110vh",width:"100vw",backgroundColor:"grey",position:"relative",backgroundColor:"black"}}>
                <div style={{height:"10%",width:"inherit",borderBottom:"2px solid gold",position:"relative"}}>
                    <NavLink style={{textDecoration:"none"}} to="/"><h1 style={{padding:"0px",margin:"0px",color:"gold",position:"relative",fontSize:"2em",marginLeft:"20px",top:"25%"}}>RoopSajja</h1></NavLink>
                    <p style={{padding:"0px",margin:"0px",color:"white",letterSpacing:"2px",position:"relative",fontSize:"10px",marginLeft:"20px",fontWeight:"bold",top:"24%"}}>RC Group Company</p>
                    <MenuIcon onClick={clickFunction} style={{cursor:"pointer",position:"absolute",top:"25%",right:"1%",color:"gold",fontSize:"3em"}}></MenuIcon>
                </div>
                <div className="sideNav" >
                    <div className="innerSideNav" style={{right:click}}>
                    <div style={{height:"8%",width:"100%",borderBottom:"1px solid gold",position:"relative"}}>
                    <h1 style={{padding:"0px",margin:"0px",color:"gold",position:"absolute",fontSize:"2em",left:"2%",top:"10%"}}>RoopSajja</h1>
                    </div>
                    <div style={{height:height1,width:"100%",border:"0px 0px 1px 1px solid gold",position:"relative"}}>
                    <div style={{borderBottom:"1px solid gold",height:height2,width:"100%"}}>
                    <h2 style={{padding:"0px",margin:"0px",color:"gold",position:"absolute",fontSize:"1.6em",left:"5%"}}>Jewellery</h2>
{!click2 &&    <AddIcon onClick={()=>{
                        setheight1("50%")
                        setheight2("10%")
                        setclick2(true)}} style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}}></AddIcon>}
                   {click2 && <RemoveIcon  onClick={()=>{
                       setheight1("5%")
                       setheight2("100%")
                       setclick2(false)}}style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}} ></RemoveIcon>}
                    </div>
                    {click2 && <div style={{position:"absolute",height:"90%",width:"100%"}}>
                        <ul className="outerl12">
                            <NavLink to="/Rings"> <li className="l12" style={{top:"5%"}}>Rings</li></NavLink>
                            <NavLink to="/Anklets"><li className="l12" style={{top:"15%"}}>Anklets</li></NavLink>
                            <NavLink to="/Chain"><li className="l12" style={{top:"25%"}}>Chains</li></NavLink>
                            <NavLink to="/Pendants">  <li className="l12" style={{top:"35%"}}>Pendants</li></NavLink>
                            <NavLink to="/Earrings">   <li className="l12" style={{top:"45%"}} >Earrings</li></NavLink>
                            <NavLink to="/Maang Tika"> <li className="l12" style={{top:"55%"}}>Maang Tika</li></NavLink>
                            <NavLink to="/Necklace Set">  <li className="l12" style={{top:"65%"}}>Neclace Set</li></NavLink>
                            <NavLink to="/MangalSutra"> <li className="l12" style={{top:"75%"}}>Mangal Sutra</li></NavLink>
                            <NavLink to="/Bangles&Bracelets"> <li className="l12" style={{top:"85%"}}>Bangles & Bracelets</li></NavLink>
                        </ul>
                    </div>}
                    </div>
                    <div style={{height:height3,width:"100%",border:"0px 0px 1px 1px solid gold",position:"relative"}}>
                    <div style={{borderBottom:"1px solid gold",height:height4,width:"100%"}}>
                    <h2 style={{padding:"0px",margin:"0px",color:"gold",position:"absolute",fontSize:"1.6em",left:"5%"}}>Jewellery Sets</h2>
{!click3 &&    <AddIcon onClick={()=>{
                        setheight3("30%")
                        setheight4("15%")
                        setclick3(true)}} style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}}></AddIcon>}
                   {click3 && <RemoveIcon  onClick={()=>{
                       setheight3("5%")
                       setheight4("100%")
                       setclick3(false)}}style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}} ></RemoveIcon>}
                    </div>
                    {click3 && <div style={{position:"absolute",height:"90%",width:"100%"}}>
                     <ul className="outerl12">
                    <li className="l12" style={{top:"5%"}}>Rings</li>
                 
                    <li className="l12" style={{top:"25%"}}>Anklets</li>
                  
                    <li className="l12" style={{top:"45%"}}>Chains</li>
                  
                    <li className="l12" style={{top:"65%"}}>Pendants</li>
                   
                    </ul>
                    </div>}
                    </div>


                    <div style={{height:height5,width:"100%",borderBottom:"1px solid gold",position:"relative"}}>
                    <div style={{borderBottom:"1px solid gold",height:height6,width:"100%"}}>
                    <h2 style={{padding:"0px",margin:"0px",color:"gold",position:"absolute",fontSize:"1.6em",left:"5%"}}>Accessories</h2>
{!click4 &&    <AddIcon onClick={()=>{
                        setheight5("20%")
                        setheight6("20%")
                        setclick4(true)}} style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}}></AddIcon>}
                   {click4 && <RemoveIcon  onClick={()=>{
                       setheight5("5%")
                       setheight6("100%")
                       setclick4(false)}}style={{color:"gold",cursor:"pointer",position:"absolute",right:"2%",top:"2%",fontSize:"35px"}} ></RemoveIcon>}
                    </div>
                    {click4 && <div style={{position:"absolute",height:"80%",width:"100%"}}>
                     <ul className="outerl12">
                    <li className="l12" style={{top:"15%"}}>Hair Accessories</li>
                 
                    <li className="l12" style={{top:"45%"}}>Brooch</li>
                  
                    
                    </ul>
                    </div>}
                    </div>









                    
</div>
                </div>
                
            {/* <div className="Header" style={{display:"flex",position:"absolute",top:"27%",left:"20%",height:"50%",width:"60%"}}>
                <div style={{display:"flex",height:"100%",width:"100%",border:"2px solid gold",position:"relative"}}>
                    <div style={{marginRight:"20px",position:"absolute",left:"5%",top:"5%"}}>
                    <li className="outerHeading" style={{fontWeight:"bold",fontSize:"1.2em"}}>Jewellery</li>
                    <ul>
                    <div className="outerl1">
                    <li className="l1">Rings</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Anklets</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Chains</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Pendants</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Earrings</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Maang Tika</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Neclace Set</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Mangal Sutra</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Bangles & Bracelets</li>
                    <div className="innerl1"></div>
                    </div>

                    </ul>
                    </div>
                    <div style={{position:"absolute",right:"43%",top:"5%"}}>
                    <li className="outerHeading" style={{fontWeight:"bold",fontSize:"1.2em"}}>Jewellery Sets</li>
                    <ul>
                    <div className="outerl1">
                    <li className="l1">Bridal Set</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Necklace Set</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Pendant Set</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Maang Tika Set</li>
                    <div className="innerl1"></div>
                    </div>

                    </ul>
                    
                    <div>
                    <li className="outerHeading" style={{fontWeight:"bold",fontSize:"1.2em",marginTop:"5vh"}}>Accessories</li>
                    <ul>
                    <div className="outerl1">
                    <li className="l1">Hair Accessories</li>
                    <div className="innerl1"></div>
                    </div>
                    <div className="outerl1">
                    <li className="l1">Brooch</li>
                    <div className="innerl1"></div>
                    </div>
                    
                    </ul>
                    </div>
                    </div>
                    <div style={{height:"inherit",width:"21vw",position:"absolute",right:"0px"}}>
                        <img style={{height:"inherit",width:"inherit"}} src={headerImage} alt="header Image"></img>
                    </div>
                    
            
                </div>
            </div> */}
            </section>





        </React.Fragment>
       
    )
}
