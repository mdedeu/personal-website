import React from "react"
import { Flex, Link, Text} from "@chakra-ui/react"
export function Navbar(){
    return (
        <Flex alignItems='center' gap={{ base: 10, md: 40}} justifyContent='center'  p={4} mb="20px" mx="auto">
            <Link  href="#experience" textDecoration="none">
                <Text fontSize="lg">Experience</Text>
            </Link>
            <Link  href="#education" textDecoration="none">
                <Text fontSize="lg">Education</Text>
            </Link>
            <Link   href="mailto:mdedeu@itba.edu.ar">
                <Text fontSize="lg">Contact</Text>
            </Link>
        </Flex>
    )
}