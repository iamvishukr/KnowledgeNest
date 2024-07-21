import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  return (
    <Container height={'95vh'} justifyContent={'center'} mb={'20'} mt={['28', '0']}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading className='-mb-12 md:-mb-8' children={'Register Now'} textTransform={'uppercase'} />
        <form style={{ width: '100%' }} className='md:-mt-5' >
          <Box my={'4'} display={'flex'} justifyContent="center">
            <Avatar size={'2xl'} src={imgPreview} />
          </Box>
          <Box my={'2'}>
            <FormLabel htmlFor="name" children={'Full Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Your Name"
              type="name"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email Address'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@example.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children={'Choose Avatar'} />
            <Input
              required
              accept="image/*"
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my={'4'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>
          <Box className='md:-mt-2 md:mb-2 mb-10'>
            Already a User ?{' '}
            <Link to={'/login'}>
              <Button variant={'link'} colorScheme="yellow" type="submit">
                Log In
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
