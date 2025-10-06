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







    </DefaultBanner>
  );


  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Community" />


      <div style={{ marginLeft: "90px" }}>

        <table style={{ width: "75%" }}>


          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://media.shorthand.com/media/organisations/HFa7Q2FkTB/q1U5RueeYg/dsc_4218-2230x1487.webp?sh-expires-at=1759721377&sh-signature=b9d32e0c6980be172b6b9d8e8963d7fdff4dc16d426d8d072cf12d95e10bc1b0" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://preview.shorthand.com/nd7hBYuUXHkfRiN7">Digital Earth Pacific partnering with governments for capacity development</a></td>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/dep-tc-winston/assets/Zfq04B6WXb/stock-photo-indigenous-fijian-girl-walking-on-flooded-land-in-fiji-on-feb-severe-tropical-cyclone-winston-561184597-1500x1002.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-cyclone-winston">DEP monitoring mangroves damage and recovery following TC Winston, Viti Levu, Fiji</a></td>
          </tr>

          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/the-impact-of-digital-earth-pacific-fijis-illegal-gravel-extraction/assets/sqsFgbgSqP/microsoftteams-image-79-800x665.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-fijis-illegal-gravel">DEP monitoring gravel extraction for economic development in Fiji</a></td>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2021/09/02124910/2-seagrass-and-manatees-768x512.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-mangroves-and-seagrass">DEP in management and conservation of blue carbon ecosystems</a></td>
          </tr>


          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/dep-ahi-story/assets/DwcWxSfpky/dsc_4708-4096x2731.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/a-conversation-with/2023/10/the-impact-of-digital-earth-pacific-in-tonga-ahis-story">DEP Access to data and innovative tools, Ahi’s story in Tonga </a></td>
          </tr>

        </table>

        <hr />

        <i>Credit: Pacific Community (SPC) Coporate Communications Division and ESRI ArcGIS Living Atlas of the World Team</i>

      </div>

      {/* <iframe id="AppFrame" src="https://spc-cps.shorthandstories.com/dep-tc-winston/index.html"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="20000px"
        scrolling="auto"></iframe > */}



    </Layout>
  );
};

export default Community;
