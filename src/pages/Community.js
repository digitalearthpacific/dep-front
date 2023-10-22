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
          <th>Story</th>
          <th>Description</th>
          <th>Creator</th>
        </tr>


        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-cyclone-winston">The impact of Digital Earth Pacific Cyclone Winston in Viti Levu, Fiji</a></td>
          <td style={{ padding: '10px' }}>The impact of Digital Earth Pacific Cyclone Winston in Viti Levu, Fiji</td>
          <td style={{ padding: '10px' }}>SPC</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-fijis-illegal-gravel">The impact of Digital Earth Pacific Fiji Illegal Gravel</a></td>
          <td style={{ padding: '10px' }}>The impact of Digital Earth Pacific Fiji Illegal Gravel</td>
          <td style={{ padding: '10px' }}>SPC</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/interactive-story/2023/10/the-impact-of-digital-earth-pacific-mangroves-and-seagrass">The Impact of Digital Earth Pacific Cyclone Winston in Viti Levu, Fiji</a></td>
          <td style={{ padding: '10px' }}>The Impact of Digital Earth Pacific Cyclone Winston in Viti Levu, Fiji</td>
          <td style={{ padding: '10px' }}>SPC</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://www.spc.int/updates/blog/a-conversation-with/2023/10/the-impact-of-digital-earth-pacific-in-tonga-ahis-story">The impact of Digital Earth Pacific in Tonga -Ahi's Story</a></td>
          <td style={{ padding: '10px' }}>The impact of Digital Earth Pacific in Tonga -Ahi's Story</td>
          <td style={{ padding: '10px' }}>SPC</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/slider/index.html?appid=9e20956f766744aea5e9bf85abf5fde6">Digital Earth Pacific Mangrove Damage and Recovery Analysis</a></td>
          <td style={{ padding: '10px' }}>Digital Earth Pacific Mangrove Damage and Recovery Analysis</td>
          <td style={{ padding: '10px' }}>ESRI</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/media/index.html?appid=65642511c0dd44fe82aa237f837627e0">Cyclone Winston Mangrove Damage - Landsat 8 Comparison</a></td>
          <td style={{ padding: '10px' }}>Cyclone Winston Mangrove Damage - Landsat 8 Comparison</td>
          <td style={{ padding: '10px' }}>ESRI</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://pacificcore.maps.arcgis.com/apps/instant/media/index.html?appid=20f24a2c3fb04d95a4038bc9f4fb96da">Cyclone Winston Mangrove Damage - High Resolution Imagery Comparison</a></td>
          <td style={{ padding: '10px' }}>Cyclone Winston Mangrove Damage - Landsat 8 Comparison</td>
          <td style={{ padding: '10px' }}>ESRI</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://storymaps.arcgis.com/stories/d23e91332aa8463390cf2f8600c51f22">Remote Sensing Shows the Impact of Drought in PNG</a></td>
          <td style={{ padding: '10px' }}>Remote Sensing Shows the Impact of Drought in PNG</td>
          <td style={{ padding: '10px' }}>ESRI</td>
        </tr>

        <tr>
          <td style={{ padding: '20px' }}><a target="_blank" href="https://storymaps.arcgis.com/stories/d2a9a0f7ad794ef9a2ddf2f508f70cdc">Destruction of Fiji Island Reef due to Coastal Development</a></td>
          <td style={{ padding: '10px' }}>Destruction of Fiji Island Reef due to Coastal Development</td>
          <td style={{ padding: '10px' }}>ESRI</td>
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
