import React from "react";
import BackgroundHome from "../../assets/home/background-home-desktop.jpg";
import "../home/home.scss";


const Home = () => {
    return (
        <div className="homepage">
            <article className="home-text">
                <span id="heading">So, You want to travel to</span>
                <h1>Space</h1>
                <p>
                    Let's face it: if you want to go to space, you might as well genuinely
                    go to outer space and not hover kind of on the edge of it. Well sit
                    back, and relaxed because we'll give you a truly out of this world
                    experience.
                </p>
            </article>
            <button className="explore-btn">
                Explore
            </button>
        </div>
    );
};

export default Home;
