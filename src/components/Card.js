import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius='lg' bg="white" overflow='hidden'>
      <Image src={imageSrc} objectFit='cover'/>
      <Heading color="black" fontSize='md'>{title}</Heading>
      <Text color="grey" fontSize='sm'>{description}</Text>
      <HStack>
        <Text color="black" fontSize='xs'>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
