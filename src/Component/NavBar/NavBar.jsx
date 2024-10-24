import {React, useState} from "react"
import {FaBars} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { Link } from "react-router-dom"
import './NavBar.css';
import logo from "/images/lama.png"
const data=[
    {
        label : 'Home',
        to : '/'
    },
    {
        label : 'About',
        to : '/about'
    },
    {
        label : 'Skills',
        to : '/skills'
    },
    {
        label : 'Portfolio',
        to : '/portfolio'
    },
    {
        label : 'Contact',
        to : '/contact'
    },
];
const NavBar=()=>{
    const [toggelIcon, setToggelIcon]= useState(false);
    const handelToggelIcon = () =>{
        setToggelIcon(!toggelIcon);
    };
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                    <img src={logo}/>
                    </Link>
                </div>
                <ul className= {`navbar__menu ${toggelIcon ? "active" : ""} `}>
                    {
                        data.map((item, key)=>(
                            <li key={key} className="navbar__menu__item">
                                <Link className="navbar__menu__item__links" to={item.to}>
                                {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="navbar_icons" onClick={handelToggelIcon}>
                    {
                        toggelIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}
export default NavBar;