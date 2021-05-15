import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [val,setval]=useState("")
  useEffect(()=>{
    window.alert("hi")
    console.log("heyo")
    setval("karan")
  },)


  forward=(val)=>{
    let temp=generalarray;
    temp.push(val);
    setgeneralarray(temp);
  }



  const [inc,setinc]=useState(0);
  return (
      <div>
        {/* <input onChange={(e)=>{setval(e.target.value)}} value={val} ></input> */}
        <div>Hey : {val}</div>
        <button onClick={()=>{setval("Arjun")}}>Click Me</button>



      </div>
  );
}

export default App;
