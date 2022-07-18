import React from "react"
import {Avatar, Box, Flex, Heading, Link, Spacer, Text} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher";

export function Navbar(){
    return (
        <Flex alignItems='center' gap='40' justifyContent='center'  p={4} mb="20px">
            {/*    <Link>*/}
            {/*        <Text fontSize="lg" color="teal.500">About me</Text>*/}
            {/*    </Link>*/}
            {/*<Link>*/}
            {/*    <Text fontSize="lg">Experience</Text>*/}
            {/*</Link>*/}
            {/*<Link>*/}
            {/*    <Text fontSize="lg">Education</Text>*/}
            {/*</Link>*/}
            {/*<Link>*/}
            {/*    <Text fontSize="lg">Contact</Text>*/}
            {/*</Link>*/}
        </Flex>
    )
}