import {extendTheme} from "@chakra-ui/react";
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme= extendTheme({
      fonts: {
         heading: `'Inter', sans-serif`,
         body: `'Roboto', sans-serif`,
      }, config
})
export default theme