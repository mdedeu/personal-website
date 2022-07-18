import * as React from "react"
import {
    ChakraProvider,
    theme, Text, Image, Center, Button, HStack, Flex, ButtonGroup
} from "@chakra-ui/react"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';
import { FaLinkedin, FaGithub} from "react-icons/all";


export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar/>
      <Center>
          <Image src='Marcos.png' w='200px'/>
      </Center>
      <Center m='2em'>
          <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
              LinkedIn
          </Button>
      </Center>
      <MiddleText/>

  </ChakraProvider>
)
