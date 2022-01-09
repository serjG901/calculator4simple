import useTouchElement from "./hooks/useTouchElement";
import CircleBg from "./atom/CircleBg";
import Z from "./atom/Z";

type TTouchWithCircle = {
  children: React.ReactNode;
  bg?: string;
};

const styled = {
  width: "100%",
  height: "100%",
  cursor: "pointer",
  position: "relative" as "relative",
  isolation: "isolate" as "isolate",
  userSelect: "none" as "none"
};

const TouchWithCircle = ({ children, bg }: TTouchWithCircle) => {
  const {
    isTouch,
    xy,
    radius,
    ref,
    mouseDown,
    mouseUp,
    touchStart
  } = useTouchElement();

  return (
    <div
      ref={ref}
      style={styled}
      onMouseDown={(e) => mouseDown(e)}
      onMouseLeave={mouseUp}
      onMouseUp={mouseUp}
      onTouchStart={(e) => touchStart(e)}
      onTouchEnd={mouseUp}
    >
      {isTouch && (
        <Z z={0}>
          <CircleBg xy={xy} r={radius} bg={bg} />
        </Z>
      )}
      <Z z={1}>{children}</Z>
    </div>
  );
};

export default TouchWithCircle;
