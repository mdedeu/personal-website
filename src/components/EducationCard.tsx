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
            <Image src={image} h="150px"  borderRadius="5px">
                <Text fontWeight="bold" m="auto">{institution}</Text>
            </Image>
            <Flex direction="column" p={8} gap={4} justify="center" align="center">
                <Heading size="lg">{title}</Heading>
                <Heading size="md">{institution}</Heading>
                <Heading size="xs">{year}</Heading>
            </Flex>

        </Flex>
    );
};

export default EducationCard;