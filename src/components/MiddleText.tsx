import {Center, Flex, Heading, Text} from "@chakra-ui/react";
import * as React from "react";


class MiddleText extends React.Component {
    render(){
        return (
                <Flex direction={{base: 'column'}} justify="center" mx="2rem">
                    <Heading size={{ base: '3xl', md:'4xl'}} alignItems='center' mx="auto">
                            <Center>
                                <Text align="center">Marcos</Text>
                                <Text  as="span" ml="0.6rem">Dedeu</Text>
                            </Center>

                    </Heading>
                    <Text as="span" fontSize={{base: 'lg', md:'2xl'}} align='center' mx="auto" mt="1em">
                           I'm a
                            <Text  fontWeight='bold' color='cyan.500'>Backend Software Engineer</Text> with a robust focus on cloud infrastructure, specialized in crafting scalable and efficient RESTful APIs. I engineer solutions that power seamless, high-performance applications across various platforms.
                    </Text>
                </Flex>
        )

    }
}
export {MiddleText};