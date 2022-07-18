import React from "react"
import {Avatar, Box, Flex, Heading, Spacer} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher";

export function Navbar(){
    return (
        <Flex alignItems='center' gap='2' justifyContent='center'  p={4}>
                <Box>

                </Box>
                <Spacer/>
                <ColorModeSwitcher alignItems='justify-end'/>
        </Flex>
    )
}