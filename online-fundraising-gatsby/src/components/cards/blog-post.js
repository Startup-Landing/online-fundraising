/** @jsx jsx */
import { jsx, Box, Flex, Image, Heading, Text } from 'theme-ui';
import { Fragment } from 'react';
import { rgba } from 'polished';
import { Link, LearnMore } from 'components/link';

const BlogPost = ({ post }) => {
  return (
    <Box
      as="article"
      sx={styles.post}
      className={`${post?.showDescription ? '' : 'no-description'} ${
        !!post?.thumbnail ? '' : 'no-thumbnail'
      }`}
    >
      {!!post?.thumbnail && (
        <Flex as="figure" sx={styles.thumbnail}>
          <Image
            width="413"
            height="170"
            src={post?.thumbnail}
            alt={post?.title}
          />
        </Flex>
      )}

      <Box className="content">
        <Heading as="h3" sx={styles.title}>
          <Link path={post?.slug}>{post?.title}</Link>
        </Heading>
        {post?.showDescription && (
          <Fragment>
            <Text as="p" sx={styles.description}>
              {post?.description}
            </Text>
            <LearnMore
              path={post?.slug}
              label="Learn more"
              sx={styles.learnMore}
            />
          </Fragment>
        )}
      </Box>
    </Box>
  );
};

export default BlogPost;

const styles = {
  post: {
    m: ['0 0 30px', null, null, '0 15px 30px'],
    width: ['100%', null, null, 'calc(50% - 30px)', 'calc(33.33% - 30px)'],
    ':last-child': {
      mb: 0,
    },
    '&.no-thumbnail': {
      '.content': {
        backgroundColor: '#F0F0F4',
        padding: '25px 25px 35px',
        borderRadius: 5,
      },
    },
    '&.no-description:not(.no-thumbnail)': {
      figure: {
        mb: 0,
      },
      '.content': {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'flex-end',
        p: '0 11px 20px 20px',
        zIndex: 0,
        ':before': {
          background:
            'linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.71) 99.95%)',
          borderRadius: 5,
          content: `''`,
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.9,
        },
        'h3 a': {
          color: 'white',
          textDecoration: 'none',
        },
      },
    },
  },
  thumbnail: {
    mb: [4],
    img: {
      borderRadius: 5,
    },
  },
  title: {
    fontWeight: 700,
    fontSize: [2, null, null, 3, null],
    lineHeight: [1.5, null, null, null, null, 1.68],
    letterSpacing: '-0.2px',
    a: {
      color: 'heading',
      textDecoration: 'none',
    },
  },
  description: {
    color: rgba('#0F2137', 0.6),
    fontSize: [1, null, null, 2],
    lineHeight: 1.88,
    mt: [2],
  },
  learnMore: {
    fontSize: [1, null, null, 2],
    mt: 2,
  },
};
