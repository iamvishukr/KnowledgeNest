import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'center'}
        borderRadius={'lg'}
        spacing={'0'}
        bg={'white'}
        textColor={'black'}
      >
        <Box bg={'yellow.400'} p={'4'} className="rounded-bl-lg rounded-br-lg">
          <Text color="black" children={`Pro Pack - ₹299.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children={`Join Pro Pack and get access to all contents`}
            />
            <Heading size={'md'} children={'₹299 Only'} />
          </VStack>

          <Button textColor={'black'} _hover={'yellow'} my="8" w="full" bg="yellow.400">
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          className="rounded-tl-lg rounded-tr-lg"
        >
          <Heading color={'white'} textTransform={'uppercase'} size="sm" children={'100% refund at cancellation'} />
          <Text color={'white'} fontSize={'xs'} children={'Terms and Conditions Apply'} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
