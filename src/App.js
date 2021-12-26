import React, { useState } from 'react';
import data from './data';
import Navigatie from './Nav';
import { ChakraProvider, Box, VStack, Image } from '@chakra-ui/react';
import jvg from './jvg.png';
import Stellingen from './Stelling';
//TODO: Cijfertjes aan de bovenkant van de box groen/rood/neutraal zodat je terug kan gaan

function App() {
  const [antwoord, setAntwoord] = useState([]);
  const [stelling, setStelling] = useState(0);

  const updateAntwoord = ant => {
    setAntwoord([...antwoord, { stelling: stelling, antw: ant }]);
    setStelling(stelling + 1);
  };

  const matchParty = (them, you) => {
    const same = them.map((x, i) => x === you[i]).filter(x => x).length;
    return Math.round((same / them.length) * 100);
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#FFC03A">
        <VStack spacing={12}>
          <Image src={jvg} />
          <Box bg="white" w="3xl" maxW="100%" textAlign="center" p={8}>
            <Navigatie stell={Stellingen} setStelling={setStelling} />
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
