//Daniel Kenny 28/08/19
//Example of how to make a call to an external api with react using componentDidMount
import React, {Component} from "react";
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
          loading : false,
          character: {}
        }
    }

    //Useing componentDidMount to make an external call to an api and resolve the data
    componentDidMount(){
      this.setState({loading: true})
      fetch("https://swapi.co/api/people/4") //Search the Star Wars api for the first person record
        .then(response => response.json()) // resolve the data
        .then(data => this.setState({loading:false, character : data})) //set is loading to flase after data resolved
        
    }

    render(){
      //using a ternary operator to display a loading message until the data has been resolved
      const displayText = this.state.loading ? "Loading..." : this.state.character.name
      return (
        <div className="App">
          <h1>{displayText}</h1>
          
        </div>
      );
    }
  
}

export default App;
