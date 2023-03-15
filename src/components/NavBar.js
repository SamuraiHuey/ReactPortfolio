import { Box, Image, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import samuraiLogo from "../assets/SVG/Samurai.svg"

export default function NavBar() {

    return (
        <Box border="1px solid green" display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex">
                <Image src={samuraiLogo} alt="Samurai Logo" width="75px" height="75px" />
            </Box>

            <Box display="flex" flexDirection="row" gap="10" padding="5">
                <Button>About</Button>
                <Button>Projects</Button>
                <Button>Contact</Button>
                <ColorModeSwitcher />
            </Box>
        </Box>
    )
}