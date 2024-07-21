import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaUserTie } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box className='min-[8vh] -mt-14 p-4 bg-slate-900 '>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={['center', 'flex-start']} width={'full'}>
                <Heading children="All Rights Reserved" color={"white"} />
                <Heading children="@KnowledgeNest" className='font-normal' fontFamily={'body'} size={'sm'} color={"yellow"} />
            </VStack>
            <HStack spacing={['2','10']} justifyContent={'center'}>
                <a href="https://vishalkumarport.vercel.app/" alt="portfolio" rel="noreferrer"  target='_blank'> <FaUserTie color='white' size={'24'}/> </a>
                <a href="https://www.linkedin.com/in/vishu23/" alt="Linkedin" rel="noreferrer"  target='_blank'><FaLinkedin color='white' size={'24'}/></a>
                <a href="https://github.com/iamvishukr" alt="portfolio" rel="noreferrer"  target='_blank'><FaGithub  color='white' size={'24'}/></a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer