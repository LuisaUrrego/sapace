import React, { useState } from "react";
import background from "./../../assets/crew/background-crew-desktop.jpg";
import "../../Components/crewSafe/CrewSafe.scss";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import { BsCircleFill } from "react-icons/bs";
import "./CrewSafe.scss"




const crewList = [
    {
        "id": 0,
        "title": "Slider 1",
        "name": "Douglas Hurley",
        "images": "https://i.ibb.co/wSF8Cbx/image-douglas-hurley.png",

        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },

    {
        "id": 1,
        "title": "Slider 2",
        "name": "Mark Shuttleworth",
        "images": "https://i.ibb.co/Yy3PHhL/image-mark-shuttleworth.png",

        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },

    {
        "id": 2,
        "title": "Slider 3",
        "name": "Victor Glover",
        "images": "https://i.ibb.co/hCCVdkz/image-victor-glover.png",
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "id": 3,
        "title": "Slider 4",
        "name": "Anousheh Ansari",
        "images": "https://i.ibb.co/jZfnzDj/image-anousheh-ansari.png",
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

export default function Crew() {
    const [crew] = useState(crewList)
    const [value, setValue] = useState(0);

    const { name, images, role, bio } = crew[value]
    console.log(images);

    // const [activeSlider, setActiveSlider] = useState (crewList[0]);

    // const handleSliderChange = (sliderId) =>{
    //     const selectedSlider = crewList.find ((slider) => crewList.id === sliderId)
    //     setActiveSlider (selectedSlider);
    //     console.log(selectedSlider);

    // };


    // const [setCrewId] = useState(0);




    // const change = (id) => {
    //     setCrewId(id);
    // }
    // useEffect(() => {
    //     const list = document.querySelectorAll('.pagination-crew span');
    // 	for (let i = 0; i < list.length; i++) {
    // 		list[i].classList.remove('active-dot');
    // 	}
    //     list[crewId].classList.add("active-dot");
    // }, [crewId]);




    return (

        <>

            {/* <container className="container"> */}


            {/* <h2> <span className="itemSpan">02</span> MEET YOUR CREW </h2>
                <div className="crew">

                    <div className="infoArticle">

                        <h3 className="subheading">
                            COMMANDER
                        </h3>

                        <h1>
                            DOUGLAS HURLEY
                        </h1>

                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>
                    </div>


                    <figure className='crew-img'>
                        <img src={douglas} alt='imagedouglas' />
                    </figure>
                </div> */}


            {/* Pagination */}
            {/* <div className="pagination-crew">
                    <button
                        key={slider.id}
                        onClick={()=> handleSliderChange(slider)} 
                        className={activeSlider.id === slider.id ? "active" : ""}      >
                    </button>
                    
                    
                    <span >.</span>
                    <span >.</span>
                    <span  >.</span>
                    <span >.</span>
                </div> */}



            {/* </container> */}

            <section className="crew">

                <div className="crew__container ">
                    <article className="crew__left">
                        <h1>
                            <span>02</span> MEET YOUR CREW
                        </h1>
                        <div className="crew__info">
                            <h3>{role}</h3>
                            <h2>{name}</h2>
                            <p>{bio}</p>
                        </div>
                        <ul className="lista__botones">
                            {crewList.map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setValue(index)}
                                        className={`${index === value}`}
                                    >
                                        <div className="button__slider">
                                            <BsCircleFill />
                                        </div>
                                    </button>
                                </li>

                            ))}
                        </ul>
                    </article>

                    <article >

                        <img src={images} />


                    </article>
                </div>
            </section>










        </>
    )
}




// export default Crew;