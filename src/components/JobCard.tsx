import React from 'react';
import { Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";

type JobCardProps = {
    workplace:string,
    color:string,
    title:string,
    year:string,
    listItem1?:string,
    listItem2?:string
}

const JobCard = ({workplace, color, title, year, listItem1, listItem2}:JobCardProps) => {
    return (
        <Flex justify="center" direction="column" bgColor="gray.700" borderRadius="5px" w="400px" m={8}>
            <Flex h="150px" bgColor={color}  borderRadius="5px">
                <Text fontWeight="bold" m="auto">{workplace}</Text>
            </Flex>
            <Flex direction="column" p={8} gap={4} justify="center" align="center">
                <Heading size="lg">{title}</Heading>
                <Heading size="md">{year}</Heading>
                <UnorderedList>
                    <ListItem>
                        {listItem1}
                    </ListItem>
                    <ListItem>
                        {listItem2}
                    </ListItem>
                </UnorderedList>
            </Flex>

        </Flex>
    );
};

export default JobCard;