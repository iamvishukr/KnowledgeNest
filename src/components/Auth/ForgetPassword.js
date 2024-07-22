import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
    const [email, setEmail] = useState("")
  return (
    <Container py={'16'} h={'94vh'}>
      <form>
        <Heading
          children={'Forgetten Your Password?'}
          my={'6'}
          textTransform={'uppercase'}
          teaxtAlign="center"
        />
        <VStack spacing={"8"}> 
        <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@example.com"
              type="email"
              focusBorderColor="yellow.500"
            />
            <Button type='submit' w={'full'} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
