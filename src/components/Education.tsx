import React from 'react';
import {Flex, Heading, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel} from "@chakra-ui/react";
import EducationCard from "./EducationCard";

const Education = () => {
    return (
        <Flex direction="column" justify="center" align="center" id="education" gap={8}>
            <Heading textColor="green.400">Education</Heading>
            <Flex justify="center" align="center">
                <EducationCard institution="Instituto Tecnológico de Buenos Aires" image="/itba.avif" title="Software Engineering" year="2018 - 2024"/>
                <EducationCard institution="Google" image="/google.avif" title="Google Cloud Essentials" year="2022"/>
                <EducationCard institution="University of Buffalo" image="/suny.avif" title="Blockchain Basics" year="2022"/>
            </Flex>
        </Flex>
    );
};

export default Education;