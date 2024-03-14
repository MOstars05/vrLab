import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <Box className='lineFooter' pt={'50px'} pb={'50px'} mt={'100px'} roundedTop={{base: '20px' , sm:'70px'}}>
        <Box className='wrapper'>
            <Box display={'flex'} flexDirection={'column'} gap={'70px'} alignItems={'center'}>
                <Box ml={{base: '15px', lg: '0px'}} mr={{base: '15px', lg: '0px'}} display={'flex'} justifyContent={'space-around'} gap={{base: '20px', xl:  '300px'}} flexWrap={'wrap'}>
                    <Box display={'flex'} flexDirection={'column'} gap={'20px'} justifyContent={'space-around'}>
                        <Box>
                            <Text fontWeight={'bold'} color={'white'}>Subscribe</Text>
                        </Box>
                        <Box>
                            <InputGroup>
                                <Input border={'none'} bgColor={'black'} placeholder='Your Email' _placeholder={{color: 'white'}} width={'100%'} height={'41px'} />
                                <InputRightElement ml={'82%'} >
                                    <Button bgColor={'#3C2078'}  h='2.60rem' size='base' pl={'10px'} pr={'10px'}  _hover={{bgColor: 'none'}} _active={{bgColor: 'none'}} color={'white'} fontSize={'14px'}>Subscribe</Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box fontSize={'30px'} display={'flex'} gap={'20px'} color={'white'}>
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </Box>
                    </Box>
                    <Box color={'white'} display={'flex'} alignItems={'center'} gap={'90px'} flexWrap={'wrap'} mt={'20px'}>
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Text fontWeight={'bold'}>Products</Text>
                            <Text>VR Pro 1</Text>
                            <Text>VR Pro 2</Text>
                            <Text>Accessories</Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Text fontWeight={'bold'}>Apps & Exprences</Text>
                            <Text>Apps</Text>
                            <Text>Games</Text>
                            <Text>Blogs</Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                            <Text fontWeight={'bold'}>Support</Text>
                            <Text>Contact Us</Text>
                            <Text>FAQ</Text>
                            <Text>Ruls & Policy</Text>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Text color={'#A9A9A9'}>@2021 Tun Myint Tham Htike LLC</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer