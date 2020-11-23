/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import { LearnMore } from 'components/link';

const Service = ({ service }) => {
  return (
    <Box sx={styles.service}>
      <Box as="figure">
        <Image width="64" height="64" src={service.icon} alt={service.title} />
      </Box>
      <Heading as="h4">{service.title}</Heading>
      <Text as="p">{service.desc}</Text>
      <LearnMore path={service.link} />
    </Box>
  );
};

export default Service;

const styles = {
  service: {
    textAlign: 'center',
    figure: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: [4, null, null, 6],
      minHeight: 64,
    },
    h4: {
      color: 'heading',
      fontWeight: 500,
      fontSize: '17px',
      lineHeight: 1.77,
      mb: [2, null, null, 3],
    },
    p: {
      color: 'text',
      fontSize: [1, null, null, '15px'],
      lineHeight: [1.83, null, null, 2],
      mb: [3, null, null, 4],
    },
    a: {
      fontSize: [1, null, null, '15px'],
    },
  },
};
