import React, { useState } from 'react';
import Navigatie from './Nav';
import StellingView from './StellingView';
import AntwoordView from './AntwoordView';
import { ChakraProvider, Box, VStack, Image } from '@chakra-ui/react';
import jvg from './jvg.png';
import Stellingen from './Stelling';
//TODO: Cijfertjes aan de bovenkant van de box groen/rood/neutraal zodat je terug kan gaan

function App() {
  const [antwoord, setAntwoord] = useState([]);
  const [stelling, setStelling] = useState(0);

  const updateAntwoord = ant => {
    setAntwoord([...antwoord, { stelling: stelling, antw: ant }]);
    stelling === 29 ? setStelling(0) : setStelling(stelling + 1);
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#FFC03A">
        <VStack spacing={12}>
          <Image src={jvg} />
          <Box bg="white" w="3xl" maxW="100%" textAlign="center" p={8}>
            <Navigatie
              stell={Stellingen}
              setStelling={setStelling}
              current={stelling}
            />
            {antwoord.length === 30 ? (
              <AntwoordView mijnAntwoorden={antwoord} />
            ) : (
              <StellingView
                Stellingen={Stellingen}
                stelling={stelling}
                updateAntwoord={updateAntwoord}
              />
            )}
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
