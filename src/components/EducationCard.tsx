import React from 'react';
import {Flex, Heading, Image,Text} from "@chakra-ui/react";


type EducationCardProps = {
    institution:string,
    image:string,
    title:string,
    year:string
}
const EducationCard = ({institution, image, title, year}: EducationCardProps) => {
    return (
        <Flex justify="center" direction="column" bgColor="gray.700" borderRadius="5px" w="400px" m={8}>
            <Flex direction="column" p={8} gap={4} justify="center" align="center">
                <Heading size="lg">{title}</Heading>
                <Text size="md">{institution}</Text>
                <Text size="xs">{year}</Text>
            </Flex>

        </Flex>
    );
};

export default EducationCard;