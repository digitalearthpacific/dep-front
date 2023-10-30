import { Text } from "@fluentui/react";

import Layout from "components/Layout";
import SEO from "components/Seo";
import Resource from "./components/Resource";
import BannerFooter from "./components/BannerFooter";

export const Home = () => {
  const banner = (
    <div
      className="hero"
      style={{
        background: "url(./images/banner/T19.JPG)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "650px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div className="grid-content">
        <Text
          block
          variant="mega"
          className="title"
          styles={{
            root: {
              color: "#fff",
              maxWidth: 580,
              marginBottom: 40,
              fontWeight: 100,
            },
          }}
        >
          Digital Earth Pacific
        </Text>
      </div>
    </div>
  );

  return (
    <Layout bannerHeader={banner} bannerFooter={<BannerFooter />}>
      <SEO title="Home" />
      <div
        className="grid-content"
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <Text
          block
          variant="xxLarge"
          style={{ textAlign: "center", fontVariant: "small-caps" }}        >
          Enabling decision-making for the Pacific Peoples using Earth Observations at scale to Achieve Sustainable Development
        </Text>
        <Text
          block
          variant="xLarge"
          style={{ textAlign: "center" }}>

            <br/> 
          Digital Earth Pacific provides decision-makers with the information needed to make sound decisions addressing the Pacific's challenges,<br/>1most notably climate change, food security and disaster. 

        </Text>
        <Text
          block
          variant="large"
          style={{ margin: "1.0rem 0", textAlign: "justify", maxWidth: "815px" }}
        >
          <br></br>
          The Digital Earth Pacific (DEP) is an operational earth observation system that uses decades of satellite data to show how local environments are changing over time. This includes changes to landcover and land use to better target humanitarian assistance after disasters, mapping of changing coastlines caused by climate change or storm events, and understanding how mangrove growth has changed without having to map this manually .
          <br /><br />
          DEP will allow Pacific Community (SPC) SPC member states to make more informed decisions based on timely information. 
 
 It is a free and open digital public infrastructure helps the region understand the changes in our environment quickly and at a fraction of the cost of previous data systems, at scale. 
 
          <br /><br />
          Digital Earth Pacific helps us achieve our 2050 Leaders vision for our Blue Pacific Continent and underpins the progress being made towards the Paris Agreement and our Sustainable Development Goals. 
          <br /><br /><br />
        </Text>
      </div>
      {/* 
      <div className="home-resources layout-container">
        <div className="layout-row grid-content">
          <Resource title="Data Catalog" iconName="ExploreData" href="/catalog">
            The Planetary Computer includes petabytes of environmental monitoring
            data, in consistent, analysis-ready formats, accessible through our APIs
            as well as directly available via Azure Storage.
          </Resource>
          <Resource title="API" iconName="Code" href="/docs">
            The Planetary Computer API makes it easy for users to find exactly the
            data they need, simplifying search and discovery across our Data Catalog.
          </Resource>
          <Resource external title="Hub" iconName="TableComputed" href="/compute">
            The Planetary Computer Hub is a development environment that makes our
            data and APIs accessible through familiar, open-source tools, and allows
            users to easily scale their analyses.
          </Resource>
          <Resource
            title="Applications"
            iconName="WebAppBuilderFragmentCreate"
            href="/applications"
          >
            Partners all over the world are building on top of the Planetary Computer
            platform, providing the actionable information that is critical to
            sustainability practitioners.
          </Resource>
        </div>
      </div>
       */}
    </Layout>
  );
};
