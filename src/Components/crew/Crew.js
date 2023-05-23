
// import Subheading from "./Subheading";
import { useState } from "react";
import background from "./../../assets/crew/background-crew-desktop.jpg";
import "../../Components/crew/Crew.scss";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import "./Crew.scss"


const crewUsers = () => {
    const crewList = [
        {
            "id": 0,
            "name": "Douglas Hurley",
            "images": {
                "webp": "../../assets/crew/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },

        {
            "id": 1,
            "name": "Mark Shuttleworth",
            "images": {
                "webp": "../../assets/crew/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },

        {
            "id": 2,
            "name": "Victor Glover",
            "images": {
                "webp": "../../assets/crew/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "id": 3,
            "name": "Anousheh Ansari",
            "images": {
                "webp": "../../assets/crew/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ];


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

            <container className="container">


                <h2> <span className="itemSpan">02</span> MEET YOUR CREW </h2>
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
                </div>


                {/* Pagination */}
                <div className="pagination-crew">
                    <span >
                        .</span>
                    <span >.</span>
                    <span  >.</span>
                    <span >.</span>
                </div>

            </container>


          

        </>
    )
}




export default crewUsers;