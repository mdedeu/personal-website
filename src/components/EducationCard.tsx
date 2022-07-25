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
        <Flex justify="center" direction="column" bgColor="gray.700" borderRadius="5px"  w={{base: '300px', md:'400px'}} m={4}>
            <Flex direction="column" p={8} gap={4} justify="center" align="center">
                <Heading size="lg" textAlign="center">{title}</Heading>
                <Text size="md" textAlign="center" >{institution}</Text>
                <Text size="xs" textAlign="center">{year}</Text>
            </Flex>

        </Flex>
    );
};

export default EducationCard;