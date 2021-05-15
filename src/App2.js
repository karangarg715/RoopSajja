import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
   
   };
   setNewNumber=()=>{
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
class Content extends React.Component {
    constructor(props){
        super(props)
        this.state={value:""}
    }
   componentWillMount(nextProps,nextState) {
      console.log('Component WILL MOUNT!')
      
    //  this.setState({value:"heyo"})
      console.log(this.state.value)
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
   
      this.setState({value:"Not Any Number"})
      console.log(this.state.value)
   }
   shouldComponentUpdate(newProps, newState) {
   
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
    if(nextState.value!==this.state.value){
        this.setState({value:"2"})
    }
       console.log(nextState)
       console.log(nextProps)
       console.log("Component Will Update")
   
//       this.setState({value:this.props.myNumber+1})
//       console.log(this.state.value)
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            <h2>{this.state.value}</h2>
         </div>
      );
   }
}
export default App;