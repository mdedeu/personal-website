import React from 'react';
import { Box, Heading, Text, VStack, StackDivider } from '@chakra-ui/react';

const Experience = () => {
    const experiences = [
        {
            company: 'The Network',
            position: 'Software Engineer',
            duration: 'Oct 2022 - Present',
            description: 'As an adept developer, I engineered RESTful APIs fostering system integration, and crafted a high-performance search bot automating tasks, reducing manual effort by 50% while handling 200K+ queries weekly. Moreover, I standardized and deployed a mission-critical web platform serving 500 users, ensuring systematic processes and seamless user experiences'        },
        {
            company: 'ITBA IEEE Computer Society',
            position: 'Director',
            duration: 'Jan 2022 - Jan 2023',
            description: 'As a proactive leader, you orchestrated a record-breaking 3-day student hackathon, attracting over 100 participants and securing $10,000 in sponsorship revenue, while fostering partnerships with 20 tech giants to provide mentorship and networking prospects. Concurrently, you spearheaded an organization of 40+ students, achieving 100% growth, mentoring directors, curating open-source workshops, contributing to the Ethereum Foundation, and launching a 100+ attendee hackathon with over $50,000 in prizes.',
        },
        {
            company: 'Servicios Computables',
            position: 'Full Stack Developer',
            duration: 'Sep 2020 - Feb 2022',
            description: 'Gained deep insights into the inner workings of a complex system with over 1,000 daily users. Optimized, reviewed, and rewrote over 10 functional modules in a live web app, identifying and resolving critical bugs, resulting in a 40% reduction in user complaints and an enhanced overall user experience.',
        }
        ];

    return (
        <Box mt={"2%"}>
            <VStack spacing={6} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
                {experiences.map((experience, index) => (
                    <Box key={index}>
                        <Heading as="h3" size="xl" mb={2}>
                            {experience.position}
                        </Heading>
                        <Text fontWeight="bold">{experience.company}</Text>
                        <Text color="gray.300">{experience.duration}</Text>
                        <Text mt={2}>{experience.description}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default Experience;