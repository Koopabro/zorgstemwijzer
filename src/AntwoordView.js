import data from './data';
import {
  CircularProgress,
  CircularProgressLabel,
  VStack,
  Text,
} from '@chakra-ui/react';

const AntwoordView = ({ mijnAntwoorden }) => {
  const partijen = data.map(x => x.partij);
  const matchParty = (them, you) => {
    const same = them.map((x, i) => x === you[i]).filter(x => x).length;
    return Math.round((same / them.length) * 100);
  };

  return (
    <>
      {partijen.map(part => (
        <VStack>
          <CircularProgress value={10} size="3em" p={12}>
            <CircularProgressLabel>10%</CircularProgressLabel>
          </CircularProgress>
          <Text>{part}</Text>
        </VStack>
      ))}
    </>
  );
};

export default AntwoordView;
