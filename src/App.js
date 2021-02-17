import React, { useState } from 'react';
import data from './data';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  theme,
  Button,
  Image,
} from '@chakra-ui/react';
import jvg from './jvg.png';
//TODO: Cijfertjes aan de bovenkant van de box groen/rood/neutraal zodat je terug kan gaan
//TODO: Uitslag stemwijzer klopt niet.

function App() {
  const Stellingen = [
    'Accijnzen voor tabak moeten omhoog.',
    'Alleen sigarenboeren/gespecialiseerde zaken mogen nog tabaksproducten verkopen.',
    'Roken in openbare ruimtes is niet meer toegestaan.',
    'Alle voedingsmiddelen krijgen verplicht een gezondheidslabel.',
    'Scholen mogen geen suikerhoudende dranken en ongezonde voeding verkopen.',
    'De suikertaks wordt ingevoerd voor minimaal alle suikerhoudende dranken.',
    'Accijnzen voor alcoholhoudende dranken moeten omhoog.',
    'Alcoholreclame mag pas na 00.00 uur worden uitgezonden.',
    'Zwemlessen worden weer een verplicht onderdeel op basisscholen.',
    'Sporten wordt gratis voor huishoudens met laag inkomen.',
    'Huisvesting van niet-zelfredzame ouderen moet prioriteit krijgen in het bouwprogramma.',
    'Mantelzorgers krijgen meer budget om goede zorg te kunnen verlenen.',
    'Zorgprofessionals krijgen beter uitbetaald.',
    'Er wordt een maximum gesteld aan wat een arts mag verdienen.',
    'Artsen moeten in loondienst komen van de zorginstelling waar ze werken.',
    'Marktwerking in de zorg wordt afgeschaft.',
    'Het eigen risico wordt komende vier jaar afgebouwd.',
    'Medicijnen moeten door Nederlandse bedrijven worden geproduceerd.',
    'Farmaceutische bedrijven mogen niet meer zoveel winst maken.',
    'De overheid moet meer investeren in preventie en zou dit moeten financieren uit de basiszorg.',
    'Basisscholen worden verplicht te onderwijzen over en te ondersteunen in gezonde leefstijlkeuzes.',
    'Een vaccinatieplicht moet worden ingevoerd voor het COVID-19 virus.',
    'Mensen die hun leven als voltooid zien, hebben het recht op euthanasie.',
    'Vrouwen moeten de abortuspil bij hun huisarts kunnen halen.',
    'Vrouwen bepalen zelf wanneer zij in de zwangerschap voor een abortus kiezen.',
    'Er moet meer medisch-wetenschappelijk onderzoek naar voortplantingstechnieken en het voorkomen van ernstige genetische afwijkingen.',
    'Er wordt meer geïnvesteerd in geestelijke gezondheidszorg op wijkniveau.',
    'Verantwoordelijkheid voor jeugdzorg komt bij de Rijksoverheid te liggen.',
    'Gezondheid van mensen moet centraal komen te staan in klimaatbeleid.',
    'Om toekomstige pandemieën door zoönosen (ziektes vanuit dieren) te voorkomen, moet grootschalige veehouderij en fokkerij worden aangepakt.',
  ];

  const [antwoord, setAntwoord] = useState([]);
  const [stelling, setStelling] = useState(0);

  const updateAntwoord = ant => {
    setAntwoord([...antwoord, { stelling: stelling, antw: ant }]);
    setStelling(stelling + 1);
    console.log(antwoord);
  };

  const matchParty = (them, you) => {
    const same = them.map((x, i) => x === you[i]).filter(x => x).length;
    return Math.round((same / them.length) * 100);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#FFC03A" textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={12}>
            <Image src={jvg}></Image>
            <Box p={12} bg="white">
              <HStack>
                {stelling < 31
                  ? Stellingen.map((c, i) => (
                      <button onClick={() => setStelling(i + 1)}>
                        {i + 1}
                      </button>
                    ))
                  : null}
              </HStack>
              <VStack spacing={12}>
                <Text>
                  <h1>
                    <strong>
                      {' '}
                      {/* titel */}
                      {stelling === 0
                        ? 'Kieswijzer Zorg'
                        : stelling > 30
                        ? 'Uitslag'
                        : `Stelling ${stelling}`}
                    </strong>
                  </h1>{' '}
                  {/* inhoud */}
                  {stelling === 0
                    ? 'Wat denken politieke partijen over de zorg?'
                    : Stellingen[stelling - 1]}
                  {stelling > 30 && (
                    <div>
                      Dit zijn je resultaten voor de verkiezingen:
                      <VStack>
                        {data.map(x => (
                          <Box>
                            {x.partij}: {matchParty(x.wijzer, antwoord)}%
                          </Box>
                        ))}
                      </VStack>
                    </div>
                  )}
                </Text>{' '}
                {/* Knoppen */}
                {stelling === 0 && (
                  <Button onClick={() => setStelling(stelling + 1)}>
                    Doe de kieswijzer →
                  </Button>
                )}
                {stelling > 0 && (
                  <HStack>
                    <Button onClick={() => updateAntwoord(0)}>Tegen</Button>
                    <Button onClick={() => updateAntwoord(1)}>Neutraal</Button>
                    <Button onClick={() => updateAntwoord(2)}>Voor</Button>
                  </HStack>
                )}
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
