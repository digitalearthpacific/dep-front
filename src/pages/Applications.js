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
      <br />
      {/* <b><a target="_blank" href="">Products Story Maps</a></b> */}

      <b><a target="_blank" href="https://maps.digitalearthpacific.org/#share=s-3ibE0nSIbPlg6O1IWqWq">Products Story Maps</a></b>

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
        <h1>DEP Products by Country</h1>
        <a target="_blank" href="https://maps.digitalearthpacific.org/#share=s-se4QkfmUsarYesLIzoXr">Country Story Map</a>

        <table>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-qRgppXAwdM2rvIE2I8yT'><img src='./images/flags/AMERICAN_SAMOA.jpg' /><br />American Samoa</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-zUMbn4ONOhgTZYfdvZN6'><img src='./images/flags/COOK_ISLANDS.jpg' /><br />Cook Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-1U9Xga3YrsjQKtsoJmDc'><img src='./images/flags/FSM.jpg' /><br />Federated States<br />of Micronesia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-vyq0Pm5NG4PtBIQpUTjH'><img src='./images/flags/FIJI_ISLANDS.jpg' /><br />Fiji</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-6UxL4bobYyu7GDMloFlw'><img src='./images/flags/fp.png' /><br />French Polynesia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-bdY3fx9DpgdWW2qxvzRR'><img src='./images/flags/GUAM.jpg' /><br />Guam</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-ck1rLzUl2NFsKb2wudcF'><img src='./images/flags/KIRIBATI.jpg' /><br />Kiribati</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-gcybvvPVFUNIfK4p2T7F'><img src='./images/flags/MARSHALL_ISLANDS.jpg' /><br />Marshall Islands</a></td>


          </tr>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-8xQT43hFCk7KbBIvcsEv'><img src='./images/flags/NAURU.jpg' /><br />Nauru</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-vNUGLyKz4SN34NbZoBFq'><img src='./images/flags/nc.png' /><br />New Caledonia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-eyEyOmBLxsoZdHgKNvS7'><img src='./images/flags/NIUE.jpg' /><br />Niue</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-6qZJtAll6AqVaq5hBDtA'><img src='./images/flags/NORTHERN_MARIANA_ISLANDS.jpg' /><br />Northern Mariana Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-5YuyW2d5BD2oSE8TU7lW'><img src='./images/flags/PALAU.jpg' /><br />Palau</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-xOy7Z4VPvjBcgMAce00H'><img src='./images/flags/PAPUA_NEW_GUINEA.jpg' /><br />Papua New Guinea</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-3tf13eTUs1MrrvIbvv1P'><img src='./images/flags/PITCAIRN.jpg' /><br />Pitcairn</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-wn1kfDJoYythPOI5jgW8'><img src='./images/flags/SAMOA.jpg' /><br />Samoa</a></td>


          </tr>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-pAwCmHK8wtcq2y3ZTEma'><img src='./images/flags/SOLOMON_ISLANDS.jpg' /><br />Solomon Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-yEyn2NN2E5r2ALMX0fcF'><img src='./images/flags/TOKELAU.jpg' /><br />Tokelau</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-kos7KzqBPKTIpGZ53LlB'><img src='./images/flags/TONGA.jpg' /><br />Tonga</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-iUf5kxiNiMPurUFfMRDk'><img src='./images/flags/TUVALU.jpg' /><br />Tuvalu</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-ogHY42pz2mzfdgWKEuHZ'><img src='./images/flags/VANUATU.jpg' /><br />Vanuatu</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-wjExibJr1O6DCXB3nIxD'><img src='./images/flags/france.png' /><br />Wallis And Futuna</a></td>

          </tr>

        </table>

      </div>

    </Layout>
  );
};

export default Applications;
