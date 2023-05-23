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
  Image,
  ChakraProvider,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
const Destination = () => {
  return (
    
    <ChakraProvider>
      <Box
      
         bgImage={`url(${BackgroundImage})`} className="background"
        bgPosition="relative"
         minHeight="100vh"
        mt="-15%"
        zIndex="-2"
        
       
      >
        <Tabs defaultIndex={0} align="center"className="main" >
          <TabList mt="20%" className="main__tabs" sx={{ borderBottom: "none" }}>
            <Tab>Moon</Tab>
            <Tab>Mars</Tab>
            <Tab>Europa</Tab>
            <Tab>Titan</Tab>
          </TabList>
          <TabPanels align="initial"  className="main__text">
            <TabPanel className="main__text">
              <Text fontSize={15} >01 PICK YOUR DESTENATION</Text>
              <Image boxSize="200px" fit="cover" src={Moon} />
              <Heading fontSize={35}>MOON</Heading>
              <Text fontSize={15}>
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you're there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize={15}>01 PICK YOUR DESTENATION</Text>
              <Image boxSize="200px" fit="cover" src={Mars} />
              <Heading fontSize={35}>MARS</Heading>
              <Text fontSize={15}>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize={15}>01 PICK YOUR DESTENATION</Text>
              <Image boxSize="200px" fit="cover" src={Europa} />
              <Heading fontSize={35}>EUROPA</Heading>
              <Text fontSize={15}>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize={15}>01 PICK YOUR DESTENATION</Text>
              <Image boxSize="200px" fit="cover" src={Titan} />
              <Heading fontSize={35}>TITAN</Heading>
              <Text fontSize={15}>
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>

  );
};

export default Destination;
