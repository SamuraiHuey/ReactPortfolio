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
import {Helmet} from "react-helmet"
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

      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Will Brent's Portfolio</title>
        </Helmet>

      <Box>

        <NavBar />

      </Box>

      <Box>

        <Home />

      </Box>

      <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
