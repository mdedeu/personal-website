import React from "react";
import {Box, Heading, Stack, Text, Image} from "@chakra-ui/react";

interface RetroCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const RetroCard = ({ title, description, imageUrl }:RetroCardProps) => {
    return (
        <Box
            w="sm"
            h="md"
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
            }}
            padding={"5%"}
        >
            <Image src={imageUrl} alt={title} w={"400px"} h={"200px"}/>

            <Box p={6}>
                <Stack spacing={3}>
                    <Heading color={"cyan.500"} size="xl" fontFamily="'Jersey 10', sans-serif">
                        {title}
                    </Heading>
                    <Text>{description}</Text>
                </Stack>
            </Box>
        </Box>
    );
};
export default RetroCard;