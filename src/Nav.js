import { Link, HStack } from '@chakra-ui/react';

const Navigatie = ({ stell, antwoord, setStelling, current }) => {
  return (
    <HStack pb={10}>
      {stell.map((stel, i) => (
        <Link
          style={{
            textDecoration: current === i ? 'underline' : null,
          }}
          key={i}
          onClick={() => setStelling(i)}
        >
          {i + 1}
        </Link>
      ))}
    </HStack>
  );
};

export default Navigatie;
