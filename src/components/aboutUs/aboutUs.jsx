import { Box, Image, Text } from '@chakra-ui/react'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { peopleGirl, peoples } from '../../assets'

const AboutUs = () => {
  return (
    <Box className='wrapper' mt={'100px'}>
      <Box ml={{base: '15px', lg: '0px'}} mr={{base: '15px', lg: '0px'}} >
        <Box ml={{base: '0px', xl: '40px'}} display={'flex'} justifyContent={{base: 'space-around', xl:'space-between'}}  color={'white'} fontWeight={'bold'} fontSize={{base: '30px' , sm: '40px'}}>
          <Text>What People About Us</Text>
        </Box>
          <Box mt={'30px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} gap={'70px'}>
              <Box bg={'#1B1541'} width={'600px'} height={'300%'} display={'flex'} flexDirection={'column'} gap={'20px'} p={'35px'} rounded={'10px'} >
                  <Box display={'flex'}  alignItems={'center'} gap={'30px'} flexWrap={'wrap'}>
                      <Box>
                          <Image src={peopleGirl} />
                      </Box>
                      <Box color={'white'}>
                        <Text fontWeight={'bold'} fontSize={{base: '16px', sm:'20px'}}>People Name</Text>
                        <Text>People Postions</Text>
                      </Box>
                  </Box>
                  <Box>
                      <Box>
                        <FontAwesomeIcon icon={faQuoteLeft} fontSize={'40px'} color={'#075CDC'} />
                      </Box>
                      <Box color={'white'}>
                        <Text fontFamily={'italic'}>Ready for lite expriences tht lool and fell real? We don;t just want to watch <br /> what you do, we want to put you in the story.Ready for lite expriences tht <br /> lool and fell real? We don;t just want to watch what you do, we want to put <br /> you in the story.</Text>
                      </Box>
                  </Box>
              </Box>
              <Box>
                <Image src={peoples} fontSize={'90%'} />
              </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default AboutUs