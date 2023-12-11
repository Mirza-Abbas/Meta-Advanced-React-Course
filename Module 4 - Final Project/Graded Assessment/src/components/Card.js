import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <Box bg='white' color='black' borderRadius='10px'>
      <VStack align="left">
        <Image
          borderRadius="10px"
          src={imageSrc} />
        <Heading paddingLeft={2} as="h2" size="lg">
          {title}
        </Heading>
        <Text paddingLeft={2} fontsize="lg">
          {description}
        </Text>
        <Heading paddingLeft={2} paddingBottom={2} as="h6" size="xs">
          see more{" "}
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Heading>
      </VStack>
    </Box>
  );
};

export default Card;
