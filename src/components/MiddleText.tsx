import {Center, Flex, Heading, Text} from "@chakra-ui/react";
import * as React from "react";


class MiddleText extends React.Component {
    render(){
        return (
                <Flex direction={{base: 'column'}} justify="center">
                    <Center>
                        <Heading size='4xl' alignItems='center'>
                            <Center>
                                <Text align="center">Hi, I'm Marcos</Text>
                                <Text  as="span" textColor="green.400" ml="0.3em">Dedeu</Text>
                            </Center>

                        </Heading>
                    </Center>
                    <Center mt='2em'>
                        <Text fontSize='2xl' align='center'>
                            I'm an Argentina-based
                            <Text fontWeight='bold' color='green.400'>Software Engineering Student and Full Stack
                                Developer</Text>
                            focused on
                            developing clean, user-friendly and fast experiences.
                        </Text>
                    </Center>
                </Flex>
        )

    }
}
export {MiddleText};