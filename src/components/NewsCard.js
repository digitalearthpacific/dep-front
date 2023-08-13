import React from "react";
import { Link, Text } from "@fluentui/react";
import ChevronLink from "./controls/ChevronLink";

const NewsCard = ({ app }) => {
  const { title, description, url, source, published, banner } = app;

  return (
    <div className="api-datasource-item">
      <h2 style={{ color: "initial", marginTop: 0 }}>{title}</h2>
      <Link href={url} underline={false} style={{ textDecoration: "none" }}>
      <div className="responsive-container-wide">
        <img style={{ height: 400}} alt="" src={banner} />
        </div>
        <p style={{ color: "initial", marginTop: -50 }}>
          {description}
        </p>
      </Link>
      <Text block variant="medium" style={{ fontWeight: 600 }}>      
            <div key={title} style={{ paddingBottom: 15 }}>
              <ChevronLink href={url} label={title} />
            </div>
      </Text>
      <i>{source}</i> | {published}
    </div>
  );
};

export default NewsCard;
