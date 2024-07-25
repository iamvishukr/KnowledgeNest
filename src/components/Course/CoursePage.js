import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import To from '../../assets/videos/To.mp4';

const CoursePage = () => {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sasa',
      title: 'title',
      description: 'description',
      video: {
        url: 'url',
      },
    },
    {
      _id: 'sasa1',
      title: 'title1',
      description: 'description1',
      video: {
        url: 'url',
      },
    },
    {
      _id: 'sasa2',
      title: 'title2',
      description: 'description2',
      video: {
        url: 'url',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']} className='md:mb-0 -mb-[90px]'>
      <Box>
        <video
          muted="true"
          loop
          width={'100%'}
          src={To}
          id="vid"
          autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children={lectures[lectureNumber].description} />
        <Text m={'4'} children="saddads" />
      </Box>
      <VStack className=''>
        {lectures.map((item, index) => (
          <button            
            onClick={()=> setLectureNumber(index)}
            key={item._id}
            className="w-full p-1 items-center m-0 border border-l-0 border-r-0 border-t-0 border-b-gray-400"
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
