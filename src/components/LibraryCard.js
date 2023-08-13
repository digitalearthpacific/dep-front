import React from "react";
import { Link, Text } from "@fluentui/react";
import ChevronLink from "./controls/ChevronLink";

const LibraryCard = ({ app }) => {
  const { title, url, source, published, banner } = app;

  return (
    <div className="api-datasource-item">
      <h2 style={{ color: "initial", marginTop: 0 }}>{title}</h2>
      <Link href={url} underline={false} style={{ textDecoration: "none" }}>
      <div>
          <img style={{ height: 400 }} alt="" src={banner} />
        </div>       
      </Link>
      <br/>
      <Text block variant="medium" style={{ fontWeight: 600 }}>      
            <div key={title} style={{ paddingBottom: 15 }}>
              <ChevronLink href={url} label={title} />
              <i>{source}</i> | {published}
            </div>
            
      </Text>
     
    </div>
  );
};

export default LibraryCard;
