import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {
    const {isOpen, onClose, onOpen} = useDisclosure();
    const LinkButton = ({url, title}) => (
        <Link to={url} variant={'ghost'}>{title}</Link>
    )
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
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottom={'1px'}>KnowledgeNest</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'6'} alignItems={'flex-start'}>
                   <LinkButton url='/' title="HOME" />
                   <LinkButton url='/courses' title="All Courses" />
                   <LinkButton url='/request' title="Request a Course" />
                   <LinkButton url='/contact' title="Contact Us" />
                   <LinkButton url='/about' title="About" />
                   
                </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
