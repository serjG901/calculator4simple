import Key from "../atom/Key";
import TouchWithCircle from "./touchWithCircle";

type TKeyDecor = {
  children: string;
};

const styled = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  cursor: "pointer",
  border: "var(--key-border)",
  borderRadius: "var(--key-border-radius)",
  boxShadow: "var(--key-box-shadow)",
  background: "var(--key-bg)"
};

const KeyDecor = ({ children }: TKeyDecor) => {
  return (
    <div style={styled}>
      <TouchWithCircle>
        <Key>{children}</Key>
      </TouchWithCircle>
    </div>
  );
};

export default KeyDecor;
