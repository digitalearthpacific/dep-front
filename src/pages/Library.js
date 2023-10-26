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

        <iframe width="700" height="445" src="https://www.youtube.com/embed/S7TxnzEH-vM?si=7y-bi7zci-TT5GAV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
