type Tz = { z: number; children: React.ReactNode };

const Z = ({ z, children }: Tz): JSX.Element => {
  return (
    <div
      style={{
        zIndex: z,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
      }}
    >
      {children}
    </div>
  );
};

export default Z;
