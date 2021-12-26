import { Text, Heading, Button, ButtonGroup } from '@chakra-ui/react';

const StellingView = ({ Stellingen, stelling, updateAntwoord }) => {
  return (
    <>
      <Heading fontSize="2xl">Stelling {stelling + 1}</Heading>
      <Text fontSize="2xl">{Stellingen[stelling]}</Text>
      <ButtonGroup pt={12}>
        <Button colorScheme="green" onClick={() => updateAntwoord(0)}>
          Eens
        </Button>
        <Button colorScheme="gray" onClick={() => updateAntwoord(1)}>
          Neutraal
        </Button>
        <Button colorScheme="red" onClick={() => updateAntwoord(2)}>
          Oneens
        </Button>
      </ButtonGroup>
    </>
  );
};

export default StellingView;
