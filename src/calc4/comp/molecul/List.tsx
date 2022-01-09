import StrBlock from "../atom/StrBlock";

type TList = { data: string[] };

const List = ({ data }: TList) => {
  return (
    <div style={{ display: "contents" }}>
      {data.map((s: string, index: number) => {
        return <StrBlock key={s + index}>{s}</StrBlock>;
      })}
    </div>
  );
};

export default List;
