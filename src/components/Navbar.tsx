import React from "react"
import { Flex, Link, Text} from "@chakra-ui/react"
const linkHoverStyle = {
    textDecoration: "none",
    transform: "translate(1.3)",
    color: "green.400"
}
export function Navbar(){
    return (
        <Flex alignItems='center'  justify='space-between' gap={{ base:4, md:20 }}  p={4} h="10vh" mx="10rem">
            <Link  href="#experience"
                   _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">About me</Text>
            </Link>
            <Link  href="#education" _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">Projects</Text>
            </Link>
            <Link  href="#education" _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">My skills</Text>
            </Link>
            <Link   href="mailto:mdedeu@itba.edu.ar"  _hover={linkHoverStyle}>
                <Text fontSize="lg" fontWeight="semibold">Contact</Text>
            </Link>
        </Flex>
    )
}