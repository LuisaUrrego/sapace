// import React from 'react'
// import Logo from '../../assets/icons/logo.svg'
// import HamburgerNav from '../../assets/icons/icon-hamburger.svg';
// import HamburgerCancel from '../../assets/icons/icon-close.svg';
// import "./NavigationBar.scss"
// import { Link } from "react-router-dom";

// const NavigationBar = () => {
//     const navList = [
//         {
//             item: "00",
//             name: "HOME",
//             url: "/"
//         },
//         {
//             item: "01",
//             name: "DESTINATION",
//             url: "/destination"
//         },
//         {
//             item: "02",
//             name: "CREW",
//             url: "/crew"
//         },
//         {
//             item: "03",
//             name: "TECHNOLOGY",
//             url: "/technology"
//         },
//     ];

//     return (
//         <container className="navBar">
//             <div>
//                 <figure className='logo'>
//                     <img src={Logo} alt='logo' />
//                 </figure>
//             </div>
//             <hr />
//             <div className='navBarList'>
//                 {navList.map((item, index) => (
//                     <ul className='navMenu' key={`${item.item} - ${item.name} - ${item.index}`} href={item.url}>
//                         {/* <ul className='navMenu'> */}
//                         <Link to={item.url}>{item.item}</Link>
//                         <Link to={item.url}>{item.name}</Link>
//                         {/* </ul> */}
//                     </ul>
      
//                 ))}
//             </div>
//         </container>
//     )
// }

// export default NavigationBar;

// import React from 'react';
// import Logo from '../../assets/icons/logo.svg';
// import HamburgerNav from '../../assets/icons/icon-hamburger.svg';
// import HamburgerCancel from '../../assets/icons/icon-close.svg';
// import { Link } from 'react-router-dom';
// import './NavigationBar.scss';

// const NavigationBar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const navList = [
//     {
//       item: '00',
//       name: 'HOME',
//       url: '/'
//     },
//     {
//       item: '01',
//       name: 'DESTINATION',
//       url: '/destination'
//     },
//     {
//       item: '02',
//       name: 'CREW',
//       url: '/crew'
//     },
//     {
//       item: '03',
//       name: 'TECHNOLOGY',
//       url: '/technology'
//     }
//   ];

//   const handleToggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleWindowResize = () => {
//     if (window.innerWidth > 375) {
//       setIsOpen(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('resize', handleWindowResize);
//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//     };
//   }, []);

//   return (
//     <div className={`navBar ${isOpen ? 'open' : ''}`}>
//     <div>
//       <figure className="logo">
//         <img src={Logo} alt="logo" />
//       </figure>
//     </div>
//     <hr />
//     <div className="navBarList">
//       <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={handleToggleMenu}>
//         <img className="hamburguesa" src={isOpen ? HamburgerCancel : HamburgerNav} alt="" />
//       </div>
//       {(isOpen || window.innerWidth > 375) && (
//         <ul className="navMenu">
//           {navList.map((item, index) => (
//             <li className="navMenuItem" key={`${item.item}-${index}`} href={item.url}>
//               <Link to={item.url}>
//                 <span className="itemNumber">{item.item}</span>
//                 <span className="itemName">{item.name}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   </div>
// );
// };

// export default NavigationBar;

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

