import ColorLetter from "../atom/ColorLetter";

type TPaintWord = {
  children: string;
};

const PaintWord = ({ children }: TPaintWord) => (
  <div style={{ display: "contents" }}>
    {children.split("").map((l: string) => (
      <ColorLetter key={l}>{l}</ColorLetter>
    ))}
  </div>
);

export default PaintWord;
