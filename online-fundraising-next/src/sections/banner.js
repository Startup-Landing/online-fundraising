/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import DonationForm from 'components/donation-form';
import Image from 'components/image';
import illustration from 'assets/images/banner.png';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <DonationForm />
          <Box as="figure" sx={styles.illustration}>
            <Image
              src={illustration}
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
    // background: `linear-gradient(180deg, #F9FAFC 0%, rgba(249, 250, 252, 0) 100%)`,
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
  illustration: {
    display: 'flex',
    alignItems: 'center',
  },
};
