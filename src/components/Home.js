import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiYoutubeLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import React from 'react';
import vg from '../assets/images/vg.png';
import { Link } from 'react-router-dom';
import To from '../assets/videos/To.mp4';

const Home = () => {
  const autoPlay = window.onload = function() {
        document.getElementById('vid').play()
        }
  return (
    <section className="Home">
      <div className="h-[100vh] p-[5rem] box-border">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          align="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text children="Best Resources for Human and Aliens" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
            style={{ filter: 'drop-shadow(0 40px 10px rgba(0, 0, 0, 0.3))' }}
            className="animate-bounceY"
          />
        </Stack>
      </div>

      <Box padding={'6'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children={'OUR BRANDS'}
        />
        <HStack justifyContent={'space-evenly'} className="">
          <RiYoutubeLine className="size-14 pt-2 text-white hover:text-red-600" />
          <FaInstagram className="size-12 pt-2 text-white hover:text-pink-600" />
          <FaGithub className="size-12 pt-2 text-white hover:text-yellow-400" />
          <FaLinkedin className="size-12 pt-2 text-white hover:text-blue-700" />
        </HStack>
      </Box>
      <div className="md:h-[100vh] pt-1 h-auto flex justify-center items-center ">
        <video
          onScroll={autoPlay}
          muted
          loop
          typeof="video/mp4"
          src={To}
          id="vid"
          className="md:w-[60%] w-[100%] outline-none"
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <script>
            
        </script>
      </div>
    </section>
  );
};

export default Home;
