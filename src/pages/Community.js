import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";

const onLinkClick = (e) => {
  e.preventDefault();
  alert(e.href);
  document.getElementById('AppFrame').src = "https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-cyclone-winston"
  //history.push('/your-route');
};


const Community = () => {
  const banner = (
    <DefaultBanner>
      <h1>Community Narratives and Use Cases</h1>
      <p>

        <a href='https://www.google.com' onClick={onLinkClick}> Navigate </a>

      </p>
    </DefaultBanner>
  );


  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Community" />


      <iframe id="AppFrame" src="http://localhost:3000"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="20000px"
        scrolling="auto"></iframe >



    </Layout>
  );
};

export default Community;
