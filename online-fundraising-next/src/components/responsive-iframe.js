/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const ResponsiveIframe = ({ src, children, ...props }) => {
  return (
    <Box sx={styles.videoContainer}>
      {children ? children : <iframe src={src} {...props}></iframe>}
    </Box>
  );
};

export default ResponsiveIframe;

const styles = {
  videoContainer: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
    iframe: {
      border: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};
