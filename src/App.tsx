import * as React from "react"
import {
    Center,
    ChakraProvider, Heading,
    theme,
    Text, Button, ButtonGroup, WrapItem, Wrap,
    Image,
    Flex, Stat, StatLabel, StatNumber, StatHelpText
} from "@chakra-ui/react"
import {Navbar} from "./components/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar/>
      <Center>
              <Flex direction={{ base:'column' }}>
                  <Center>
                      <Heading size='4xl' alignItems='center' >
                          <Center>
                              Hi, I'm Marcos
                          </Center>
                          <Center>
                              <Text bgGradient='linear(to-r, teal.500, green.500)'  bgClip='text'> Dedeu</Text>
                          </Center>
                      </Heading>
                  </Center>
                  <Center mt='2em'>
                  <Text fontSize='2xl' w='80%' align='center'>

                          I'm an Argentina-based Software Engineering Student and Full Stack Developer focused on
                          developing clean, user-friendly and fast experiences.
                  </Text>
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
              </Flex>
      </Center>

  </ChakraProvider>
)
