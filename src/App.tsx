import * as React from "react"
import {
    ChakraProvider,
    theme, Text, Image, Center, Button,  Flex, ButtonGroup, Stat,  StatNumber, StatHelpText
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';
import Experience from "./components/Experience";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar/>
      <Flex direction="column" h="90vh">
          <Flex direction="column" justify="center" align="center">
              <Center>
                  <Image src='Marcos.png' w='200px'/>
              </Center>
              <MiddleText/>
          </Flex>

          <Center mt="2em">
              <Flex>
                  <Stat alignItems="center" w="12em">
                      <StatNumber alignItems="center"><Text align="center">20+</Text></StatNumber>
                      <StatHelpText><Text align="center" >Projects completed</Text></StatHelpText>
                  </Stat>
                  <Stat alignItems="center" w="12em" >
                      <StatNumber><Text align="center">3 years</Text></StatNumber>
                      <StatHelpText><Text align="center">Experience</Text></StatHelpText>
                  </Stat>
                  <Stat alignItems="center" w="12em">
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

  </ChakraProvider>
)
