import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'John',
    email: 'john@example.com',
    createdAt: String(new Date().toISOString()),
    role: 'ad',
    subsciption: {
        status: 'active',
    }
  };
  return (
    <Container minH={'95vh'} maxW={'containe.lg'} py={'8'}>
      <Heading children={'Profile'} m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button
            colorScheme="yellow"
            variant={'ghost'}
            children="Change photo"
          />
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="createdAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} fontWeight={'bold'} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
                <Text children={'Subscription'} fontWeight={'bold'} />
                {user.subsciption.status==='active' ?(
                    <Button colorScheme='red'>Cancel Subscription</Button>) :(
                    <Link to={'/subscribe'} ><Button colorScheme='yellow'>Subscribe</Button></Link>
                )}
            </HStack>)}
        </VStack>
      </Stack>
    </Container>
  );
};

export default Profile;
