import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['ReactJS', 'React-Native', 'NodeJS', 'NextJS'];
  const addToPlayListHandler =() => {
    console.log('added to playlist');
  }
  const Course = ({
    views,
    id,
    title,
    imgSrc,
    addToPlayListHandler,
    creator,
    description,
    lectureCount,
  }) => {
    return (
      <VStack className='mt-16 w-64 transition-all hover:-translate-y-3' alignItems={['center', 'flex-start']}>
        <Image src={"https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-icons-snippets/1.0.5/1673483357431/Microsoft.VisualStudio.Services.Icons.Default"} boxSize={'60'} objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW={'200px'}
          fontFamily={'sans-serif'}
          noOfLines={'3'}
          children={title}
          size={'sm'}
        />
        <Text
          className="text-sm font-normal text-gray-500"
          children={description}
          noOfLines={'2'}
        />
        <HStack>
          <Text className="font-bold text-sm uppercase" children={'Creator'} />
          <Text
            className="font-normal text-sm uppercase"
            fontFamily={'body'}
            children={creator}
          />
        </HStack>
        <Heading size={'sm'}>
          LECTURES
          <span className="font-normal text-gray-500"> {lectureCount} </span>
        </Heading>
        <Heading size={'sm'}>
          <span className="font-normal text-gray-500"> {views} views</span>
        </Heading>
        <Stack direction={['column', 'row']}  alignItems="center">
            <Link to={`/course/${id}`}>
                <Button colorScheme='yellow'>Watch Now</Button>
            </Link>
            <Button variant={'ghost'} onClick={()=>addToPlayListHandler(id)} colorScheme='yellow'>Add to Playlist</Button>
        </Stack>
      </VStack>
    );
  };
  return (
    <div>
      <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
        <Heading children="All Courses" m={'8'}>
          <Input
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search a course"
            type="text"
            focusBorderColor="yellow.500"
          />
          <HStack>
            {categories.map((item, index) => (
              <Button
                key={index}
                onClick={() => setCategory(item)}
                marginLeft={'0.5'}
                marginTop={'2'}
                minW={'56'}
              >
                <Text children={item} />
              </Button>
            ))}
          </HStack>
          <Stack
            direction={['column', 'row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start', 'space-evenly']}
            alignItems={['center', 'flex-start']}
          >
            <Course
              title={'sample'}
              id={'sample'}
              views={'20'}
              creator={'sample-boy'}
              lectureCount={'sample'}
              description={'sample'}
              addToPlayListHandler={addToPlayListHandler}
            />
          </Stack>
        </Heading>
      </Container>
    </div>
  );
};

export default Courses;
