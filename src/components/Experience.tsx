import React from 'react'
import {Flex, Heading, Wrap, WrapItem} from "@chakra-ui/react"
import JobCard from "./JobCard";

const Experience = () => {
    return (
        <Flex direction="column" justify="center" align="center" id="experience">
            <Heading textColor="green.400">Experience</Heading>
            <Wrap justify="space-around" my={8} mx="1rem">
                <WrapItem>
                    <JobCard workplace="Servicios Computables"
                             title="Full Stack Developer"
                             color="blue.500"
                             year="2020-2022"
                             listItem1="Learned how a complex system works from the inside (1000+ daily users)."
                             listItem2="Inspected, reviewed and rewrote functional modules in a live webapp built with PHP, MySQL, VueJs and more."/>
                </WrapItem>
                <WrapItem>
                    <JobCard workplace="IEEE Computer Society ITBA"
                             title="President"
                             color="orange.400"
                             year="2021-2022"
                             listItem1="Directed an organization of 40+ ITBA students."
                             listItem2="Coordinated a 100+ attendees hackathon at our university, with more than 50k USD in prices."/>
                </WrapItem>
                <WrapItem>
                    <JobCard workplace="Freelance"
                             color="green.400"
                             title="Web Developer"
                             year="2019-Current"
                             listItem1="Identified client's problems and offered tailored and effective solutions."
                             listItem2="Constructed complex systems with limited time, working with a diverse range of technological products and tools."/>

                </WrapItem>
                </Wrap>
        </Flex>
    )
};

export default Experience;