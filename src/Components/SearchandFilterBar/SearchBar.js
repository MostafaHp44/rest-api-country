import { useState,useEffect} from 'react';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import MainCard from '../MainCard/MainCard';
import { ALL_Country,NAME_Country } from '../Api/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {

   
    

    const [select,setselect]=useState('')
    const [search,setsearch]=useState('')
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const darkmode=localStorage.getItem('theme')
    


    const navigate = useNavigate();



    const handelSelect=(e)=>{
        setselect(e.target.value)
        console.log(select);
    }

    const handelSearch=(e)=>{
        setsearch(e.target.value)
        console.log(search);
    }

    const handleFetchSearch = async (e) => {
        setsearch(e.target.value)
        console.log(search);
        setLoading(true);
        const countriesSearch =
        search === ''
            ? await axios.get(ALL_Country)
            : await axios.get(NAME_Country(search))
            console.log(countries?.[0]?.name?.common);
            console.log(NAME_Country(search));
        setCountries(countriesSearch.data);
        setLoading(false);
      };
      

   
      
      const handleTabState = (tab) => {
        const url = String(tab);
        localStorage.setItem('tab', url);
        navigate(`/${url}`);
      };

      
    return (
<div className='MainApp'>

   <div className="MainSearnavigatechBar">
        <nav>
            

            <div className='SearchCountry' >
             <input type='text' placeholder='Search For a country' className='InputSearchCountry' onChange={handleFetchSearch} value={search} />
            </div>

            <div className='SelectCountry' >
                
              <select className='SelectCountryOption' onChange={handelSelect}>
                <option value='Filter By Region'>Filter By Region</option>
                <option value='All'>All</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </div>

            
        </nav>
   </div>

   <MainCard search={search}
             select={select}
             ClickTap={handleTabState}
             CountryName={countries}

    />

</div>
    


    );
}
 
export default SearchBar;