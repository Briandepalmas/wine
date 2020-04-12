import React, { Component } from 'react'
import { Route,Switch,Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
import Forms from './components/Forms'


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      names:[]
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
          this.setState({names:wineNames})
          //console.log(this.state.abc)
       }
       //console.log(this.state.abc[2])
     // let links = this.state.abc.map((number) => <link to="/">{number}</link>);
    //let links= this.state.abc.map((wine, id) => <li key={id}><Link to="/abc" > {wine} </Link></li>)
    //  function links(){
    //   let links= this.state.abc.map((wine, id) => <li key={id}><Link to="/abc" > {wine} </Link></li>)
    //   return links
    // }
    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }



  render() {
   
    function linkss(id){
      let a=0
      let b=a+id
      let c="/"+b
      return c
    }
      let links= this.state.names.map((wine, id) => <li key={id}><Link to={linkss(id)} > {wine} </Link></li>)
     
    //   return links
    // }
   
   
    return (
    <Router>
      <div>
        <ul>
           {/* {this.state.abc.map((wine, id) => <li key={id}><Link to="/abc" > {wine} </Link></li>)} */}
           {links}
        </ul>
         
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

