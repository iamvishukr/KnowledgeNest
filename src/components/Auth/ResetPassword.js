import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const params = useParams();
  return (
    <Container py={'16'} h={'94vh'}>
      <form>
        <Heading
          children={'Reset Password'}
          my={'6'}
          textTransform={'uppercase'}
          teaxtAlign="center"
        />
        <VStack spacing={"8"}> 
        <Input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="New Password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Button type='submit' w={'full'} colorScheme='yellow'>Reset Password</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
