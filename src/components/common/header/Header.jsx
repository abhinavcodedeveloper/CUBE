import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import logo from './logo.png'
import logo2 from './logo2.jpg'
const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
    
        <header>
        <div className='container flex'>
          <div className='logoImg'>
            <img src={logo} alt=''  />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <a className='btn1' href="https://wie-olive.vercel.app  ">
              <i className='fa fa-sign-out'></i> CONTRACT
            </a>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header> 
    </>
  )
}

export default Header
