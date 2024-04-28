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
import RetroCard from "./components/RetroCard";
import EducationTimeline from "./components/EducationTimeline";
import FloatingButton from "./components/FloattingButton";
import Experience from "./components/Experience";


export const App = () => {

    return (

        <ChakraProvider theme={theme}>
            <Flex direction="column" h="90vh" justify="center">
                <Flex direction="column" justify="center" align="center" mx="auto" mt={"20%"}>
                    <MiddleText/>
                </Flex>

                <Center mt="2em">
                    <Wrap spacing={{ base:'1em', md:'10em' }} justify="center">
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
            <Flex justify={"center"} mt={"5%"} align={"center"} direction={"column"} mx={"20%"}>
                <Heading size={"3xl"}>Education</Heading>
                <EducationTimeline/>
            </Flex>
            <Flex justify={"center"} mt={"5%"} align={"center"} direction={"column"} mx={"20%"}>
                <Heading size={"3xl"}>Experience</Heading>
                <Experience/>
            </Flex>

            <Flex justify={"center"} align={"center"} mt={["6%", "10%"]} mx={"20%"}>
                <Heading size={"3xl"}>Some of the cool projects i've built</Heading>
            </Flex>

            <Wrap justify={"center"} mt={"3%"} align={"center"} mx={"4%"} spacing={"5%"} padding={"2%"}>
                <WrapItem>
                    <RetroCard
                        title="Cryptocurrency P2P Marketplace"
                        description="A simple P2P crypto platform, where you can buy or sell crypto anywhere in cash. "
                        imageUrl="/images/criptuki.png"
                    />
                </WrapItem>
                <WrapItem>
                    <RetroCard
                        title="Custom OS"
                        description="A personalized operating system based in x64BareBones, for the Intel 64 bits architecture."
                        imageUrl="/images/os.png"
                    />
                </WrapItem>
                <WrapItem>
                    <RetroCard
                        title="Social Crowdfunding platform"
                        description="A platform for student organizations to tackle the lack of funding."
                        imageUrl="/images/alumnistarter.png"
                    />
                </WrapItem>
                <WrapItem>
                    <RetroCard
                        title="Socks5 proxy"
                        description="Designed and implemented a socks5 C native proxy following the RFC1928."
                        imageUrl="/images/socks5.png"
                    />
                </WrapItem>
                <WrapItem>
                    <RetroCard
                        title="A training mobile and web app"
                        description="Multiplatform development for a training app in Javascript for the web and Java for the mobile app."
                        imageUrl="/images/entrenapp.png"
                    />
                </WrapItem>
                <WrapItem>
                    <RetroCard
                        title="TreeLang"
                        description="A custom made language for creating tree structures, with Flex and Bison."
                        imageUrl="/images/tree.png"
                    />
                </WrapItem>
            </Wrap>

            <Flex justify={"center"} align={"center"} mt={["6%", "10%"]}>
                <Heading size={"3xl"}>Skills</Heading>
            </Flex>

            <Wrap mt={"1%"} alignItems={"center"} mx={"auto"} justify={"center"} align={"center"}>

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
                <Badge fontSize='1rem' colorScheme={"cyan"}>Grafana</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Prometheus</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Sentry</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Embeddings and text models</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Named Entity Recognition models</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Open Source</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Hackathons</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Proactivity</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Networking</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Communication</Badge>
                <Badge fontSize='1rem' colorScheme={"cyan"}>Python</Badge>
            </Wrap>


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
            <FloatingButton/>


        </ChakraProvider>
    )
}
