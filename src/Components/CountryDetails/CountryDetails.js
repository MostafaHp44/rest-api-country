import './CountryDetails.css'
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { ALL_Country,NAME_Country,REGION_Country,CODE_Country } from '../Api/api';



const CountryDetails = () => {
    const navigate = useNavigate();
  const params = useParams();

  const [country, setCountry] = useState({});
  const [domains, setDomains] = useState('');
  const [currencies, setCurrencies] = useState('');
  const [languages, setLanguages] = useState('');
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    (async () => {
      const nameCountry = localStorage.getItem('tab');
      const {
        data: [countryData],
      } = await axios.get(NAME_Country(nameCountry));
      const countryCodes = await axios.get(CODE_Country(countryData.borders));

      setCountry(countryData);
      console.log(country);
      setCodes(countryCodes.data.map((code) => code.name.common));
      setCurrencies(
        Object.values(countryData.currencies)
          .map((currency) => currency.name)
          .join(', ')
      );
      setLanguages(
        Object.values(countryData.languages)
          .map((language) => language)
          .join(', ')
      );
      setDomains(countryData.tld.join(', '));
    })();
  }, [params]);

  const handleBorder = (event) => {
    const url = String(event.target.textContent);
    localStorage.setItem('tab', url);
    navigate(`/${url}`);
  };

  const backButton = () => {
    localStorage.setItem('tab', '/');
    navigate('/');
  };
    return (
    <div className="MainCountryDetails">

        <div className='Fir'>
            <button className='BackHome' onClick={backButton}>Back To Home</button>
        </div>

        <div className='Sec'>
            <div className='ImgCountry'>
                <img src={country?.flags?.png}></img>
            </div>

            <div className='Col-2CD'>
                <div className='country-name' ><h1 className='cn'>{country?.name?.official}</h1></div>
                <div className='Population-2'><span >Population : </span> <span className='numpop-2'>{country.population}</span></div>
                <div className='Region-2'><span>Region : </span><span className='namereg-2'>{country.region}</span></div>
                <div className='SubRegion'><span>Sub Region : </span><span className='Sub'>{country.subregion}</span></div>
                <div className='Capital-2'><span>Capital : </span><span className='cap'>{country.capital}</span></div>
            </div>

            <div className='Col-3CD'>
                <div className='TopLevelDomain'><span>Top Level Domain :</span>{}<span className='top'></span></div>
                <div className='Currencies'><span>Currencies :</span>{country?.currencies?.SAR?.name}<span className='cur'></span></div>
                <div className='Languages'><span>Languages :</span>{country?.languages?.ara}<span className='lang'></span></div>

            </div>

        </div>

    </div>
    );
}
 
export default CountryDetails;