type TCircleBg = {
  xy: [number, number];
  r: number;
  bg?: string;
  speed?: number;
};

const styled = ({ xy, r, speed = 48 }: TCircleBg) => ({
  top: xy[1] - 0.5 * r,
  left: xy[0] - 0.5 * r,
  width: 3 * r,
  height: 3 * r,
  position: "absolute" as "absolute",
  willChange: "transform",
  animation: `clickBg ${(0.2 * r) / speed}s ease`,
  filter: "blur(8px)"
});

const ClickBg = ({ xy, r, bg, speed }: TCircleBg) => {
  return (
    <div style={styled({ xy, r, speed })}>
      <svg
        viewBox={`0 0 ${3 * r} ${3 * r}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          style={{ fill: bg || "var(--circle-cwc-bg)" }}
          cx={1.5 * r}
          cy={1.5 * r}
          r={r}
        />
      </svg>
    </div>
  );
};

export default ClickBg;
