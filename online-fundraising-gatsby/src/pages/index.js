import React from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Startup Landing Gatsby"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
      <Banner />
    </Layout>
  );
}
