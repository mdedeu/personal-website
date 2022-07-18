import {Button, ButtonGroup, Center, Flex, Heading, Text} from "@chakra-ui/react";
import * as React from "react";


class MiddleText extends React.Component {
    render(){
        return (
            <Center>
                <Flex direction={{base: 'column'}}>
                    <Center>
                        <Heading size='4xl' alignItems='center'>
                            <Center>
                                Hi, I'm Marcos
                            </Center>
                            <Center>
                                <Text bgGradient='linear(to-r, teal.500, green.500)' bgClip='text'> Dedeu</Text>
                            </Center>
                        </Heading>
                    </Center>
                    <Center mt='2em'>
                        <Text fontSize='2xl' align='center'>

                            I'm an Argentina-based
                            <Text fontWeight='bold' color='teal.500'>Software Engineering Student and Full Stack
                                Developer</Text>
                            focused on
                            developing clean, user-friendly and fast experiences.
                        </Text>
                    </Center>
                </Flex>
            </Center>
        )

    }
}
export {MiddleText};