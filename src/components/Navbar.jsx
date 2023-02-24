// React
import { useState } from "react";
// Data
import { pageLinks, socialMediaLinks } from "../data";
// React Icons
import { AiOutlineMenu } from "react-icons/ai";
// Components
import Dropdown from "./Dropdown";

const Navbar = ({ showMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const showMenuFull = showMenu || window.innerWidth <= 1100;

  return (
    <nav className='navbar-container'>
      <div className='navbar-container__content'>
        <h1>axense234</h1>
        {!showMenuFull ? (
          <>
            <div className='navbar-container__page-links'>
              {pageLinks.map((pageLink) => {
                return (
                  <a href={pageLink.destination} key={pageLink.id}>
                    {pageLink.label}
                  </a>
                );
              })}
            </div>
            <div className='navbar-container__social-media'>
              {socialMediaLinks.map((socialMediaLink) => {
                return (
                  <a
                    href={socialMediaLink.destination}
                    key={socialMediaLink.id}
                  >
                    <img
                      src={socialMediaLink.iconUrl}
                      alt={socialMediaLink.destination}
                    />
                  </a>
                );
              })}
            </div>
          </>
        ) : (
          <button
            type='button'
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <AiOutlineMenu />
          </button>
        )}
      </div>
      <Dropdown showDropdown={showDropdown && window.innerWidth <= 1100} />
    </nav>
  );
};

export default Navbar;
