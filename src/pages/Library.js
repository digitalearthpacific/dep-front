import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";
import LibraryCard from "../components/LibraryCard";

import appConfig from "../config/library.yml";

const Library = () => {
  const banner = (
    <DefaultBanner>
      <h1>Documents Library</h1>
      <p>
        Repository of documents, media and other assets relevant to Digital Earth Pacific.
      </p>
    </DefaultBanner>
  );

  const appsList = appConfig.map(app => {
    return <LibraryCard key={`card-${app.title}`} app={app} />;
  });

  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Library" />

      <div align="center" style={{ background: "black", marginTop: -20 }}>
        <br />
        {/* <iframe width="700" height="394" src="https://www.youtube.com/embed/jCWyfXRIFe0" title="Digital Earth Pacific" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <iframe src="https://spccloud.sharepoint.com/sites/commsteam/_layouts/15/embed.aspx?UniqueId=f91734ab-ff55-45bf-a755-c33c6ecf7c1d&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="740" height="460" frameborder="0" scrolling="no" allowfullscreen title="DEP_Final (25.10) FLINCH.mov"></iframe>

        <br />
      </div>

      <br />
      <br />

      <div className="layout-container">
        <div className="layout-row grid-content">{appsList}</div>
      </div>
    </Layout>
  );
};

export default Library;
