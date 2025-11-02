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
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/celebrating-the-management-and-conservation-of-blue-carbon-ecosystems-macblue/assets/vpcexKsYsh/rs19967_macblue-workshop-field-trip-47-2252x1501.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/dynamic-story/2025/11/celebrating-the-management-and-conservation-of-blue-carbon">Celebrating the Management and Conservation of Blue Carbon Ecosystems project; A journey in Seagrass and Mangroves across the Pacific</a></td>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://images.squarespace-cdn.com/content/v1/63be1ec6295b845b8737ddae/e3695072-190c-4dce-a15a-a57f75f6d7ef/children_of_kavewa_island_start_a_mangrove_planting_activity_with_freshly_picked_mangrov_1.jpg?format=2500w" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://spc.int/updates/blog/dynamic-story/2025/10/the-management-and-conservation-of-blue-carbon-ecosystems">The Management and Conservation of Blue Carbon Ecosystems Project</a></td>
            </tr>
          
          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/Fighting-invasive-species-to-protect-Vanuatus-forests-and-people/assets/ZpvDKcPwRe/img_4954-2438x3251.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/dynamic-story/2025/09/fighting-invasive-species-to-protect-vanuatus-forests-and-people">Fighting invasive species to protect Vanuatu’s forests and people</a></td>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://www.spc.int/sites/default/files/styles/featured_image/public/featuredimages/blog/2025-07/RS2328_Desurmont-Torba%20Province-2014-201504160936%20%285%29.JPG?itok=RWIZfZLh" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/2025/07/vanuatus-preparedness-for-disaster-and-climate-change-an-experiment-in-data">Vanuatu’s preparedness for disaster and climate change: An experiment in data science</a></td>
            </tr>
          
          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/depacific-invasive-species/assets/6YYMy0WBwE/original1-2048x1365.jpg" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/dynamic-story/2025/07/identifying-forest-invasive-species-in-fiji-and-tonga-using">Identifying forest invasive species in Fiji and Tonga using machine learning: A Pacific Islands case study</a></td>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://spc-cps.shorthandstories.com/how-spcs-digital-earth-pacific-harnesses-artificial-intelligence-to-revolutionise-our-understanding-of-the-environment/assets/tv8MKYos4b/map-25-1395x766.png" /></td>
            <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/dynamic-story/2025/05/how-spcs-digital-earth-pacific-harnesses-artificial-intelligence">How SPC’s Digital Earth Pacific harnesses Artificial Intelligence to revolutionise our understanding of the environment</a></td>
            </tr>
          
          <tr>
            <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://media.shorthand.com/media/organisations/HFa7Q2FkTB/3JDSkPOBOo/dsc_3834-2299x1533.jpg?sh-expires-at=1761709320&sh-signature=85346209a6243b196765122bd882e522fd47ea5ac77e5b16b3c87cf7bed2f74e" /></td>
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
