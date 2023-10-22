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
          style={{ textAlign: "center", fontVariant: "small-caps" }}
        >
          Enabling sustainability decision-making for the Pacific Peoples using Earth Observations at scale to Achieve Sustainable Development
        </Text>
        <Text
          block
          variant="large"
          style={{ margin: "1.0rem 0", textAlign: "justify", maxWidth: "815px" }}
        >
          <br></br>
          The Digital Earth Paciﬁc program is developing an operational Earth and ocean observation system that takes decades
of freely available data and brings it together in a sensible way within the Paciﬁc context. It will allow Member States to
make more informed decisions based on good and timely information to overcome the challenges we face such as
climate change, food security and disasters.
          <br /><br />
          This free and open digital public infrastructure will help the region understand the changes in the environment such as
the impact of sea-level rise on our communities, planning for disaster preparedness, response and recovery, and
productivity of agricultural ﬁelds and potential impacts by changes in weather.
          <br /><br />
          Leveraging this technology will allow the development of decision-ready products that will better inform decision
makers whilst providing needed data and information to support regional and global commitments such as the 2050
Strategy for the Blue Paciﬁc Continent, the Paris Agreement and the Sustainable Development Goals.
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
