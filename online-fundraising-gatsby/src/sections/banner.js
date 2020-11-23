/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import DonationForm from 'components/donation-form';
import Image from 'components/image';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <DonationForm />
          <Box as="figure" sx={styles.illustration}>
            <Image
              src={data.illustration.childImageSharp.fluid}
              width="836"
              height="458"
              alt="illustration"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    zIndex: 0,
    pt: [17, null, null, 19, 21, 23],
    pb: [8, null, null, 10, null, null, 10],
    minHeight: [null, null, null, null, null, '100vh'],
  },
  contentWrapper: {
    gap: [12, null, null, 14, 12],
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, null, '385px 1fr', '470px 1fr'],
    alignItems: 'center',
  },
};
