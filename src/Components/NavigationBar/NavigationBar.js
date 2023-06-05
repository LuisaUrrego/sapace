import React, { useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import HamburgerNav from '../../assets/icons/icon-hamburger.svg';
import HamburgerCancel from '../../assets/icons/icon-close.svg';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = () => {
  const navList = [
    {
      item: '00',
      name: 'HOME',
      url: '/'
    },
    {
      item: '01',
      name: 'DESTINATION',
      url: '/destination'
    },
    {
      item: '02',
      name: 'CREW',
      url: '/crew'
    },
    {
      item: '03',
      name: 'TECHNOLOGY',
      url: '/technology'
    }
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navBar">
      <div>
        <figure className="logo">
          <img src={Logo} alt="logo" />
        </figure>
      </div>
      <hr className="desktopHr" />
      <div className="navBarList">
        <img
          className="hamburger"
          src={showMenu ? HamburgerCancel : HamburgerNav}
          alt=""
          onClick={handleClick}
        />
        <ul className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
          {navList.map((item, index) => (
            <li className="navMenuItem" key={`${item.item}-${index}`} href={item.url}>
              <Link to={item.url}>
                <span className="itemNumber">{item.item}</span>
                <span className="itemName">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

