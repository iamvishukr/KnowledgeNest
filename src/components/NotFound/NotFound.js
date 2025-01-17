import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container h={'90vh'} p={'16'}>

    <VStack justifyContent={'center'} spacing={'4'} h={'full'}>
      <RiErrorWarningFill size={'5rem'} />
    <Heading my={'8'} textAlign={'center'} children={'Page Not Found'} />
      <Link to={'/'}>
        <Button variant={'ghost'}>Go to Home</Button>
      </Link>
    </VStack>
  </Container>
  )
}

export default NotFound