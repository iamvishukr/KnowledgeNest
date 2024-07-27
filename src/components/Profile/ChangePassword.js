import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          children="Change Password"
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
      </form>
      <VStack>
        <Input
          required
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
          placeholder="Enter Your Old Password"
          type={'password'}
          focusBorderColor="yellow.500"
        />
        <Input
          required
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="Enter a New Password"
          type={'password'}
          focusBorderColor="yellow.500"
        />
        <Button colorScheme='yellow' w={'full'} type='submit' textTransform={'uppercase'}>Change Password</Button>
      </VStack>
    </Container>
  );
};

export default ChangePassword;
