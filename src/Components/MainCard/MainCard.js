import './MainCard.css'
import axios from 'axios';
import { ALL_Country,NAME_Country,REGION_Country,CODE_Country } from '../Api/api';
import { useState,useEffect} from 'react';



const MainCard = (props) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const darkmode=localStorage.getItem('theme')

    useEffect(() => {
        const fetchCountries = () => {
            axios.get(ALL_Country).then(({ data }) => {
              setCountries(data);
              setLoading(false);
            });
          };
          
        countries.length === 0 ? fetchCountries() : setLoading(false);
      }, [],
      
      );
    
      const handleFetchRegion = async (region) => {
        setLoading(true);
        const countriesRegion =
          region === 'All'
            ? await axios.get(ALL_Country)
            : await axios.get(REGION_Country(region));
        setCountries(countriesRegion.data);
        setLoading(false);
      };

      const search=props.search

      const handleFetchSearch = async (search) => {
        setLoading(true);
        const countriesSearch =
          search === ''
            ? await axios.get(ALL_Country)
            : await axios.get(NAME_Country(search));
        setCountries(countriesSearch.data);
        setLoading(false);

      };
    
     
    return (
<div className='MainAllCard'>
    
    <div className="AllCards">
    {
       props.select==='All' ?
       countries.map((country, index) => (

         <div className="MainCard" key={index} onClick={()=>{props.ClickTap(country.name.common)}} style={darkmode==="light"?{backgroundColor:"#2B3945" ,border:"none"}:{backgroundColor:'#fff'}}>
             <img src={country.flags.png} alt='' className='imgcountry'></img>
             <div className='NameCountry'><span>{country.name.common}</span></div>
             <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
             <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
             <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
         </div>
       ))
       :
       props.select==='Asia'?
       countries.filter((r)=>(r.region==='Asia')).map((country, index) => (

        <div className="MainCard" key={index}>
            <img src={country.flags.png} alt='' className='imgcountry'></img>
            <div className='NameCountry'><span>{country.name.common}</span></div>
            <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
            <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
            <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
       </div>
      ))
      :
      props.select==='Africa'?
      countries.filter((r)=>(r.region==='Africa')).map((country, index) => (

       <div className="MainCard" key={index}>
           <img src={country.flags.png} alt='' className='imgcountry'></img>
           <div className='NameCountry'><span>{country.name.common}</span></div>
           <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
           <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
           <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
      </div>
     ))
     :
     props.select==='America'?
      countries.filter((r)=>(r.region==='America')).map((country, index) => (

       <div className="MainCard" key={index}>
           <img src={country.flags.png} alt='' className='imgcountry'></img>
           <div className='NameCountry'><span>{country.name.common}</span></div>
           <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
           <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
           <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
      </div>
     ))
     :
     props.select==='Europe'?
     countries.filter((r)=>(r.region==='Europe')).map((country, index) => (

      <div className="MainCard" key={index}>
          <img src={country.flags.png} alt='' className='imgcountry'></img>
          <div className='NameCountry'><span>{country.name.common}</span></div>
          <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
          <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
          <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
     </div>
    ))
    :
    props.select==='Oceania'?
    countries.filter((r)=>(r.region==='Oceania')).map((country, index) => (

     <div className="MainCard" key={index}>
         <img src={country.flags.png} alt='' className='imgcountry'></img>
         <div className='NameCountry'><span>{country.name.common}</span></div>
         <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
         <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
         <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
    </div>
   ))
   :
  props.search===props.CountryName?.[0]?.name?.common
  ?
  countries.filter((cn)=>(search===cn?.name?.common)).map((country,index)=>(
    <div className="MainCard" key={index} onClick={()=>{props.ClickTap(country.name.common)}}>
    <img src={country.flags.png} alt='' className='imgcountry'></img>
    <div className='NameCountry'><span>{country.name.common}</span></div>
    <div className='Population'><span>Population:</span> <span className='numpop'>{country.population}</span></div>
    <div className='Region'><span>Region: </span><span className='namereg'>{country.region}</span></div>
    <div className='Capital'><span>Capital: </span><span className='namecpital'>{country.capital}</span></div>
</div>
  ))
  :
  <div>No Country Found </div>

    } 
    
  
      
     </div>


     </div>
    );
}
 
export default MainCard;