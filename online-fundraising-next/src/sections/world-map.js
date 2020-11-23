/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import worldMap from 'assets/images/world-map.png';

const WorldMap = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Those states we provide donation"
          description="We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a specific place to live."
        />
        <Box as="figure" sx={styles.illustration}>
          <Image width="847" height="418" src={worldMap} alt="worldMap" />
        </Box>
      </Container>
    </Box>
  );
};

export default WorldMap;

const styles = {
  section: {
    pt: [8, null, null, 8, null, null, 10],
    pb: [6, null, null, 8, null, null, 14],
  },
  heading: {
    mb: [8, null, null, 11],
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
