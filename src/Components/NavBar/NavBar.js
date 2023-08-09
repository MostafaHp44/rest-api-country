import { useState,useEffect} from 'react';
import './NavBar.css'
import NightlightIcon from '@mui/icons-material/Nightlight';

const NavBar = () => {

    const [theme, setTheme] = useState('light');

    const ToggelTheme=()=>{
        if (theme==='light')
        {
            setTheme('dark')
        }
        else
        {
            setTheme('light')
        }
    }    
    useEffect(() => {

    document.body.className=theme;

    localStorage.setItem('theme',theme)
    
    }, [theme]);
    const darkmode=localStorage.getItem('theme')
        console.log(`theme is ${document.body.className}`);
    return (

    <div className="MainNavBar">

        <nav >
            <span className='TextNavBar'>Where in the world?</span>

            <button className='ButtonNavBar' onClick={ToggelTheme} style={darkmode?{backgroundColor:'#fff',border:"1px #fff solid",color:"#000"}:{backgroundColor:'#2B3945',color:'#fff'}}> <NightlightIcon/> Dark Mode</button>
        </nav>
    </div>
    
    );
}
 
export default NavBar;