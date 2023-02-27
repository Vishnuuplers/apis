import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
  <header className='site-header'>
        <div className="wrapper">
            <div className="nav-container">
                <nav className='site-nav'>
                    <div className="nav-left">
                        <h1>React </h1>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li>
                                <NavLink to="/"> Home</NavLink>
                            </li>
                        
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
  </header>
  )
}
