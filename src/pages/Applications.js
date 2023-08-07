import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";
import ApplicationCard from "../components/ApplicationCard";

import appConfig from "../config/apps.yml";

const Applications = () => {
  const banner = (
    <DefaultBanner>
      <h1>Regional Products</h1>
      <p>
      The Digital Earth Pacific Programme will help assure a safe and prosperous future for Pacific Islands communities, and actively contribute to the regeneration and health of the region, and the planet.
      </p>
    </DefaultBanner>
  );

  const appsList = appConfig.map(app => {
    return <ApplicationCard key={`card-${app.title}`} app={app} />;
  });

  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Applications" />
      <div className="layout-container">
        <div className="layout-row grid-content">{appsList}</div>
      </div>
    </Layout>
  );
};

export default Applications;
