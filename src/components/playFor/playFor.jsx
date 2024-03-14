import { Box, Image, Text } from '@chakra-ui/react'
import { faArrowLeftRotate, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { glass } from '../../assets'

const PlayFor = () => {
  return (
    <Box className='wrapper'>
        <Box  pb={'50px'} display={'flex'}  ml={{base: '20px', lg: '0px'}}   alignItems={'center'} justifyContent={'space-evenly'} pt={'50px'} flexWrap={'wrap'} >
            <Box>
                <Image src={glass} width={'90%'} />
            </Box>
            <Box>
                <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                    <Text fontSize={{base: '40px', sm: '50px'}} fontWeight={'bold'} color={'white'}>PLAY FOR REAL</Text>
                    <Text  className='lineText' fontSize={{base: '40px', sm: '50px'}} fontWeight={'bold'}>UNPLUG AND</Text>
                    <Text color={'white'}>An immersive way to enjoy yor favourite movies</Text>
                </Box>
                <Box display={'flex'} gap={'50px'} alignItems={'center'} marginTop={'40px'} flexWrap={'wrap'}>
                    <Box>
                        <Text fontSize={{base: '30px', sm: '40px'}} color={'white'} fontWeight={'bold'}>1000$</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                        <Box>
                            <Text color={'#F7BE49'}>Colors</Text>
                        </Box>
                        <Box display={'flex'} gap={'10px'}>
                            <Box bgColor={'#2836E4'} width={'25px'} height={'25px'} rounded={'50%'}></Box>
                            <Box bgColor={'#BABABA'} width={'25px'} height={'25px'} rounded={'50%'}></Box>
                            <Box bgColor={'#000000'} width={'25px'} height={'25px'} rounded={'50%'}></Box>
                        </Box>
                    </Box>
                </Box>
                <Box mt={'40px'} display={'flex'} gap={'50px'} flexWrap={'wrap'}>
                    <Box className='lineButton'>
                        <Text>Buy Now</Text>
                    </Box>
                    <Box border={'1px'} borderColor={'white'} padding={'6px 24px'} rounded={'6px'} cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'8px'} _hover={{rounded: '0px'}}>
                        <FontAwesomeIcon icon={faArrowLeftRotate} color={'white'}/>
                        <Text color={'white'} fontWeight={'bold'}>Watch Now</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default PlayFor