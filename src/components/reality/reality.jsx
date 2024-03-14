import { Box, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { girlGlass } from '../../assets'

const Reality = () => {
  return (
    <Box className='wrapper' mt={'100px'}>
        <Box display={'flex'} alignItems={'center'}  justifyContent={'space-around'} gap={'70px'} ml={{base: '20px', lg: '0px'}} flexWrap={'wrap'} >
            <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'20px'}> 
                <Text fontWeight={'bold'} fontSize={{base:'25px', sm: '30px'}}>Readine Reality</Text>
                <Text>Ready for lite expriences tht lool and fell real? We don;t <br /> just want to watch what you do, we want to put you in <br /> the story.</Text>
                <Box> 
                    <Button className='lineBtn' color={'white'} bgColor={'#1B1541'} _hover={{bgColor: '#1B1541'}}>Read More</Button>
                </Box>
            </Box>
            <Box>
                <Image src={girlGlass} width={'90%'} />
            </Box>
        </Box>
    </Box>
  )
}

export default Reality