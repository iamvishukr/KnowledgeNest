import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
      </form>
      <VStack>
        <Input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter Your Name"
          type={'text'}
          focusBorderColor="yellow.500"
        />
        <Input
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="abc@example.com"
          type={'email'}
          focusBorderColor="yellow.500"
        />
        <Button
          colorScheme="yellow"
          w={'full'}
          type="submit"
          textTransform={'uppercase'}
        >
          Update 
        </Button>
      </VStack>
    </Container>
  );
};

export default UpdateProfile;
