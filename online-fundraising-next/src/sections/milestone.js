/** @jsx jsx */
import { jsx, Box, Container, Heading, Button, Text } from 'theme-ui';
import { Parallax } from 'react-parallax';
import { Progress } from 'theme-ui';
import parallax from 'assets/images/parallax.png';
import { rgba } from 'polished';

const Milestone = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Parallax sx={styles.parallax} bgImage={parallax} strength={200}>
          <Box sx={styles.card}>
            <Text as="p" sx={styles.cardTitle}>
              Our first milestone
            </Text>
            <Heading sx={styles.goal}>$13M</Heading>
            <Text as="p" sx={styles.collected}>
              We collected 8M donation
            </Text>
            <Progress max={1} value={1 / 2} sx={styles.progress}>
              50%
            </Progress>
            <Text as="span" sx={styles.lastDonation}>
              Last transaction 5 min ago
            </Text>
            <Button>Donate Now</Button>
          </Box>
        </Parallax>
      </Container>
    </Box>
  );
};

export default Milestone;

const styles = {
  section: {
    pt: [6, null, null, 8, null, null, 15],
    pb: [8, null, null, 8, null, null, 13],
  },
  container: {
    '@media only screen and (max-width: 767px)': {
      px: 0,
    },
  },
  parallax: {
    pt: [10, null, null, 12],
    pb: [10, null, null, 12],
    px: [6, null, null, 0],
    display: [null, null, null, 'flex'],
    borderRadius: [5, null, null, 7],
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: rgba('#A29BFE', 0.95),
    borderRadius: 8,
    color: 'white',
    marginRight: [0, null, null, 10, 14, 18],
    minWidth: [null, null, null, 375],
    padding: ['40px 30px 50px', null, null, null, '45px 40px 55px'],
    textAlign: 'center',
    p: {
      fontWeight: 500,
      fontSize: ['15px', null, null, 3],
      lineHeight: 1.68,
    },
    button: {
      backgroundColor: '#756ED7',
      fontSize: [1, null, null, 2],
      mt: [3, null, null, 5, 8],
      minHeight: [45, null, null, 60],
      width: '100%',
    },
  },
  goal: {
    fontSize: [11, null, null, 14, 16],
    fontWeight: 700,
    lineHeight: 0.66,
    m: ['20px 0', null, null, '30px 0'],
  },
  progress: {
    backgroundColor: rgba('#F0F0F0', 0.4),
    color: 'white',
    height: 6,
    mt: [4],
    mb: [2],
  },
  lastDonation: {
    display: 'block',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: 2,
    color: rgba('white', 0.7),
  },
};
