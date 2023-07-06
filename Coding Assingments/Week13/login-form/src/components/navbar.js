import React from 'react';
import Header from './logo';
import navbarStyle from './navbar.css';


export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Header/>
                <div id='linkList'>
                    <a href='#'>Home</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>About Me</a>
                </div>
            </nav>
        );
    }
}