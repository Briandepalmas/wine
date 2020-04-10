import React, { Component } from 'react'
import axios from 'axios'


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      data: []
    }
  }
  componentDidMount() {
 

    axios.get("http://myapi-profstream.herokuapp.com/api/fc5aa5/wines")
    .then(response => {
      const wines = response.data;
      console.log("wines ---->", wines)
      
      this.setState({data: wines})

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }



  render() {
    return (
      <div>
        <h1>{"ss"+this.state.data}</h1>
      </div>
    )
  }
}

export default App

