import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {
  const user = {
    role: 'admin',
  }  
  const isAuthenticated = true;
  const logoutHandler = () => {
    console.log('logged out');
    onClose();
  }
  const { isOpen, onClose, onOpen } = useDisclosure();
  const LinkButton = ({ url, title, onClose }) => (
    <Link onClick={onClose} to={url} variant={'ghost'}>
      {title}
    </Link>
  );
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        position={'fixed'}
        top="6"
        left="6"
        rounded="full"
        zIndex={'overlay'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottom={'1px'}>KnowledgeNest</DrawerHeader>
            <DrawerBody>
              <VStack spacing={'6'} alignItems={'flex-start'}>
                <LinkButton onClose={onClose} url="/" title="Home" />
                <LinkButton onClose={onClose} url="/courses" title="All Courses" />
                <LinkButton onClose={onClose} url="/request" title="Request a Course" />
                <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                <LinkButton onClose={onClose} url="/about" title="About" />
              </VStack>
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role==="admin" && <Link onClick={onClose} to="/admin/dashboard">
                         <Button colorScheme='green' variant={'ghost'} className='mt-4'>
                            <RiDashboardFill />
                            Dashboard
                         </Button>
                      </Link>}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/signup">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>

            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
