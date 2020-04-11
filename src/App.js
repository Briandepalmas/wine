import React, { Component } from 'react'
import { Route,Switch,Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
import Forms from './components/Forms'


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      abc:[]
    }
  }
  componentDidMount() {
 

    axios.get("http://myapi-profstream.herokuapp.com/api/fc5aa5/wines")
    
   

    .then(response => {
      const wines = response.data;
      let wineNames=[]
      console.log("wines ---->", wines)
       this.setState({data: wines})
        
       for(let i=0;i<wines.length;i++){
          //console.log(wines[i].name)
          wineNames.push(wines[i].name)
          this.setState({abc:wineNames})
          //console.log(this.state.abc)
       }
       console.log(this.state.abc[2])
      let links = this.state.abc.map((number) => <link to="/">{number}</link>);
      console.log(links)
    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }



  render() {
    return (
    <Router>
      <div>
        
          {this.state.abc.map((wine, id) => <div><Link to="/abc" key={id}> {wine} </Link></div>)}
          {/* <h1>{this.state.data[3].name}</h1> */}
    {/* <Link to="/abc">{this.state.abc}</Link> */}
          {/* {this.state.data.map((wine, id) => <img key={id} src={wine.pictures} alt="wines"/>)} */}
        
      </div>
      {/* <Switch>
       <Route exact path="/abc" component={Forms} />
      </Switch> */}





    </Router>
    )
  }
}

export default App

