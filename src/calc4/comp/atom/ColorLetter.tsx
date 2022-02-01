type TColorLetter = {
  children: string;
};

const colors: { [key: string]: string } = {
  k: "yellow",
  i: "orange",
  d: "skyblue",
  s: "lime",
};

const ColorLetter = ({ children }: TColorLetter) => {
  return <span style={{ color: colors[children] }}>{children}</span>;
};

export default ColorLetter;
