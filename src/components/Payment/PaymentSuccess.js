import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container  h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'} children={'You have Pro Pack'} />
      <VStack bg={'green.50'} textColor={'black'} boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'}>
        <Box w={'full'} bg={'green.400'} p={'4'} className='rounded-tl-lg rounded-tr-lg' textAlign={'center'}>
          <Text className='font-bold uppercase'>Payment Success !</Text>
        </Box>
        <Box>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>Congrats !! Now You're a <span className='font-bold'>Pro Member</span>. You have access to Premium Content. </Text>

            <Heading size={'4xl'}><RiCheckboxCircleFill /></Heading>
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button mt={'4'} bg={'yellow.400'} textColor={'black'} _hover={''}>Go to Profile</Button>
        </Link>
        <Heading size={'xs'} mt={'12'}>
          Reference: will come from backend
        </Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess