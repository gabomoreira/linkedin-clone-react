import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("Javascript gave me a job", "Top news - 23099 readers")}
      {newArticle(
        "0 richest in the world doubled their fortunes in the pandemicob",
        "Top news - 8027 readers"
      )}
      {newArticle(
        "Twitter launches function to report fake news in Brazil after pressure",
        "Top news - 19498 readers"
      )}
      {newArticle(
        "App That Downloaded Movies From Netflix And Disney+ Is Banned From GitHub",
        "Top news - 6908 readers"
      )}
      {newArticle(
        "Phil Spencer Says Sony's Game Pass Is 'Inevitable'",
        "Top news - 2095 readers"
      )}
    </div>
  );
};

export default Widgets;
