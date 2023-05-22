import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import './navigationBar.scss';

const NavigationBar = () => {
    const navList = [
        {
            item: "00",
            name: "Home",
            url: ""
        },
        {
            item: "01",
            name: "Destination",
            url: ""
        },
        {
            item: "02",
            name: "Crew",
            url: ""
        },
        {
            item: "03",
            name: "Technology",
            url: ""
        },
    ];

return (
    <container className='nav'>
        <div>
            <figure>
                <img src={Logo} alt='logo' />
            </figure>
        </div>
        <div>
            {navList.map((item, index) => (
                <a key={`${item.item} - ${item.name} - ${item.index}`} href={item.url}>
                    <li>{item.item}</li>
                    <li>{item.name}</li>
                </a>
            ))}
        </div>
    </container>
    )}

export default NavigationBar;