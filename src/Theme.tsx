import {extendTheme} from "@chakra-ui/react";


const theme = extendTheme({
      fonts: {
         heading: `'Inter', sans-serif`,
         body: `'Roboto', sans-serif`,
      },
    initialColorMode: 'dark',
    useSystemColorMode: false
})
export default theme