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
        The Digital Earth Pacific Programme will help assure a safe and prosperous future for Pacific Islands communities and actively contribute to the regeneration and health of the region and the planet.
      </p>
      <br />
      <p style={{ textAlign: "justify" }}>
        Digital Earth Paciﬁc is in its early stages though several “alpha” and “beta” products have been released. Many of these products have not gone through an extensive data validation process, so they should only be used for demonstration purposes to understand their potential and capabilities. Ongoing work with member countries will inform the co-design and validation processes to enable these data products to reach an operational level.
      </p>
      <br />
      {/* <b><a target="_blank" href="">Products Story Maps</a></b> */}

      <b><a target="_blank" href="https://maps.digitalearthpacific.org/#share=s-AuNZvkBIk2MsFjT2XV81">Products Story Maps</a></b>

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

      {/* Product Development Summary Table */}
        <div style={{ padding: "20px" }}>
          <h2>Digital Earth Pacific - Product Development Summary</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}></tr>
              <th style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px", backgroundColor: "#c0f4ff" }}>Product Name</th>
              <th style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px", backgroundColor: "#c0ffcb" }}>Product Status</th>
              <th style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px", backgroundColor: "#cbc0ff" }}>Core Parameters</th>
              <th style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px", backgroundColor: "#ffc0d5" }}>Data Source (resolution)</th>
            </thead>
            <tbody>
              {[
                {
                  name: "Pacific Coastlines",
                  status: "Beta Release",
                  parameters: "Annual Locations, Rates of Change",
                  source: "Landsat (30m)",
                },
                {
                  name: "Pacific Mangroves",
                  status: "Beta Release",
                  parameters: "Extent, Density, Change",
                  source: "Sentinel-2 GEOMAD (10m)",
                },
                {
                  name: "Water Observations from Space (WOFS)",
                  status: "Beta Release",
                  parameters: "Daily Extent, Annual Frequency, All Frequency",
                  source: "Landsat (30m)",
                },
                {
                  name: "Sentinel-2 GeoMAD",
                  status: "Alpha Release",
                  parameters: "Annual Median (12-bands), Deviations",
                  source: "Sentinel-2 (10m)",
                },
                {
                  name: "Pacific Intertidal Zones",
                  status: "Alpha Release",
                  parameters: "Elevation (m), Exposure (%)",
                  source: "Landsat (30m)",
                },
                {
                  name: "Pacific Optical Satellite Derived Bathymetry (SDB)",
                  status: "Alpha Release",
                  parameters: "Depth (<30m)",
                  source: "Sentinel-2 (10m)",
                },
                {
                  name: "Pacific Coastal Habitat Mapping",
                  status: "In Development",
                  parameters: "Seagrass, Coral Reefs",
                  source: "Sentinel-2 GEOMAD (10m)",
                },
                {
                  name: "Sentinel-1 GeoMAD",
                  status: "In Development",
                  parameters: "Annual Median + Annual Mean (VV, VH), Deviations",
                  source: "Sentinel-1 (10m)",
                },
                {
                  name: "Pacific Vegetation and Deforestation Mapping",
                  status: "In Development",
                  parameters: "Vegetation Height, Canopy Cover, Change",
                  source: "Sentinel-2 (10m)",
                },
                {
                  name: "Fractional Cover",
                  status: "In Development",
                  parameters: "PV, NPV, BS, Unmixing (Scene, Annual)",
                  source: "Landsat (30m)",
                },
                {
                  name: "Land Cover",
                  status: "In Development",
                  parameters: "IPCC 6-class",
                  source: "Sentinel-2 GEOMAD (10m)",
                },
                {
                  name: "Water Quality",
                  status: "In Development",
                  parameters: "Suspended Matter, Chlorophyll-A",
                  source: "Sentinel-2 (10m)",
                },
                {
                  name: "Invasive Species Mapping",
                  status: "In Development",
                  parameters: "African Tulip, Salmwood",
                  source: "Sentinel-2 (10m)",
                },
                ].map((product, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px" }}>{product.name}</td>
                  <td style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px" }}>{product.status}</td>
                  <td style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px" }}>{product.parameters}</td>
                  <td style={{ border: "1px solid #ccc", textAlign: "left", padding: "8px" }}>{product.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        



      <div style={{ marginLeft: "90px" }}>
        <h1>Digital Earth Pacific Products by Country</h1>
        
        <table>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-eJ4gYi3HFWnQhq8iGwq6'><img src='./images/flags/AMERICAN_SAMOA.jpg' /><br />American Samoa</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-rO4JJAmNzC3W6Aylpwpu'><img src='./images/flags/COOK_ISLANDS.jpg' /><br />Cook Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-qRJVh0fj8GY45grDOn3Y'><img src='./images/flags/FSM.jpg' /><br />Federated States<br />of Micronesia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-Ajn9EF7tCX95qVlKqnui'><img src='./images/flags/FIJI_ISLANDS.jpg' /><br />Fiji</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-y7WBCHl8o8PIufh8SO3u'><img src='./images/flags/fp.png' /><br />French Polynesia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-kmD7UNxuAwHaB89TfAWq'><img src='./images/flags/GUAM.jpg' /><br />Guam</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-au4PuHTlFEDoQUxTIlUI'><img src='./images/flags/KIRIBATI.jpg' /><br />Kiribati</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-jPMRHNRRRX1R5sVqqwfm'><img src='./images/flags/MARSHALL_ISLANDS.jpg' /><br />Marshall Islands</a></td>


          </tr>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-02FLjZSACywNaWI7gP6h'><img src='./images/flags/NAURU.jpg' /><br />Nauru</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-qMlDszL0OER1CtalAfMX'><img src='./images/flags/nc.png' /><br />New Caledonia</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-pHdm4F0rJVvtReaCkY89'><img src='./images/flags/NIUE.jpg' /><br />Niue</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-3IkvAXGDCb5aPKNXw5Hk'><img src='./images/flags/NORTHERN_MARIANA_ISLANDS.jpg' /><br />Northern Mariana Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-1Y2o2IwHi4SibA0Zf26F'><img src='./images/flags/PALAU.jpg' /><br />Palau</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-1GL4fLABgF99QMjoJe0O'><img src='./images/flags/PAPUA_NEW_GUINEA.jpg' /><br />Papua New Guinea</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-i7j7YlGgKBckRb23ndNq'><img src='./images/flags/PITCAIRN.jpg' /><br />Pitcairn</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-03uD77o3gezhvC91imOH'><img src='./images/flags/SAMOA.jpg' /><br />Samoa</a></td>


          </tr>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-6HCRrGq9foiZSswdK4lB'><img src='./images/flags/SOLOMON_ISLANDS.jpg' /><br />Solomon Islands</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-yZl0qnP5lwwM7L8dttkA'><img src='./images/flags/TOKELAU.jpg' /><br />Tokelau</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-nrZ5yIsE4OYFUFGTtkfI'><img src='./images/flags/TONGA.jpg' /><br />Tonga</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-mK5a0Q2yqn19yth6dYaa'><img src='./images/flags/TUVALU.jpg' /><br />Tuvalu</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-eTUFLw6pVi9b2JVjxUHj'><img src='./images/flags/VANUATU.jpg' /><br />Vanuatu</a></td>
            <td style={{ padding: '20px', textAlign: 'center' }}><a target="_blank" href='https://maps.digitalearthpacific.org/#share=s-r27iOJBnYNjzrU6jaX1A'><img src='./images/flags/france.png' /><br />Wallis And Futuna</a></td>

          </tr>

        </table>

      </div>

    </Layout>
  );
};

export default Applications;
