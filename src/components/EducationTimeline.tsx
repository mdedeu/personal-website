import React, { useState } from 'react';
import { Box, Flex, Heading, Text, useColorModeValue, Collapse } from '@chakra-ui/react';
import { BiCalendarEvent } from 'react-icons/bi';

const EducationTimeline = () => {
    const timelineColor = useColorModeValue('gray.200', 'gray.700');

    const educationData = [
        {
            title: 'Master',
            institution: 'Instituto Tecnológico de Buenos Aires',
            degree: 'Master in Software Engineering',
            duration: '2023 - 2024',
        },
        {
            title: 'Bachelor',
            institution: 'Instituto Tecnológico de Buenos Aires',
            degree: 'Bachelor in Computer Science',
            duration: '2018 - 2023',
        },
        {
            title: 'Secondary School',
            institution: 'Instituto Libre de Segunda Enseñanza',
            duration: '2013 - 2017',
        }
    ];

    return (
        <Box mt={"5%"}>
            <Flex direction="column" align={"start"} justify="start">
                {educationData.map((item, index) => (
                    <Flex
                        key={index}
                        mb={6}
                        position="relative"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            backgroundColor: timelineColor,
                        }}
                    >
                        <Box
                            borderRadius="full"
                            p={2}
                            mr={4}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <BiCalendarEvent size={20} />
                        </Box>
                        <Box>
                            <Heading size="xl" mb={1}>{item.title}</Heading>
                            <Text size={"md"}>{item.institution}</Text>
                            {item.degree && <Text>{item.degree}</Text>}
                            <Text>{item.duration}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default EducationTimeline;