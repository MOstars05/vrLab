import { Box, Image, Text, useDisclosure } from '@chakra-ui/react'
import {logo} from '../../assets'
import React, { useState } from 'react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
      
    const sizes = ['xs']
  return (
    <Box>
        <Box  className='wrapper' marginRight={{base: '15px', lg: '0px'}} paddingTop={'20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Box paddingLeft={'20px'}>
                <Link>
                    <Image src={logo} />
                </Link>
            </Box>
            <Box color={'white'} display={{base: 'none', lg: 'flex'}}  alignItems={'center'} gap={'50px'} cursor={'pointer'}>
                <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                    <Text _hover={{color: '#E11EFC'}}>Products</Text>
                    <ChevronDownIcon fontSize={'25px'} />
                </Box>
                    <Text _hover={{color: '#E11EFC'}} >Features</Text>
                    <Text _hover={{color: '#E11EFC'}}>Where to buy</Text>
                    <Text _hover={{color: '#E11EFC'}}>Setup</Text>
            </Box>
            <Box display={{base: 'none', lg: 'block'}}>
                <Box display={'flex'} gap={'30px'} color={'white'} >
                    <Box display={'flex'} >
                        <Box className='lineOne' display={'flex'} alignItems={'start'} justifyContent={'space-between'} >
                            <Text fontSize={'12px'} paddingLeft={'3.5px'}>1</Text>
                                <Box>
                                    <FontAwesomeIcon icon={faCartShopping}  />
                                </Box>
                        </Box>
                    </Box>
                    <Box>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} gap={'30px'}>
                <Box display={{base: 'flex', lg: 'none'}} >
                    <Box className='lineOne' display={'flex'} alignItems={'start'} justifyContent={'space-between'} >
                        <Text fontSize={'12px'} paddingLeft={'3.5px'}>1</Text>
                            <Box>
                                <FontAwesomeIcon color={'white'}  icon={faCartShopping} />
                            </Box>
                    </Box>
                </Box>
                    <Box display={{base: 'block', lg: 'none'}} >
                    {sizes.map((size) => (
                        <FontAwesomeIcon  icon={faBarsStaggered} color={'white'} fontSize={{ base: '25px', sm:'30px'}} onClick={() => handleClick(size)}
                        key={size}
                        m={4}
                        />
                    ))}
                    </Box>
                

                    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                        <DrawerContent bgColor={'rgb(12, 9, 37)'}>
                            <DrawerCloseButton color={'white'} />
                                <DrawerBody >
                                    <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'20px'} cursor={'pointer'}>
                                        <Box display={'flex'} alignItems={'center'} gap={'5px'} >
                                            <Text _hover={{color: '#E11EFC'}}>Products</Text>
                                            <ChevronDownIcon fontSize={'25px'} />
                                        </Box>
                                            <Text _hover={{color: '#E11EFC'}}>Features</Text>
                                            <Text _hover={{color: '#E11EFC'}}>Where to buy</Text>
                                            <Text _hover={{color: '#E11EFC'}}>Setup</Text>
                                    </Box>
                                </DrawerBody>
                        </DrawerContent>
                    </Drawer>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar