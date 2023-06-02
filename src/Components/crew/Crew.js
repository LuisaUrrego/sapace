import React from "react";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import ansari from "../../assets/crew/image-anousheh-ansari.webp";
import BackgroundImage from "../../assets/crew/background-crew-desktop.jpg";
import "./Crew.scss";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
const Destination = () => {
  return (
    
    
      <Box
      
         bgImage={`url(${BackgroundImage})`} className="background"
        bgPosition="relative"
         minHeight="100vh"
        mt="-15%"
        zIndex="-2"
        
       
      >
        <Tabs defaultIndex={0} align="center"className="main" >
          {/* <TabList mt="20%" className="main__tabs" sx={{ borderBottom: "none" }}>
            <Tab>.</Tab>
            <Tab>.</Tab>
            <Tab>.</Tab>
            <Tab>.</Tab>
          </TabList> */}
          <TabPanels align="initial"  className="main__text">
            <TabPanel className="main__text">
             
              <Text fontSize={30} >02 MEET YOUR CREW</Text>
              <Text fontSize={25} >COMMANDER</Text>
              <Heading fontSize={40}>DOUGLAS HURLEY</Heading>
              <Text fontSize={20} className="pText">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
              </Text>
              
              
              <Image boxSize="200px" fit="cover" src={douglas} className="imagen" />
              
              </TabPanel>


            <TabPanel className="main__text">
              
              <Text fontSize={30}>02 MEET YOUR CREW</Text>
              <Text fontSize={25}>MISSION SPECIALIS</Text>
              <Heading fontSize={40}>MARK SHUTTLEWORTH </Heading>
              <Text fontSize={20} className="pText">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
              </Text>
              
              
              <Image boxSize="200px" fit="cover" src={mark} />
              
            </TabPanel>
            <TabPanel>
              <Text fontSize={30}>02 MEET YOUR CREW</Text>
              <Text fontSize={25}>PILOT</Text>
              <Heading fontSize={40}>VICTOR GLOBER</Heading>
              <Text fontSize={20} className="pText">
              Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
              </Text>
              <Image boxSize="200px" fit="cover" src={victor} />
            </TabPanel>
            <TabPanel>
              <Text fontSize={30}>02 MEET YOUR CREW</Text>
              <Text fontSize={25}>FLIGHT ENGINEER</Text>
              <Heading fontSize={40}>ANOUSHEH ANSARI</Heading>
              <Text fontSize={20} className="pText">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </Text>
              <Image boxSize="200px" fit="cover" src={ansari} />
            </TabPanel>
          </TabPanels>
          <TabList mt="0%" className="main__tabs" sx={{ borderBottom: "none" }}>
            <Tab>.</Tab>
            <Tab>.</Tab>
            <Tab>.</Tab>
            <Tab>.</Tab>
          </TabList>


          
        </Tabs>
      </Box>


  );
};

export default Destination;