import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryList from '../src/components/CountryList/CountryList'

class App extends React.Component{
    constructor(){
      super();
        this.state = {
          countries:[],
          stats:[]

        }
      }

      // commponnetn didMOunt
      async componentDidMount(){
        const resp = await fetch('https://api.covid19api.com/countries')
        const countries = await resp.json()
        this.setState({countries})
        this.state.countries.forEach(async country => {
          // ambil api fetch menggunakain async await 
          const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
          const data = await resp.json()
          if(data.length)
          this.setState(prevState => (
            {stats:prevState.stats.concat({...data[data.length - 1], CountryCode:country.ISO2})}
          ))
        })
      }

      render(){
        return (
          <div className="App">
            <CountryList stats = {this.state.stats}/>
          </div>
        );
      }
    }
export default App;
