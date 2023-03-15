import { Box, Text, Image, Icon, Button } from "@chakra-ui/react"
import samuraiLogo from "../assets/SVG/Samurai.svg"


export default function Footer() {

    return (
        <Box textAlign="Center" display="flex" flexDirection="column" bg='grey'>

            <Box border="5px solid red" display="flex" flexDirection="row" justifyContent="space-evenly" >
                <Box flexDirection="row" border="1px solid blue">
                    <Image src={samuraiLogo} alt="Samurai Logo" width="75px" height="120px" />
                </Box>

                <Box display="flex" border="1px solid green" flexDirection="row" gap="40px" padding="10">
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Contact</Button>
                </Box>

                <Box border="1px solid orange">
                    Socials
                </Box>
            </Box>

            <Box fontSize="xl" border="1px solid purple" marginTop="20px">
                <Text>Ⓒ Will Brent 2023</Text>
            </Box>

        </Box>
    )
}