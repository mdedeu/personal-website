import React from 'react';
import {Box, Button, Tooltip} from '@chakra-ui/react';
import { FaRobot } from 'react-icons/fa';

const FloatingButton = () => {
    const handleClick = () => {
        const url = 'https://partyrock.aws/u/mdedeu/pxIg_qXiH/Meet-Marcos';
        window.open(url, '_blank', 'noopener noreferrer');
    };

    return (
        <Tooltip label='Wanna learn more about me?'>
            <Box position="fixed" bottom={6} right={6}>
                <Button
                    size="lg"
                    onClick={handleClick}
                    bgColor="cyan.400"
                    color="white"
                    aria-label="Open Chatbot"
                >
                    <FaRobot />
                </Button>
            </Box>
        </Tooltip>

    );
};

export default FloatingButton;