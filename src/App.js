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
    // this.handleSubmit=this.handleSubmit.bind(this)
    // this.addWine=this.addWine.bind(this)
  
  
  }
  
 
 
     callApi(){
      function addWine(event){
        console.log("im in======")
       let newWine={names:event.target.name,
       year:event.target.year,
       grapes:event.target.grapes,
       country: event.target.country,
       region: event.target.region,
       description:event.target.description,
       picture:event.target.picture,
       price:event.target.price} 
        return newWine;
       
         }
     
         function handleSubmit(event){
           console.log("did update")
             let a=addWine()
             axios.post("http://myapi-profstream.herokuapp.com/api/fc5aa5/wines",a)
             event.preventDefault()
             this.callApi()
         }

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
      
    })
    .catch(error => {
      console.log('there is an eror', error)
    })
  }
    componentDidMount() {
      
      this.callApi()
      
     
  }

  render() {
    
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
  
    return (
      
    <Router> 
      <div>
        
       <div>
         <form  onSubmit={this.handleChange}>
          <h1>ADD WINE</h1>
          <label className="forms">
            <h3>Name:</h3>
            <input type="text" placeholder="Wine" onChange={this.addWine}></input>
            <h3> Year:</h3>
            <input type="text" placeholder="Year" onChange={this.addWine}></input>
            <h3>Grape:</h3>
            <input type="text" placeholder="Grape" onChange={this.addWine}></input>
            <h3>Country:</h3>
            <input type="text" placeholder="country" onChange={this.addWine}></input>
            <h3>Region:</h3>
            <input type="text" placeholder="region" onChange={this.addWine}></input>
            <h3>Description:</h3>
            <input type="text" placeholder="description" onChange={this.addWine}></input>
            <h3>Picture:</h3>
            <input type="text" placeholder="picture" onChange={this.addWine}></input>
            <h3>Price:</h3>
            <input type="text" placeholder="price" onChange={this.addWine}></input>
           </label>
          <input type="submit" value="Submit"onClick={this.addWine}></input>
        </form>
        <div>
             <nav >
             <button id="button">{links}</button>  
             </nav>
        </div>
       </div>
      
       </div>
    </Router>
    )
  }
}

export default App

