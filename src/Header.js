import React from 'react'
import Logo from './Images/Logo.png'

import './Header.css';
import {AiOutlineMenu} from "react-icons/ai";

export default function Header(){
    return (
      <nav>
        <img src={Logo} alt='React Logo' className='nav-logo'/>
        <ul>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li className='menu'><AiOutlineMenu /></li>
        </ul>
      </nav>
    )
  }