import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Subscribe from 'sections/subscribe';
import Services from 'sections/services';
import VideoIntro from 'sections/video-intro';
import WorldMap from 'sections/world-map';
import Milestone from 'sections/milestone';
import Blog from 'sections/blog';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Startup Landing Gatsby"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
      <Banner />
      <Services />
      <VideoIntro />
      <WorldMap />
      <Milestone />
      <Blog />
      <Subscribe />
    </Layout>
  );
}
