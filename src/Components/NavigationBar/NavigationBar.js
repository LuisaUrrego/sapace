import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import "./NavigationBar.scss"


const NavigationBar = () => {
    const navList = [
        {
            item: "00",
            name: "HOME",
            url: ""
        },
        {
            item: "01",
            name: "DESTINATION",
            url: ""
        },
        {
            item: "02",
            name: "CREW",
            url: ""
        },
        {
            item: "03",
            name: "TECHNOLOGY",
            url: ""
        },
    ];

return (
    <container className="navBar">
    <div>
        <figure className='logo'>
            <img src={Logo} alt='logo' />
        </figure>
    </div>
        <hr />
    <div className='navBarList'>
        {navList.map((item, index) => (
            <ul className='navMenu' key={`${item.item} - ${item.name} - ${item.index}`} href={item.url}>
                {/* <ul className='navMenu'> */}
                <li>{item.item}</li>
                <li>{item.name}</li>
                {/* </ul> */}
            </ul>
        ))}
    </div>
    </container>
    )}

export default NavigationBar;