import { Box, Text } from '@chakra-ui/react'
import { faArrowRight, faCube, faFolder, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TakeLook = () => {
  return (
    <Box className='wrapper'>
        <Box pt={'50px'} display={'flex'} flexDirection={'column'} gap={'40px'}>
            <Box textAlign={'center'}>
                <Text color={'white'} fontWeight={'bold'} fontSize={{base: '30px' , sm: '40px'}} >Take a Look Around</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={{base: '20px' , xl: '0px'}}>
                <Box bgColor={'#3C2078'} _hover={{bgColor: '#1B1541'}} width={{base : '250px', sm :'340px'}} pt={'40px'} pb={'40px'} pl={{base: '11px' , sm: '20px'}} pr={{base: '11px' , sm: '20px'}} display={'flex'} justifyContent={'space-around'}>
                    <Box bg={'white'} width={'45px'} height={'45px'} p={'12px 12px'} rounded={'50%'}>
                        <FontAwesomeIcon icon={faCube} fontSize={'20px'} />
                    </Box>
                    <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'20px'}> 
                        <Text fontWeight={'bold'} fontSize={'20px'}>Products</Text>
                        <Text fontSize={{base:'13px', sm: '16px'}}>Ready for lite expriences tht <br /> lool and fell real? We don;t</Text>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'} cursor={'pointer'}>
                            <Text>Learn More</Text>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Box>
                    </Box>
                </Box>
                <Box bgColor={'#1B1541'} _hover={{bgColor: '#3C2078'}} width={{base : '250px', sm :'340px'}}  pt={'40px'} pb={'40px'} pl={{base: '11px' , sm: '20px'}} pr={{base: '11px' , sm: '20px'}} display={'flex'} justifyContent={'space-around'}>
                    <Box bg={'white'} width={'45px'} height={'45px'} p={'12px 12px'} rounded={'50%'}>
                        <FontAwesomeIcon icon={faFolder} fontSize={'20px'} />
                    </Box>
                    <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'20px'}> 
                        <Text fontWeight={'bold'} fontSize={'20px'}>Accessories</Text>
                        <Text fontSize={{base:'13px', sm: '16px'}}>Ready for lite expriences tht <br /> lool and fell real? We don;t</Text>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'} cursor={'pointer'}>
                            <Text>Learn More</Text>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Box>
                    </Box>
                </Box>
                <Box bgColor={'#1B1541'} _hover={{bgColor: '#3C2078'}} width={{base : '250px', sm :'340px'}}  pt={'40px'} pb={'40px'}  pl={{base: '11px' , sm: '20px'}} pr={{base: '11px' , sm: '20px'}} display={'flex'} justifyContent={'space-around'}>
                    <Box bg={'white'} width={'45px'} height={'45px'} p={'12px 10px'} rounded={'50%'}>
                        <FontAwesomeIcon icon={faGamepad} fontSize={'20px'} />
                    </Box>
                    <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'20px'}> 
                        <Text fontWeight={'bold'} fontSize={'20px'}>Game</Text>
                        <Text fontSize={{base:'13px', sm: '16px'}}>Ready for lite expriences tht <br /> lool and fell real? We don;t</Text>
                        <Box display={'flex'} alignItems={'center'} gap={'5px'} cursor={'pointer'}>
                            <Text>Learn More</Text>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Box>
                    </Box>
                </Box> 
            </Box>
        </Box>
    </Box>
  )
}

export default TakeLook