import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";
import NewsCard from "../components/NewsCard";

import appConfig from "../config/news.yml";

const News = () => {
  const banner = (
    <DefaultBanner>
      <h1>News and Press Releases</h1>
      <p>
      Latest News and Press Releases about Digital Earth Pacific.
      </p>
    </DefaultBanner>
  );

  const appsList = appConfig.map(app => {
    return <NewsCard key={`card-${app.title}`} app={app} />;
  });

  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="News" />
      <div className="layout-container">
        <div className="layout-row grid-content">{appsList}</div>
      </div>
    </Layout>
  );
};

export default News;
