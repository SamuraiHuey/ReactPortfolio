import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Homepage'

function App() {

  const [pages] = useState([
    { name: "about" },
    { name: "projects" },
    { name: "contact" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <ChakraProvider theme={theme}>
      <Box>

        <NavBar />
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}



      </Box>

      <Box textAlign="center" fontSize="xxx-large">
        <Home />
      </Box>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
