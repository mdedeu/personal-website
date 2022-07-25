import {Center, Flex, Heading, Text} from "@chakra-ui/react";
import * as React from "react";


class MiddleText extends React.Component {
    render(){
        return (
                <Flex direction={{base: 'column'}} justify="center">
                    <Heading size={{ base: 'xl', md:'4xl'}} alignItems='center' mx="auto">
                            <Center>
                                <Text align="center">Hi, I'm Marcos</Text>
                                <Text  as="span" textColor="green.400" ml="0.3rem">Dedeu</Text>
                            </Center>

                    </Heading>
                    <Text as="span" fontSize={{base: 'lg', md:'2xl'}} align='center' mx="auto">
                           I'm an Argentina-based
                            <Text  fontWeight='bold' color='green.400'>Software Engineering Student and Full Stack
                                Developer</Text>
                            focused on
                            developing clean, user-friendly and fast experiences.
                    </Text>
                </Flex>
        )

    }
}
export {MiddleText};