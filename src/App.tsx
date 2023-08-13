import * as React from "react"
import {
    ChakraProvider,
    Text, Image, Center, Button, Flex, ButtonGroup, Stat, StatNumber, StatHelpText, Heading, Wrap, WrapItem
} from "@chakra-ui/react"
import theme from "./Theme"
import {Navbar} from './components/Navbar';
import {MiddleText} from './components/MiddleText';

export const App = () => (
  <ChakraProvider theme={theme}>
     <Navbar/>
      <MiddleText/>
  </ChakraProvider>
)
