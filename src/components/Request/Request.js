import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Request = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")

  return (
    <Container h="92vh">
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Request a Course'} textTransform={'uppercase'} />
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
            <FormLabel htmlFor="message" children={'Course'} />
            <Input
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Summary of the course"
              focusBorderColor="yellow.500"
            />
            </Box>
          <Button my={'4'} colorScheme="yellow" type="submit">
            Submit
          </Button>
          <Box my={'4'}>
          Check out available courses <Link to={'/courses'}><Button variant={'link'} colorScheme='yellow' type='submit'>click</Button>{" "}here</Link> 
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;