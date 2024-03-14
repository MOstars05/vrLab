import { Box } from '@chakra-ui/react'
import React from 'react'
import AboutUs from './components/aboutUs/aboutUs'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import PlayFor from './components/playFor/playFor'
import Reality from './components/reality/reality'
import TakeLook from './components/takeLook/takeLook'

const App = () => {
  return (
    <Box>
      <Box className='lineBg'>
          <Box>
            <Navbar />
          </Box>
          <Box>
            <PlayFor />
          </Box>
      </Box>
        <Box bgColor={'rgb(12, 9, 37)'} >
          <Box>
            <TakeLook />
          </Box>
          <Box>
            <Reality />
          </Box>
          <Box>
            <AboutUs />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
    </Box>
  )
}

export default App