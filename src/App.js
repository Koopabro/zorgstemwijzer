import React, { useState } from 'react';
import data from './data';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Heading,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
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
            <VStack spacing={8}>
              {/* Voor wie dit leest, I'm sorry voor deze ongelovelijke warboel*/}

              {/* Headings*/}
              {stelling === 0 && <Heading>Gezondheidsstemwijzer</Heading>}
              {stelling < 31 && stelling > 0 && (
                <Heading>Stelling {stelling}</Heading>
              )}

              {/* Texten */}
              {stelling === 0 && (
                <Text fontSize="xl">
                  Wat denken politieke partijen over gezondheid?
                </Text>
              )}

              {stelling < 31 && stelling > 0 && (
                <Text fontSize="xl">{Stellingen[stelling - 1]}</Text>
              )}

              {stelling > 30 && (
                <>
                  <Text fontSize="2xl">
                    Dit zijn je resultaten voor de Gezondheidswijzer.
                  </Text>
                  <VStack>
                    {data.map(x => (
                      <Box key={x.partij}>
                        <strong>{x.partij}</strong>:{' '}
                        {matchParty(
                          x.wijzer.map(y => y.antw),
                          antwoord.map(z => z.antw)
                        )}
                        %
                      </Box>
                    ))}
                  </VStack>
                </>
              )}

              {/* Knoppen */}
              {stelling > 0 && stelling < 31 && (
                <HStack>
                  <Button onClick={() => updateAntwoord(0)}>Tegen</Button>
                  <Button onClick={() => updateAntwoord(1)}>Neutraal</Button>
                  <Button onClick={() => updateAntwoord(2)}>Voor</Button>
                </HStack>
              )}
              {stelling === 0 && (
                <Button onClick={() => setStelling(stelling + 1)}>
                  Doe de kieswijzer →
                </Button>
              )}

              {/* Disclaimer */}
              {stelling === 0 && (
                <Text fontSize="xs">
                  Voor deze kieswijzer is contact opgenomen met de partijen die
                  een zetel peilen, danwel op lokaal niveau een rol hebben
                  gespeeld. Partijen X, Y en Z hebben schriftelijk hun standpunt
                  op de stellingen toegelicht. Van de overige partijen hebben we
                  gekeken wat er in het verkiezingsprogramma stond. De PVV heeft
                  expliciet aangegeven niet meegenomen te willen worden in deze
                  stemwijzer.{' '}
                </Text>
              )}

              {stelling < 31 && stelling > 0 && (
                <Accordion>
                  <AccordionItem>
                    <AccordionButton>
                      Dit vinden de partijen: <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <VStack spacing={4}>
                        {data
                          .map(x => ({
                            naam: x.partij,
                            filt: x.wijzer.filter(y => y.stelling === stelling),
                          }))
                          .map(ele => (
                            <Text key={ele.naam}>
                              <strong>{ele.naam}</strong>:{' '}
                              {ele.filt[0].toelichting}
                            </Text>
                          ))}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
