import {
  Avatar,
  Box,
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
import Intro from '../Intro/Intro';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TermsAndConditions from '../../assets/docs/TermsAndConditions';

const Founder = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing={['4', '16']}
      padding={'8'}
      className="md:ml-32"
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

const TandC = ({ termsAndCondition }) => {
  return (
    <Box>
      <Box h={'sm'} p={'8'}>
        <Text
          textAlign={['center', 'left']}
          letterSpacing={'widest'}
          fontFamily={'heading'}
        >
          {termsAndCondition}
        </Text>
        <p className='text-[11px] mt-1 p-1'>Refund only applicable for the cancellation within 7 days.</p>
      </Box>
    </Box>
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
      <Stack
        m={'6'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={'10'}
      >
        <Heading>
          Welcome to <span className="text-yellow-400">KnowledgeNest</span>
        </Heading>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are delighted to have you here.{' '}
          <span className="text-yellow-500">KnowledgeNest</span> is a vibrant
          platform dedicated to developers of all skill levels.Here, you'll
          resources to enhance your development journey. We post videos and
          articles covering a wide range of topics in the world of development.{' '}
          <span className="text-xl font-bold"> Happy coding :) </span>
        </Text>
      </Stack>
      <HStack
        textColor={'white'}
        bgImage={
          'https://miro.medium.com/v2/resize:fit:1400/1*gsAW5P7GRrh2R2lzfJDbQg.jpeg'
        }
      >
        <Intro />
        <Stack overflowY={'scroll'}>
          <TandC mt={'16'} termsAndCondition={<TermsAndConditions />} />
        </Stack>
      </HStack>

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is secured by Razorpay'}
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
      <Link to={'/subscribe'}>
        <Button variant={'ghost'} colorScheme="yellow">
          Check Out Our Plan
        </Button>
      </Link>
    </Container>
  );
};

export default About;
