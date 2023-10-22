import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import DefaultBanner from "../components/DefaultBanner";



const Governance = () => {
  const banner = (
    <DefaultBanner style={{ width: '100%' }}>
      <h1>Governance Framework</h1>
      <p style={{ textAlign: "justify" }}>
        The Digital Earth Pacific governance structure for Digital Earth Pacific take into account existing mechanisms
        and structures in order to leverage decision-making processes already in place without creating
        redundancy. As such, the DEP governance structure will consist of the CRGA at the strategic
        level, the Steering Committee at the tactical level, and the Program Management Team at the
        operational level.
      </p>
    </DefaultBanner>
  );


  return (
    <Layout bannerHeader={banner} isShort>
      <SEO title="Governance" />


      <div style={{ marginLeft: '90px', width: '80%' }}>
        <h1>Steering Committee</h1>
        The Digital Earth Pacific Steering Committee will be the governing body inclusive of respected
        subject-matter-experts who can provide rigorous and practical guidance on the overall technical
        and strategic implementation of Digital Earth Pacific. Inputs will include providing insights on the
        latest technological trends and emerging issues; key needs, challenges and opportunities
        across countries; alignment with existing programs and projects; opportunities for resource
        mobilization; and stakeholder engagement.
        The Steering Committee will be an independent governance mechanism serving the interests of
        the Digital Earth Pacific program. It will comprise experts from the Pacific Region and
        international organizations and be multi-stakeholder in nature inclusive of governments, civil
        society and private sector. The Steering Committee will provide guidance to the Digital Earth
        Pacific Program Management Team where actions, decision and progress will be presented to
        the annual CRGA meeting.

        <br /><br />
        <img style={{ width: '60%' }} src="./images/steering.png" />

        <h2>Membership</h2>

        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'left' }}>Role</th>
            <th style={{ textAlign: 'left' }}>Affiliation</th>
          </tr>


          <tr>
            <td style={{ padding: '10px' }}>Maree Wilson</td>
            <td style={{ padding: '10px' }}>Branch Head, National Earth and Marine Observations</td>
            <td style={{ padding: '10px' }}>Geoscience Australia</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>John Strickland</td>
            <td style={{ padding: '10px' }}>Director Emergency Management Cook Islands, Office of the Prime Minister</td>
            <td style={{ padding: '10px' }}>Cook Islands</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Stuart Chape</td>
            <td style={{ padding: '10px' }}>Director, Island and Ocean Ecosystems </td>
            <td style={{ padding: '10px' }}>SPREP</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Dr Isoa Korovulavula</td>
            <td style={{ padding: '10px' }}>Director of the Institute of Applied Sciences University of South Pacific</td>
            <td style={{ padding: '10px' }}>USP</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Dr. Raijeli Taga</td>
            <td style={{ padding: '10px' }}>PS Ministry of Lands and Natural Resources Ministry of Lands and Natural Resources</td>
            <td style={{ padding: '10px' }}>Fiji</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Adelle (Lukes) Isechal</td>
            <td style={{ padding: '10px' }}>MSP ( Marine Spatial Planning) Coordinator Ministry of Agriculture, Fisheries and the Environment </td>
            <td style={{ padding: '10px' }}>Palau</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Nick Pion</td>
            <td style={{ padding: '10px' }}>Hydrography Manager National Maritime Safety Authority</td>
            <td style={{ padding: '10px' }}>PNG</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Tuvuki Ketedromo</td>
            <td style={{ padding: '10px' }}>Chief of Water Quality Division Environment Protection Agency</td>
            <td style={{ padding: '10px' }}>RMI</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Moriana Phillip</td>
            <td style={{ padding: '10px' }}>General Manager Environment Protection Agency</td>
            <td style={{ padding: '10px' }}>RMI</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Joy Papao</td>
            <td style={{ padding: '10px' }}>UNITAR In-Country Technical Expert</td>
            <td style={{ padding: '10px' }}>Solomon Islands</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Sachindra Singh</td>
            <td style={{ padding: '10px' }}>Geoinformatics Team Leader</td>
            <td style={{ padding: '10px' }}>Pacific Community (SPC)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Andiswa Mlisa</td>
            <td style={{ padding: '10px' }}>Principal Advisor - Business Development</td>
            <td style={{ padding: '10px' }}>Pacific Community (SPC)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Stuart Minchin</td>
            <td style={{ padding: '10px' }}>Director General </td>
            <td style={{ padding: '10px' }}>Pacific Community (SPC)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Yana Gevorgyan</td>
            <td style={{ padding: '10px' }}>Director, Secretariat</td>
            <td style={{ padding: '10px' }}>Group on Earth Observations</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Dr Jothiganesh Sundaram</td>
            <td style={{ padding: '10px' }}>Regional Technical Lead for Climate and Weather-related Risks</td>
            <td style={{ padding: '10px' }}>World Food Programme</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Taaniela Kula</td>
            <td style={{ padding: '10px' }}>Acting CEO, Tonga Ministry of Land and Natural Resources</td>
            <td style={{ padding: '10px' }}>Tonga</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Faatasi Malologa</td>
            <td style={{ padding: '10px' }}>Director, Department of Lands & Survey, Office of the Prime Minister</td>
            <td style={{ padding: '10px' }}>Tuvalu</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>David Borges</td>
            <td style={{ padding: '10px' }}>Systems Engineering Office Committee on Earth Observation Satellites</td>
            <td style={{ padding: '10px' }}>National Oceanic and Atmospheric Administration</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Aditya Agrawal</td>
            <td style={{ padding: '10px' }}>Founder D4DInsights</td>
            <td style={{ padding: '10px' }}>National Oceanic and Atmospheric Administration</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Dr John Marra</td>
            <td style={{ padding: '10px' }}>Regional Climate Services Director</td>
            <td style={{ padding: '10px' }}>National Oceanic and Atmospheric Administration</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Kirsten Larsen</td>
            <td style={{ padding: '10px' }}>Chief of Marine Ecosystems Section</td>
            <td style={{ padding: '10px' }}>National Oceanic and Atmospheric Administration</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Jeffrey Kaitip</td>
            <td style={{ padding: '10px' }}>Acting Director Department of Urban Affairs Planning (DUAP), Ministry of Internal Affairs</td>
            <td style={{ padding: '10px' }}>National Oceanic and Atmospheric Administration</td>
          </tr>


        </table>

      </div>

      <br />
      <br />

    </Layout>
  );
};

export default Governance;
