import * as React from "react"
import {
    ChakraProvider,
    theme, Text, Image, Center, Button, HStack, Flex, ButtonGroup, Stat, StatLabel, StatNumber, Spacer, StatHelpText
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';
import { FaLinkedin, FaGithub} from "react-icons/all";


export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar/>
      <Flex direction="column">
          <Center>
              <Image src='Marcos.png' w='200px'/>
          </Center>
          {/*<Center m='2em'>*/}
          {/*    <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>*/}
          {/*        LinkedIn*/}
          {/*    </Button>*/}
          {/*</Center>*/}
          <MiddleText/>
      </Flex>

      <Center mt="2em">
          <Flex gap="40">
              <Stat alignItems="center" w="12em" >
                  <StatNumber><Text align="center">3 years</Text></StatNumber>
                  <StatHelpText><Text align="center">Experience</Text></StatHelpText>
              </Stat>
              <Stat alignItems="center" w="12em">
                  <StatNumber alignItems="center"><Text align="center">20+</Text></StatNumber>
                  <StatHelpText><Text align="center" >Projects completed</Text></StatHelpText>
              </Stat>
              <Stat alignItems="center" w="12em">
                  <StatNumber><Text align="center">∞</Text></StatNumber>
                  <StatHelpText><Text align="center">Value added</Text></StatHelpText>
              </Stat>
          </Flex>
      </Center>

      <Center mt='2em'>
          <ButtonGroup>
              <Button>
                  Let's talk
              </Button>
              <Button colorScheme='teal'>
                  Download my CV
              </Button>
          </ButtonGroup>

      </Center>

  </ChakraProvider>
)
