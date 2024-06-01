'use client'
import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { DeliveryProps, deliveryRegister } from '@/actions/delivery.details';

const Form1 = ({ formData, setFormData }: any) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" color="#D50030">
        Personal Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            name="firstName"
            placeholder="First name"
            focusBorderColor="#D50030"
            value={formData.firstName || ''}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Last name"
            focusBorderColor="#D50030"
            value={formData.lastName || ''}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          focusBorderColor="#D50030"
          value={formData.email || ''}
          onChange={handleChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name="password"
            focusBorderColor="#D50030"
            value={formData.password || ''}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} colorScheme="red">
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ formData, setFormData }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" color="#D50030">
        Delivery Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="#D50030"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.country || ''}
          onChange={handleChange}
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
          <option>Hungary</option>
          <option>Germany</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="streetAddress"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="#D50030"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.streetAddress || ''}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="#D50030"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.city || ''}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="#D50030"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.state || ''}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postalCode"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="#D50030"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.postalCode || ''}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ formData, setFormData }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" color="#D50030">
        Tax details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            TAX number
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              Tax number (8 char)
            </InputLeftAddon>
            <Input
              type="tel"
              name="taxNumber"
              placeholder="example: (00001111)"
              focusBorderColor="#D50030"
              rounded="md"
              value={formData.taxNumber || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            TAJ number
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              Taj number (10 char)
            </InputLeftAddon>
            <Input
              type="tel"
              name="tajNumber"
              placeholder="example: (0000011111)"
              focusBorderColor="#D50030"
              rounded="md"
              value={formData.tajNumber || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Additional information
          </FormLabel>
          <Textarea
            name="additionalInfo"
            placeholder="Please..."
            rows={3}
            shadow="sm"
            focusBorderColor="#D50030"
            fontSize={{
              sm: 'sm',
            }}
            value={formData.additionalInfo || ''}
            onChange={handleChange}
          />
          <FormHelperText>
            Any additional information to delivery
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [formData, setFormData] = useState({} as DeliveryProps);

  const handleSubmit = async () => {
    try {
      const delivery_details = await deliveryRegister(formData);

      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error.',
        description: "There was an error creating your account.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Image src='/dpd.png' alt='dpd logo' width='40' height='40' />
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme="red"></Progress>
        {step === 1 ? <Form1 formData={formData} setFormData={setFormData} /> : step === 2 ? <Form2 formData={formData} setFormData={setFormData} /> : <Form3 formData={formData} setFormData={setFormData} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="red"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="red"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
