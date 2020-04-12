import React, { Component } from 'react'
import { Route,Switch,Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
import Wineinfo from './components/Wineinfo'
import Forms from './components/Forms'


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      names:[],
      year:[],
      grapes:[],
      country:[],
      region:[],
      description:[],
      picture:[],
      price:[]

    }
  }
  componentDidMount() {
 

    axios.get("http://myapi-profstream.herokuapp.com/api/fc5aa5/wines")
    
    
    

    .then(response => {
      const wines = response.data;
      let wineNames=[]
      let wineYear=[]
      let wineGrapes=[]
      let wineRegion=[]
      let wineCountry=[]
      let wineDescription=[]
      let winePicture=[]
      let winePrice=[]
     
      console.log("wines ---->", wines)
       this.setState({data: wines})
        
       for(let i=0;i<wines.length;i++){
          //console.log(wines[i].name)
         wineNames.push(wines[i].name)
         wineYear.push(wines[i].year)
         wineGrapes.push(wines[i].grapes)
         wineRegion.push(wines[i].region)
         wineCountry.push(wines[i].country)
         wineDescription.push(wines[i].description)
         winePicture.push(wines[i].picture)
         winePrice.push(wines[i].price)
          this.setState({
            names:wineNames,
            year:wineYear,
            grapes:wineGrapes,
            country:wineCountry,
            region:wineRegion,
            description:wineDescription,
            picture:winePicture,
            price:winePrice

          }) 
       }
      //  console.log("winessssss ---->", this.state.names)
      //  console.log("la cienxzia",this.state.year)
    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }



  render() {
    //console.log("la cienxzia"+this.state.data.country)
    function linkID(id){
      let a=0+id
      let b="/"+a
      return b
    }
      let links= this.state.names.map((wine, id) => <li key={id}><Link to={linkID(id)} > {wine} </Link></li>)
     
   
   
   
    return (
    <Router>
      <div>
        <ul>
           {links}
        </ul>
        
         <div>
            <Wineinfo info={this.state.data.description}/>
         </div>
       </div>
      {/* <Switch>
       <Route exact path="/abc" component={Forms} />
      </Switch> */}





    </Router>
    )
  }
}

export default App

