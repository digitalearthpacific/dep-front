import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";
import ApplicationCard from "../components/ApplicationCard";

import appConfig from "../config/products.yml";

const Applications = () => {
  const banner = (
    <DefaultBanner>
      <h1>Regional Products</h1>
      <p style={{ textAlign: "justify" }}>
        The Digital Earth Pacific Programme will help assure a safe and prosperous future for Pacific Islands communities, and actively contribute to the regeneration and health of the region, and the planet.
      </p>
      <br />
      <p style={{ textAlign: "justify" }}>
        Digital Earth Paciﬁc is in its early stages. All products currently made available are considered beta products. They
        have not gone through any extensive data validation process, and therefore, should be used for demonstration
        purposes to understand the potential and capabilities of this system. Further work with member countries will inform
        the co-design and validation process to bring these data products to an operational level.
      </p>
      <br/>
      <b><a target="_blank" href="https://maps.digitalearthpacific.org/#share=s-868IaLiKssrBWrILWFmV">Products Story Maps</a></b>
    </DefaultBanner>
  );

  const appsList = appConfig.map(app => {
    return <ApplicationCard key={`card-${app.title}`} app={app} />;
  });

  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Applications" />
      <div className="layout-container">
        <div className="layout-row grid-content">{appsList}</div>
      </div>



      <div style={{ marginLeft: "90px" }}>
        <h1>Browse by Country</h1>

        <table>
          <tr>

            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-tJLDZLuccv9kOhd2JyAA'><img src='./images/flags/AMERICAN_SAMOA.jpg' /><br />American Samoa</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-enOvtFlvgYSZJtiCPqHb'><img src='./images/flags/COOK_ISLANDS.jpg' /><br />Cook Islands</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-y1kZ4GT2VLWMtZ2VsGtM'><img src='./images/flags/FIJI_ISLANDS.jpg' /><br />Fiji Islands</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-ks7pkLMrp3DmU8wcFEmo'><img src='./images/flags/FRENCH_POLYNESIA.jpg' /><br />French Polynesia</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-Af75EF6wrFS5PAAUAXXb'><img src='./images/flags/GUAM.jpg' /><br />Guam</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-u4wt6I10vQqJnKOYZmB6'><img src='./images/flags/KIRIBATI.jpg' /><br />Kiribati</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-uPSjXMSrQnv6mHgHa0Z3'><img src='./images/flags/MARSHALL_ISLANDS.jpg' /><br />Marshall Islands</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-sR2GQ9WKBspYvOIDbwCL'><img src='./images/flags/NAURU.jpg' /><br />Nauru</a></td>



          </tr>
          <tr>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-eCSwAdB5QyyBxZhWKMVA'><img src='./images/flags/NEW_CALEDONIA.jpg' /><br />New Caledonia</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-aB6Jz7d4YBcepq71mrFK'><img src='./images/flags/NIUE.jpg' /><br />Niue</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-7CvXcQg0UzVqyD6riaH5'><img src='./images/flags/NORTHERN_MARIANA_ISLANDS.jpg' /><br />Northern Mariana</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-AfBk4f3v2E9TBDa1jrXX'><img src='./images/flags/PALAU.jpg' /><br />Palau</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-CEKze5xfIsVRZce8cmnW'><img src='./images/flags/PAPUA_NEW_GUINEA.jpg' /><br />Papua New Guinea</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-atCJ60plKDQCmqQOFYVZ'><img src='./images/flags/PITCAIRN.jpg' /><br />Pitcairn</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-YgzjvZYR1QyV4bkUuJiI'><img src='./images/flags/SAMOA.jpg' /><br />Samoa</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-tI7CEpu5eppZylPk4WFN'><img src='./images/flags/SOLOMON_ISLANDS.jpg' /><br />Solomon Islands</a></td>


          </tr>
          <tr>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-8TfBUX9K0HmvAMxtHuR9'><img src='./images/flags/TOKELAU.jpg' /><br />Tokelau</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-cmNNQySp0DliN0ijKwKP'><img src='./images/flags/TONGA.jpg' /><br />Tonga</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-7hRHbemKnEv4YfdC7Y7I'><img src='./images/flags/TUVALU.jpg' /><br />Tuvalu</a></td>
            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-hUdTy8OsRIBHaOKcLbos'><img src='./images/flags/VANUATU.jpg' /><br />Vanuatu</a></td>

            <td style={{ padding: '20px' }}><a href='https://maps.digitalearthpacific.org/#share=s-iPZKkNRrAICPXZf6Q6QG'><img src='./images/flags/WALLIS_AND_FUTUNA.jpg' /><br />Wallis And Futuna</a></td>

          </tr>

        </table>

      </div>

    </Layout>
  );
};

export default Applications;
