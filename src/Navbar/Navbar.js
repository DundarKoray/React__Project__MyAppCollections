import { useState } from "react"
import { Link } from 'react-router-dom'
import "./navbar.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo_transparent.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  // console.log(isOpen)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="company-logo" />
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${"nav-links"} ${"show-nav"}`
              : `${"nav-links"}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className="nav-social-links">
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
