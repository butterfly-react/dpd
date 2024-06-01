import React from 'react';
import { Box } from '@chakra-ui/react';
import Multistep from '@/components/MultiStep';
import EditableUserList from '@/components/EditableUserList';

type Props = {};

function Page({}: Props) {
  return (
    <Box width="100%" height="100vh" bg="gray.100">
      <EditableUserList />
    </Box>
  );
}

export default Page;