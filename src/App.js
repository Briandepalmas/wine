import React, { Component } from 'react'
import { Route,Switch,Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css'
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
      //  console.log("aaaaaaa ---->", this.state.names)
      //  console.log("bbbbbbbbb",this.state.year)
      //  console.log("bbbbbbbbb",this.state.grapes)
        console.log("bbbbbbbbb",this.state.country)
      //  console.log("bbbbbbbbb",this.state.region)
      //  console.log("bbbbbbbbb",this.state.description)
      //  console.log("bbbbbbbbb",this.state.picture)
       console.log("bbbbbbbbb",this.state.price)
      //  console.log("bbbbbbbbb",this.state.year)
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
  
    let links= this.state.data.map((wine, id) => 
  <div className="abc" key={id}>
    <Link to={linkID(id)}>
     <img  src={wine.picture} alt="wines"/> 
    </Link>
   <div>
     <Link  id="fonts"to={linkID(id)}>{wine.name}</Link> 
   </div>
   
  </div>
 )
  
  
  // let years=this.state.year.map(wineyear => <h1>{wineyear}</h1>)
   
   
   
    return (
    <Router>
      <div> 
      
        <nav >
              {links}
        </nav>  
       </div>
    </Router>
    )
  }
}

export default App

