import React from 'react';
import { Box } from '@chakra-ui/react';
import Multistep from '@/components/MultiStep';

type Props = {};

function Page({}: Props) {
  return (
    <Box width="100%" height="100vh" bg="gray.100">
      <Multistep />
    </Box>
  );
}

export default Page;