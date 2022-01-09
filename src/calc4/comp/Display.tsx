import Journal from "./Journal";
import List from "./molecul/List";

type T = { data: string[]; journal: string[] };

const styled = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  padding: "0.5em",
  background: "var(--display-bg)",
  fontSize: "1em",
  color: "var(--display-font-color)"
};

const Display = ({ data, journal }: T) => {
  return (
    <div style={styled}>
      <Journal data={journal} />
      <List data={data} />
    </div>
  );
};

export default Display;
/*willChange: "transform",
              animation: `result 0.2s ease`
*/
