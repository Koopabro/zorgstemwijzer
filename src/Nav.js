import { Link, HStack } from '@chakra-ui/react';

const Navigatie = (stell, antwoord, setStelling) => {
  return (
    <HStack>
      {stell.map((stel, i) => (
        <Link onClick={() => setStelling(i + 1)}>{i + 1}</Link>
      ))}
    </HStack>
  );
};

export default Navigatie;
