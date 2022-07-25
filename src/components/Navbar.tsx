import React from "react"
import { Flex, Link, Text} from "@chakra-ui/react"
export function Navbar(){
    return (
        <Flex alignItems='center' gap='40' justifyContent='center'  p={4} mb="20px">

            <Link  href="#experience" textDecoration="none">
                <Text fontSize="lg">Experience</Text>
            </Link>
            <Link  href="#education" textDecoration="none">
                <Text fontSize="lg">Education</Text>
            </Link>
            <Link   href="#contact">
                <Text fontSize="lg">Contact</Text>
            </Link>
        </Flex>
    )
}