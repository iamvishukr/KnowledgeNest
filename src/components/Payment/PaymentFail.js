import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'90vh'} p={'16'} mb="4">
      <Heading my={'8'} textAlign={'center'} children={'You have Pro Pack'} />
      <VStack
        bg={'red.50'}
        textColor={'black'}
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'red.400'}
          p={'4'}
          className="rounded-tl-lg rounded-tr-lg"
          textAlign={'center'}
        >
          <Text className="font-bold">Payment Failed</Text>
        </Box>
        <Box>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Heading size={'4xl'}>
              <RiErrorWarningFill />
            </Heading>
            <Text className="font-bold">Payment Failed</Text>
          </VStack>
        </Box>
        <Link to={'/subscribe'}>
          <Button
            textColor={'black'}
            variant={'ghost'}
            bg={'yellow.400'}
          >
            Try Again
          </Button>
        </Link>
        <p className="font-normal p-4 text-center">
          If the payment has been deducted from your account but the transaction
          failed, your account will be auto-credited within 3-5 working days as
          per bank's timeline.
        </p>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
