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


      <table>


        <tr>
          <th></th>
          <th>Story</th>
          <th></th>
          <th>Story</th>


        </tr>

        <tr>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/workshop.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://preview.shorthand.com/nd7hBYuUXHkfRiN7">Digital Earth Pacific partnering with governments for capacity development</a></td>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/tcwinston.jpg" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-cyclone-winston">DEP monitoring mangroves damage and recovery following TC Winston, Viti Levu, Fiji</a></td>
        </tr>



        <tr>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/puddle-water-meadow.jpg" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-fijis-illegal-gravel">DEP monitoring gravel extraction for economic development in Fiji</a></td>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/mangrove.jpg" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-mangroves-and-seagrass">DEP in management and conservation of blue carbon ecosystems</a></td>
        </tr>


        <tr>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/ahi.jpg" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/a-conversation-with/2023/10/the-impact-of-digital-earth-pacific-in-tonga-ahis-story">DEP Access to data and innovative tools, Ahi’s story in Tonga </a></td>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/esri1.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/slider/index.html?appid=9e20956f766744aea5e9bf85abf5fde6">Digital Earth Pacific Mangrove Damage and Recovery Analysis</a></td>
        </tr>

        <tr>

        </tr>

        <tr>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/esri2.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/media/index.html?appid=65642511c0dd44fe82aa237f837627e0">Cyclone Winston Mangrove Damage - Landsat 8 Comparison</a></td>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/esri3.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/media/index.html?appid=20f24a2c3fb04d95a4038bc9f4fb96da">Cyclone Winston Mangrove Damage - High Resolution Imagery Comparison</a></td>

        </tr>


        <tr>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/esri4.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://storymaps.arcgis.com/stories/d23e91332aa8463390cf2f8600c51f22">Remote Sensing Shows the Impact of Drought in PNG</a></td>
          <td style={{ padding: '10px' }}><img style={{ width: "200px", height: "130px" }} src="https://deppcpublicstorage.blob.core.windows.net/output/storymaps/esri5.png" /></td>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://storymaps.arcgis.com/stories/d2a9a0f7ad794ef9a2ddf2f508f70cdc">Destruction of Fiji Island Reef due to Coastal Development</a></td>

        </tr>

      </table>



    </DefaultBanner>
  );


  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Community" />



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
