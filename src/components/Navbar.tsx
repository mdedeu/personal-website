import React from "react"
import { Flex, Link, Text} from "@chakra-ui/react"
const linkHoverStyle = {
    textDecoration: "none",
    transform: "scale(1.2)"
}
export function Navbar(){
    return (
        <Flex alignItems='center'  justify='space-between' gap={{ base:4, md:20 }}  p={4} h="10vh" mx="auto">
            <Link  href="#experience"
                   _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">Experience</Text>
            </Link>
            <Link  href="#education" _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">Education</Text>
            </Link>
            <Link   href="mailto:mdedeu@itba.edu.ar"  _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">Contact</Text>
            </Link>
        </Flex>
    )
}