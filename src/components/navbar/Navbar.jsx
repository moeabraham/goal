import React from 'react'
import './navbar.css'
import goal from '../../assets/goal.svg'
// import goal1 from '../../assets/goal1.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = (props) => {
    console.log(props)
  return (
    <div className="navbar">
        <nav>
            <div className='logo'>
                {/* <img className="logoImg" src={goal1} alt="n/a" /> */}
                <img className="logoImg" src="https://www.goal.com/img/logo.svg" alt="n/a" />
                {/* <img src='../../assets/goal.svg' alt="n/a" /> */}
            </div>
            <div className="navs">
                <ul className='list'>
                    <li className='links'>SCORES</li>
                    <li className='links'>BREAKING NEWS</li>
                    <li className='links'>LEAGUES</li>
                    <li className='links'>LIFESTYLE</li>
                    <li className='links'>BUYER'S GUIDE</li>
                    <li className='links'>GOALSTUDIO</li>
                </ul>
                {/* small screens */}
                <div className='hamburger ' onClick={props.toggler}>
                    <GiHamburgerMenu />
                </div>
                {/* <div className='hamburger-menu'> */}
                <div className={props.menuOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
                    <ul>
                        <li className='mob-links'>SCORES</li>
                        <li className='mob-links'>BREAKING NEWS</li>
                        <li className='mob-links'>LEAGUES</li>
                        <li className='mob-links'>LIFESTYLE</li>
                        <li className='mob-links'>BUYER'S GUIDE</li>
                        <li className='mob-links'>GOALSTUDIO</li>
                    </ul>
                </div>
                
            </div>
        </nav>
       
    </div>
  )
}

export default Navbar