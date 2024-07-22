import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Founder = () => {
  return (

    <Stack
      direction={['column', 'row']}
      spacing={['4', '16']}
      padding={'8'}
      
    >
      <VStack>
        <Avatar
          boxSize={['40', '48']}
          src="https://avatars.githubusercontent.com/u/140156661?s=400&u=7e9767c76661f60394910af692b50e110d15502f&v=4"
        />
        <Text children={'Co Founder'} opacity={0.7} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={'center'}>
        <Heading children={'Vishal Kumar'} size={['md', 'xl']} />
        <Text textAlign={'center'} children={'A full stack Web Developer'} />
      </VStack>
    </Stack>
  );
};

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading
        children={'About Us'}
        textTransform={'uppercase'}
        textAlign={'center'}
      />
      <Founder />
      <Stack m={'6'} direction={['column', 'row']} alignItems={'center'}>
        <Heading>Welcome to <span className='text-yellow-400'>KnowledgeNest</span></Heading>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are delighted to have you here. KnowledgeNest is a vibrant platform
          dedicated to developers of all skill levels.Here, you'll resources to
          enhance your development journey. We post videos and articles covering
          a wide range of topics in the world of development.Happy coding!
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
