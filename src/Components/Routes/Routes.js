import {Routes,Route } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";
import SearchBar from "../SearchandFilterBar/SearchBar";

const Rout = () => {
    const nameCountry = localStorage.getItem('tab');
    console.log(nameCountry);

    return (

    <div className="MainRoutes">
        
    <Routes>
        <Route path="/" element={<SearchBar/>}></Route>
        <Route path="/:Cameroon"  element={<CountryDetails/>}></Route>
   </Routes>
    </div>
    );
}
 
export default Rout;