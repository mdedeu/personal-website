import React from "react"
import { Flex, Link, Text} from "@chakra-ui/react"
export function Navbar(){
    return (
        <Flex alignItems='center'  justify='space-between' gap={{ base:4, md:20 }}  p={4} h="10vh" mx="auto">
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