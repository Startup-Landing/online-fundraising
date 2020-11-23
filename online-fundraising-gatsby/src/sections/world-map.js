/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const WorldMap = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "world-map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Those states we provide donation"
          description="We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to provide them a specific place to live."
        />
        <Box as="figure" sx={styles.illustration}>
          <Image
            width="847"
            height="418"
            src={data.map.childImageSharp.fluid}
            alt="worldMap"
          />
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
    maxWidth: 847,
    m: '0 auto',
  },
};
