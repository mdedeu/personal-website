import * as React from "react"
import {
    ChakraProvider,
    theme, Text, Image, Center, Button,  Flex, ButtonGroup, Stat,  StatNumber, StatHelpText, Heading
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';
import Experience from "./components/Experience";
import Education from "./components/Education";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/all";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar/>
      <Flex direction="column" h="90vh">
          <Flex direction="column" justify="center" align="center">
              <Center>
                  <Image src='Marcos.avif' w='200px'/>
              </Center>
              <MiddleText/>
          </Flex>

          <Center mt="2em">
              <Flex>
                  <Stat alignItems="center" w="12rem">
                      <StatNumber alignItems="center"><Text align="center">20+</Text></StatNumber>
                      <StatHelpText><Text align="center" >Projects completed</Text></StatHelpText>
                  </Stat>
                  <Stat alignItems="center" w="12rem" >
                      <StatNumber><Text align="center">3 years</Text></StatNumber>
                      <StatHelpText><Text align="center">Experience</Text></StatHelpText>
                  </Stat>
                  <Stat alignItems="center" w="12rem">
                      <StatNumber><Text align="center">∞</Text></StatNumber>
                      <StatHelpText><Text align="center">Value added</Text></StatHelpText>
                  </Stat>
              </Flex>
          </Center>

          <Flex mt='2em' justify="center" align="center">
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
      <Center>
          <Experience/>
      </Center>
      <Center>
          <Education/>
      </Center>
      <Flex direction="column" gap={8} my={10} justify="center" align="center">

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
