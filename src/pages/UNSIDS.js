import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";
import NewsCard from "../components/NewsCard";

import appConfig from "../config/news.yml";

const UNSIDS = () => {
  const banner = (
    <DefaultBanner style={{ width: '100%' }}>
      <h1>UN SIDS 2024</h1>

      <p>
        <b>Side Event Title:</b><br />Digital Earth Pacific: Navigating Climate Resilience in Small Island Developing States
      </p>
      <br />
      <p>
        <b>Date and Venue:</b><br />Thursday, 30 May 2024, Room 5, 08:00 - 09:30
      </p>
      <br />
      <p>
        <b>Interactive Dialogue Alignment:</b><br />Leveraging Data and Digital Technologies and Building Effective Institutions for a Resilient Future in SIDS
      </p>


    </DefaultBanner>
  );


  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="UN SIDS 2024" />
      <div style={{ marginLeft: '90px', width: '80%' }}>

        <img style={{ width: "70%" }} src="https://deppcpublicstorage.blob.core.windows.net/output/website/sids24.png" />

        <br />

        <p style={{ textAlign: 'justify' }}>
          Digital Earth Pacific (DEP) offers a transformative role in strengthening climate resilience among Small Island Developing States (SIDS). As an operational digital public infrastructure making decades of Earth observation data, products and services available at scale for every island across the Pacific, DEP offers new actionable insights for decision-makers about the changing land and ocean. With representatives from Pacific Island Country and Territory (PICTs), we discuss country-specific needs and challenges in using geospatial and Earth observation data and our approach to governance, capacity development and country engagement. Existing products in support of climate resilience, sustainable development and disaster risk reduction will be showcased, while we also address lessons learned and future plans. Join us to understand the Pacific experience in harnessing Earth observations as a pivotal infrastructure for SDIS in charting the course towards resilient prosperity. Given the challenges discussed will likely be shared across SIDS worldwide, we anticipate a dynamic and enriching discussion that will allow us to learn from each other’s experiences and insights.
        </p>
        <b>Format:</b>  This will be an in-person side event.  Panel discussion with 4-5 speakers and a moderator.
        <br /><br />
        <b>Speakers:</b> TBC
        <br /><br />
        <b>Co-Organizers:</b> Pacific Community (SPC) and Group on Earth Observations (GEO)
        <br /><br />
        <b>Contacts:</b> Andiswa Mlisa | <a href="#">andiswam@spc.int</a> Sara Venturini | <a href="#">sventurini@geosec.org</a>
        <br/><br/>
        <b>Website:</b> <a href="https://sdgs.un.org/conferences/sids2024">https://sdgs.un.org/conferences/sids2024</a>


      </div>
    </Layout>
  );
};

export default UNSIDS;
