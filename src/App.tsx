import * as React from "react"
import {
    ChakraProvider,
    Text, Image, Center, Button, Flex, ButtonGroup, Stat, StatNumber, StatHelpText, Heading, Wrap, WrapItem
} from "@chakra-ui/react"
import theme from "./Theme"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';
import Experience from "./components/Experience";
import Education from "./components/Education";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/all";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Flex direction="column" h="100vh" justify="center">
          <Image src='statue.jpg' w={"100%"} h={"100%"} className={"fixed"}  mt={"auto"} mx={"auto"} opacity={"0.3"}/>
      </Flex>
      <Heading size={"4xl"} position={"absolute"} top={"30%"} left={"50%"} transform={"translate(-50%, -50%)"} color={"white"}>Marcos Dedeu</Heading>
      <Heading size={"lg"} position={"absolute"} top={"40%"} left={"50%"} transform={"translate(-50%, -50%)"} color={"white"}>Software Engineer</Heading>
     <Flex direction={"row"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
         <Button bg={"whiteAlpha.500"}>Download my CV
         </Button>
         <Button ml={"2rem"} bg={"blackAlpha.500"}>Contact me</Button>
     </Flex>

  </ChakraProvider>
)
