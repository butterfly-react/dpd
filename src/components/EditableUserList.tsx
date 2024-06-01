'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react';
import { getUsers, updateUser, deleteUser } from '@/actions/user.actions';
import { DeliveryProps } from '@/actions/delivery.details';
import Link from 'next/link';

const EditableUserList = () => {
  const [users, setUsers] = useState<DeliveryProps[]>([]);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<DeliveryProps>>({});
  const toast = useToast();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        toast({
          title: 'Error fetching users.',
          description: (error as Error).message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
    fetchUsers();
  }, [toast]);

  const handleEditClick = (user: DeliveryProps) => {
    setEditUserId(user.id);
    setFormData(user);
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      toast({
        title: 'User deleted.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error deleting user.',
        description: (error as Error).message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSaveClick = async () => {
    if (editUserId === null) return;
    try {
      const updatedUser = await updateUser(editUserId, formData);
      setUsers(users.map(user => (user.id === editUserId ? updatedUser : user)));
      setEditUserId(null);
      setFormData({});
      toast({
        title: 'User updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error updating user.',
        description: (error as Error).message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

 
  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="md">
      <Table variant="striped" colorScheme="red">
        <Thead bg="#D50030">
          <Tr>
            <Th color="white">First Name</Th>
            <Th color="white">Last Name</Th>
            <Th color="white">Email</Th>
            <Th color="white">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => (
            <Tr key={user.id}>
              <Td>
                {editUserId === user.id ? (
                  <Input
                    value={formData.firstName || ''}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  />
                ) : (
                  user.firstName
                )}
              </Td>
              <Td>
                {editUserId === user.id ? (
                  <Input
                    value={formData.lastName || ''}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  />
                ) : (
                  user.lastName
                )}
              </Td>
              <Td>
                {editUserId === user.id ? (
                  <Input
                    value={formData.email || ''}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                ) : (
                  user.email
                )}
              </Td>
              <Td>
                {editUserId === user.id ? (
                  <Button onClick={handleSaveClick} colorScheme="red" mr={2}>
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => handleEditClick(user)} colorScheme="red" mr={2}>
                    Edit
                  </Button>
                )}
                <Button onClick={() => handleDeleteClick(user.id)} colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
        <Button
            variant="outline"
            colorScheme="gray"
            size="sm"
            bg="rgba(128, 128, 128, 0.1)"
            _hover={{ bg: "rgba(128, 128, 128, 0.7)" }}
            mt='5'
          
          >
            <Link href='/'>{'Add'}</Link>
          </Button>
    </Box>
  );
};

export default EditableUserList;
