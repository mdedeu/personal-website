import * as React from "react"

import {
    ChakraProvider,
    Text,
    Center,
    Button,
    Flex,
    ButtonGroup,
    Stat,
    StatNumber,
    StatHelpText,
    Heading,
    Wrap,
    WrapItem, HStack, Badge, VStack, Stack, Box,
} from "@chakra-ui/react"
import theme from "./Theme"
import {MiddleText} from './components/MiddleText';

import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/all";


export const App = () => {


    const bg = theme.colors.brand.dark;
    return (

        <ChakraProvider theme={theme}>
            <Flex direction="column" h="90vh" justify="center">
                <Flex direction="column" justify="center" align="center" mx="auto" mt={"20%"}>
                    <MiddleText/>
                </Flex>

                <Center mt="2em">
                    <Wrap spacing={{ base:'1em', md:'10em' }} justify="center">
                        <WrapItem>
                            <Stat alignItems="center" w="12rem">
                                <StatNumber alignItems="center"><Text align="center">30+</Text></StatNumber>
                                <StatHelpText><Text align="center" >Projects completed</Text></StatHelpText>
                            </Stat>
                        </WrapItem>
                        <WrapItem>
                            <Stat alignItems="center" w="12rem" >
                                <StatNumber><Text align="center">3.5 years</Text></StatNumber>
                                <StatHelpText><Text align="center">Experience</Text></StatHelpText>
                            </Stat>
                        </WrapItem>
                    </Wrap>
                </Center>


                <Flex mt={{ base:'1rem', md:'2rem'}} m="auto">
                    <ButtonGroup alignItems="center">
                        <Button>
                            <a href="mailto:mdedeu@itba.edu.ar">
                                Email me
                            </a>
                        </Button>
                        <Button colorScheme={"cyan"}>
                            <a href="/cv.pdf" download="Dedeu_CV.pdf">
                                Download my CV
                            </a>
                        </Button>
                    </ButtonGroup>

                </Flex>
            </Flex>
            <VStack  mt={"5%"} alignItems={"center"}>
                <Heading>Skills</Heading>

                <HStack>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Node js</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Typescript</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>AWS</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>PostgreSQL</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Leadership</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Jenkins</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Docker</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Machine Learning</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Java</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Git</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Github</Badge>
                </HStack>
                <HStack>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Grafana</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Prometheus</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Sentry</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Embeddings and text models</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Named Entity Recognition models</Badge>
                </HStack>
                <HStack>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Open Source</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Hackathons</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Proactivity</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Networking</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Communication</Badge>
                    <Badge fontSize='1rem' colorScheme={"cyan"}>Python</Badge>

                </HStack>
            </VStack>
            <Flex justify={"center"} mt={"5%"} align={"center"} direction={"column"} mx={"20%"}>
                <Heading size={"3xl"}>Cool projects </Heading>
                <Flex direction={"column"} justify={"center"} align={"center"}>
                    <Heading color={"cyan.500"} mt={"2%"}> Cryptocurrency P2P Marketplace</Heading>
                    <Text align={"center"} mb={"5%"}>A simple P2P crypto platform, where you can buy or sell crypto anywhere in cash. This project had multiple challenges, from security issues to payment settlement. We developed a full marketplace of cryptos, where you could filter by price, location, crypto & others. Also developed a support system for possible disputes, ranking system between users and more.</Text>
                    <Heading color={"cyan.500"}> PURE OS</Heading>
                    <Text align={"center"} mb={"5%"}>A personalized operating system based in x64BareBones, for the Intel 64 bits architecture. This project involved ultra low level concepts of Operating Systems, which gave me a complete understanding of how an OS works. We developed a user command interface where you could check multithreading handling and abstracted system calls to make it a user friendly CLI. </Text>
                    <Heading color={"cyan.500"}>Social Crowdfunding platform</Heading>
                    <Text align={"center"} mb={"5%"}>With an altruist objective in mind, we developed AlumniStarter, a crowdfunding application for student organizations. We detected the problem that multiple student organizations had in our uni, an implemented a solution to tackle the lack of funding for clubs and organizations.</Text>
                </Flex>
            </Flex>
            <Flex justify={"center"} mt={"5%"} align={"center"} direction={"column"} mx={"20%"}>
                <Heading size={"3xl"}>Experience</Heading>
            </Flex>
            <Flex justify={"center"} mt={"5%"} align={"center"} direction={"column"} mx={"20%"}>
                <Heading size={"3xl"}>Education</Heading>
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
}
