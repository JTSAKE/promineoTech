import React from 'react';
import logo from '../assets/logo.jpg'
import logoStyle from './logo.css'

console.log(logo);

function Header() {
    return <img src= {logo} alt='logo'></img>
}

export default Header;