import { Link, Text } from "@fluentui/react";
import { Link as RouterLink } from "react-router-dom";

import ImageStrip from "./ImageStrip";

const BannerFooter = () => {
  return (
    <>
      <ImageStrip />
      <div className="home-footer-container">
        <div className="home-footer-grid grid-content">
        
          <img style={{width:300}} src="https://risk.spc.int/static/geonode/img/spc.png"/>

          <Text
            block
            variant="xxLargePlus"
            className="home-footer-item"
            style={{ color: "#fff" }}
          >
            
          </Text>
          <div className="home-footer-item">
            <Text
              block
              variant="large"
              style={{
                color: "#fff",
                marginBottom: 20,
                marginLeft: 80,
                textAlign: "justify",
              }}
            >
             The Digital Earth Pacific Programme will help assure a safe and prosperous future for Pacific Islands communities, and actively contribute to the regeneration and health of the region, and the planet.
            </Text>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerFooter;
