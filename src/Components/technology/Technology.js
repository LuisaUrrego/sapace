import React from 'react'
import background from "../../assets/technology/background-technology-desktop.jpg";
import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
// import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
// import spacePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
// import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
// import spaceportLand from "../assets/technology/image-spaceport-landscape.jpg";
// import spaceLand from "../assets/technology/image-space-capsule-landscape.jpg";
import './technology.scss';
import StepperChakra from '../Stepper/Stepper';

const Technology = () => {

return (
    <>
        <figure className='background'>
            <img src={background} alt='background' />
        </figure>
        <h2 className="subheading">
            <span> 3 </span> Space launch 101
        </h2>
        <aside className="technology">
            <span>
                The terminology of
            </span>
            <h3>
                LAUNCH VEHICLE
            </h3>
            <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </p>
        </aside>
        <figure className='technology-img'>
            <img src={launchPortrait} alt='launchPortrait' />
        </figure>
        <StepperChakra />
    </>
    )
}

export default Technology