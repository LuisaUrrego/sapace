import React from "react";
import Moon from "../../assets/destination/image-moon.webp";
import Mars from "../../assets/destination/image-mars.webp";
import Europa from "../../assets/destination/image-europa.webp";
import Titan from "../../assets/destination/image-titan.webp";
import BackgroundImage from "../../assets/destination/background-destination-desktop.jpg";
import "./StyleDestination.scss";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
const Destination = () => {
  return (
    <>
      <Box
        bgImage={`url(${BackgroundImage})`}
        className="background"
        bgPosition="relative"
        minHeight="100vh"
        mt="-15%"
        zIndex="-2"
      >
        <main className="main">
          <Tabs mt="20%" defaultIndex={0} align="center">
            <section className="main__information">
              <div className="main__tabs">
                <TabList  sx={{ "& > [data-active]": { "&:hover": { color: "inherit" } }, borderBottom: "none", gap: "30px", fontSize: "24px" }}>
                  <Tab>Moon</Tab>
                  <Tab>Mars</Tab>
                  <Tab>Europa</Tab>
                  <Tab>Titan</Tab>
                </TabList>
              </div>
            </section>
            <section>
              <TabPanels align="initial" className="main__tabPanels">
                <TabPanel className="main__moon">
                  <div className="main__name__planet">
                    <h2 className="">MOON</h2>
                  </div>
                  <figure className="main__figure">
                    <img src={Moon} />
                  </figure>

                  <div className="main__container_description">
                    <p className="main__description">
                      See our planet as you've never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you're there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                  </div>
                  <hr className="main__separador"></hr>
                  <section className="main__text">
                    <h5 className="main__number">01</h5>
                    <h5 className="main__title_destination">PICK YOUR DESTINATION</h5>
                  </section>
                </TabPanel>
                <TabPanel className="main__moon">
                  <div className="main__name__planet">
                    <h2 className="">MARS</h2>
                  </div>
                  <figure className="main__figure">
                    <img src={Mars} />
                  </figure>

                  <div className="main__container_description">
                    <p className="main__description">
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                    </p>
                  </div>
                  <section className="main__text">
                    <h5  className="main__number">01</h5>
                    <h5 className="main__title_destination">PICK YOUR DESTINATION</h5>
                  </section>
                </TabPanel>
                <TabPanel className="main__moon">
                  <div className="main__name__planet">
                    <h2 className="">EUROPA</h2>
                  </div>
                  <figure className="main__figure">
                    <img src={Europa} />
                  </figure>

                  <div className="main__container_description">
                    <p className="main__description">
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                    </p>
                  </div>
                  <section className="main__text">
                    <h5  className="main__number">01</h5>
                    <h5 className="main__title_destination">PICK YOUR DESTINATION</h5>
                  </section>
                </TabPanel>
                <TabPanel className="main__moon">
                  <div className="main__name__planet">
                    <h2 className="">TITAN</h2>
                  </div>
                  <figure className="main__figure">
                    <img src={Titan} />
                  </figure>

                  <div className="main__container_description">
                    <p className="main__description">
                    The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred
                    degrees colder!). As a bonus, you get striking views of the
                    Rings of Saturn.
                    </p>
                  </div>
                  <section className="main__text">
                    <h5  className="main__number">01</h5>
                    <h5 className="main__title_destination">PICK YOUR DESTINATION</h5>
                  </section>
                </TabPanel>
              </TabPanels>
            </section>
          </Tabs>
        </main>
      </Box>
    </>
  );
};

export default Destination;