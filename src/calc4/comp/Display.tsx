import Journal from "./Journal";
import List from "./molecul/List";

type T = { data: string[]; journal: string[] };

const styled = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  width: "98%",
  height: "98%",
  overflow: "hidden",
  padding: "0.5em",
  background: "var(--display-bg)",
  fontSize: "1em",
  color: "var(--display-font-color)",
  border: "var(--display-border)",
  borderRadius: "var(--display-border-radius)",
  boxShadow: "var(--display-box-shadow)"
};

const Display = ({ data, journal }: T) => {
  return (
    <div style={styled}>
      {journal.length ? <Journal data={journal} /> : null}
      {data.length ? <List data={data} /> : null}
    </div>
  );
};

export default Display;
