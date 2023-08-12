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
      <Flex>
          <Navbar/>
      </Flex>
      <Flex direction="column" h="90vh" justify="center">
          <Flex direction={"column"} justify={"center"}>
              <Image src='statue.png' w={{base:'100px', md:'400px'}}/>
              <Heading size={{ base: 'xl', md:'4xl'}} alignItems='center' mx="auto" mt="-10rem">
                  <Center>
                      <Text align="center">Hi, I'm Marcos</Text>
                  </Center>
              </Heading>
          </Flex>
          <Flex mt={{ base:'1rem', md:'2rem'}} m="auto">
              <ButtonGroup alignItems="center">
                  <Button>
                      <a href="mailto:mdedeu@itba.edu.ar">
                          Let's talk
                      </a>
                  </Button>
                  <Button colorScheme='green'>
                      <a href="/DEDEU_CV.pdf" download="Dedeu_CV.pdf">
                          Download my CV
                      </a>
                  </Button>
              </ButtonGroup>

          </Flex>
      </Flex>
      <Flex direction="column" gap={8} my={10} justify="center" align="center" mx={"auto"}>

          <Heading size="md" mx="auto" >Follow me on social media</Heading>
          <Flex m="auto" gap={8}>
              <a href="https://twitter.com/marquitos_eth" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size="2em"/>
              </a>
              <a href="https://www.linkedin.com/in/marcosdedeu/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size="2em"/>
              </a>
              <a href="https://github.com/mdedeu" target="_blank" rel="noopener noreferrer">
                  <FaGithub size="2em"/>
              </a>
          </Flex>
      </Flex>


  </ChakraProvider>
)
