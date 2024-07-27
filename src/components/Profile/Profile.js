import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'John',
    email: 'john@example.com',
    createdAt: String(new Date().toISOString()),
    role: 'ad',
    subsciption: {
      status: 'active',
    },
    playlist: [
      {
        course: 'sad',
        poster:
          'https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-icons-snippets/1.0.5/1673483357431/Microsoft.VisualStudio.Services.Icons.Default',
      },
    ],
  };

  const removeFromPlaylist = id => {
    console.log('Removed from playlist', id);
  };
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container
      minH={'95vh'}
      maxW={'containe.lg'}
      py={'8'}
      className="flex flex-col items-center"
    >
      <Heading children={'Profile'} m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button
            onClick={onOpen}
            colorScheme="yellow"
            variant={'ghost'}
            children="Change photo"
          />
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} fontWeight={'bold'} />
          </HStack>
          <HStack>
            <Text children="createdAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} fontWeight={'bold'} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text
                children={'Subscription'}
                color="yellow.500"
                textTransform={'uppercase'}
                fontWeight={'bold'}
              />
              {user.subsciption.status === 'active' ? (
                <Button
                  textTransform={'uppercase'}
                  colorScheme="red"
                  ml={'10'}
                  fontSize={'sm'}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button textTransform={'uppercase'} colorScheme="yellow">
                    Subscribe
                  </Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button textTransform={'uppercase'}>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button textTransform={'uppercase'}>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((item, index) => (
            <VStack w={'48'} m={'2'} key={item.course}>
              <Image boxSize={'full'} objectFit={'contain'} src={item.poster} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button onClick={() => removeFromPlaylist(item.course)}>
                  <MdDelete />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imgPreview, setImgPreview] = useState('');
  const [image, setImage] = useState('');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgPreview(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImgPreview('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imgPreview && <Avatar boxSize={'48'} src={imgPreview} />}
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImageHandler}
                />
                <Button w={'full'} colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
