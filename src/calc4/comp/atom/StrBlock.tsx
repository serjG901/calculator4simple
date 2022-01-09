type TStrBlock = { children: string };

const styled = (key: string) => {
  switch (key) {
    case "+":
      return { color: "lime", margin: "0.25rem" };
    case "-":
      return { color: "skyblue", margin: "0.25rem" };
    case "÷":
      return { color: "yellow", margin: "0.25rem" };
    case "×":
      return { color: "orange", margin: "0.25rem" };
    case ")":
      return { color: "gray", margin: "0.25rem" };
    case "(":
      return { color: "gray", margin: "0.25rem" };
    case ".":
      return { color: "gray", margin: "0.25rem" };
    case "+/-":
      return { color: "gray", margin: "0.25rem" };
    case "=":
      return { color: "purple", margin: "0.25rem" };
    default:
      return { color: "inherit", margin: "0.25rem" };
  }
};

const StrBlock = ({ children }: TStrBlock) => {
  return <div style={styled(children)}>{children}</div>;
};

export default StrBlock;
