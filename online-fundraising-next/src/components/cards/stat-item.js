/** @jsx jsx */
import { rgba } from 'polished';
import CountUp from 'react-countup';
import { jsx, Box, Text } from 'theme-ui';

const StatItem = ({ stat, isVisible }) => {
  return (
    <Box sx={styles.item}>
      <Text sx={styles.value}>
        {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
      </Text>
      <Text as="p" sx={styles.title}>
        {stat.title}
      </Text>
    </Box>
  );
};

export default StatItem;

const styles = {
  item: {
    textAlign: 'center',
  },
  value: {
    color: 'heading',
    fontSize: [4, null, null, 10, null, 12],
    display: 'flex',
    justifyContent: 'center',
    lineHeight: 1.38,
    letterSpacing: ['-0.5px', null, null, '-1px'],
  },
  title: {
    fontSize: [1, null, null, '15px', 17],
    lineHeight: 1.77,
    color: rgba('#0F2137', 0.6),
    mt: [1],
  },
};
