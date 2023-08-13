import {extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
      fonts: {
         heading: `'Handjet', serif`,
      },
    colors: {
          primary: "#c9cbce",
            secondary: "#0A0A0A"
    },
    styles:{
        global:{
            body:{
                bg: "secondary",
            }
        }
    },
    config
})
export default theme