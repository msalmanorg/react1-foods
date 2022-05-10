import React, { useState } from 'react';
import Cards from './Cards';
import { Menu } from './MenuAPI';
import Navbar from './Navbar';
import './style.css'

const Resturant = () => {
    
    const [menuData, setMenuData] = useState(Menu);
const abc = () => {
    console.log("helo")
}

    return (
        <>
            <Navbar menu={Menu} setMenu={setMenuData} abc={abc}/>
            <Cards menuData={menuData}/>           
        </> 
    )
}

export default Resturant