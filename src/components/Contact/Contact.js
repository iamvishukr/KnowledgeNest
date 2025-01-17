import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <Container h="92vh">
      <VStack h={'full'} justifyContent={'center'} spacing={'16'} mt={'8'}>
        <Heading children={'Contact Us'} textTransform={'uppercase'}  />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type={'name'}
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
            <FormLabel htmlFor="message" children={'Message'} />
            <Input
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              focusBorderColor="yellow.500"
            />
            </Box>
          <Button my={'4'} colorScheme="yellow" type="submit">
            Submit
          </Button>
          <Box my={'4'}>
          Request a course ? <Link to={'/request'}><Button variant={'link'} colorScheme='yellow' type='submit'>click</Button>{" "}here</Link> 
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
