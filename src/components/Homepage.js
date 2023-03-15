import { Box, Text, Image } from "@chakra-ui/react"
import Headshot from "../assets/Images/Headshot-color.jpg"

export default function Home() {
    return (
        <Box  border='5px dashed blue' display='flex' >
            <Box border='2px dotted red' w='60%'>

                <Image src={Headshot} borderRightRadius='2500px' fit='cover' h='750px' bgGradient='linear(to-r, rgba(238,174,202,0), rgba(148,187,233,1))' />

            </Box>
            {/* <Box w='100%' bgImage={Headshot} bgSize='cover' marginLeft='20%'>
            </Box> */}
                <Box display='flex' alignItems='center' border='2px solid yellow' w="40%">

                    <Text textAlign='center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Eget mi proin sed libero enim sed faucibus turpis in. Congue quisque egestas diam in. Nisi vitae suscipit tellus mauris a diam. Aliquam nulla facilisi cras fermentum odio eu. Proin fermentum leo vel orci. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.</Text>

                </Box>
        </Box>

    )
}