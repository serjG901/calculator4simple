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
    case "=":
      return { color: "purple", margin: "0.25rem" };
    default:
      return { color: "inherit", margin: "0.25rem" };
  }
};

const three = (str: string): string => {
  const i = str.indexOf(",");
  if (i !== -1) {
    const left = str.slice(0, i);
    const right = str.slice(i);
    return (
      left
        .split("")
        .reverse()
        .join("")
        .replace(/(\d{3})(?!-)/g, "$1 ")
        .split("")
        .reverse()
        .join("") + right
    );
  }
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})(?!-)/g, "$1 ")
    .split("")
    .reverse()
    .join("");
};

const StrBlock = ({ children }: TStrBlock) => {
  return (
    <div style={styled(children)}>
      {children.split(" ").map(three).join(" ")}
    </div>
  );
};

export default StrBlock;
