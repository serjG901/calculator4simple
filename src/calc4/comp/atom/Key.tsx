type TKey = {
  children: string;
};

const styled = (key: string) => {
  switch (key) {
    case "menu":
      return { color: "purple" };
    case "C":
      return { color: "red" };
    case "+":
      return { color: "lime", transform: "scale(1.2)" };
    case "-":
      return { color: "skyblue", transform: "scale(1.5)" };
    case "÷":
      return { color: "yellow", transform: "scale(1.2)" };
    case "×":
      return { color: "orange", transform: "scale(1.2)" };
    case ")":
      return { color: "gray" };
    case "(":
      return { color: "gray" };
    case "=":
      return { color: "purple", transform: "scale(1.2)" };
    default:
      return { color: "inherit" };
  }
};

const Key = ({ children }: TKey) => {
  return <div style={styled(children)}>{children}</div>;
};

export default Key;
