import React from "react";
import PaintWord from "./molecul/PaintWord";

const styled = {
  color: "gray",
  fontSize: "0.7em",
  userSelect: "none" as "none",
  fontFamily: "monospace"
};

const NameApp = () => {
  return (
    <div style={styled}>
      Calculator 4 <PaintWord>kids</PaintWord>
    </div>
  );
};

export default React.memo(NameApp);
