import React from "react";
import background from "../../assets/technology/background-technology-desktop.jpg";
import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
// import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
// import launchLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
// import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import "./Technology.scss";
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

const Technology = () => {
    return (
        <Box 
            bgImage={`url(${background})`} 
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            minHeight="100vh"
        >
        <Tabs defaultIndex={0} align="center" className="main">
            <TabList className="main__tabs" sx={{ borderBottom: "none" }}>
                <Tab className="tabs">1</Tab>
                <Tab className="tabs">2</Tab>
                <Tab className="tabs">3</Tab>
            </TabList>

            <TabPanels align="initial" className="main__panels">
                <TabPanel className="main__text">
                    <Text fontSize={28}>03 SPACE LAUNCH 101</Text>
                    <Text fontSize={16}>THE TERMINOLOGY OF</Text>
                    <Image boxSize="400px" fit="cover" position="absolute" ml="45%" src={launchPortrait} />
                    <Heading fontSize={36}>LAUNCH VEHICLE</Heading>
                    <Text fontSize={18}>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text fontSize={28}>03 SPACE LAUNCH 101</Text>
                    <Text fontSize={16}>THE TERMINOLOGY OF</Text>
                    <Image boxSize="400px" fit="cover" position="absolute" ml="45%" src={spaceportPortrait} />
                    <Heading fontSize={36}>SPACEPORT</Heading>
                    <Text fontSize={18}>
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text fontSize={28}>03 SPACE LAUNCH 101</Text>
                    <Text fontSize={16}>THE TERMINOLOGY OF</Text>
                    <Image boxSize="400px" fit="cover" position="absolute" ml="45%" src={capsulePortrait} />
                    <Heading fontSize={36}>SPACE CAPSULE</Heading>
                    <Text fontSize={18}>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>
    );
};

export default Technology;
