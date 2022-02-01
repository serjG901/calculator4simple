import "./styles.css";
import React from "react";
import NameApp from "./comp/NameApp";
import Display from "./comp/Display";
import Keyboard from "./comp/Keyboard";
import { reducer, initialState, Reducer, State, Action } from "./core/reducer";

const style = (fs?: number) => ({
  width: "100%",
  height: "100%",
  display: "grid",
  grid: "5% 50%/100%",
  background: "var(--main-bg)",
  justifyItems: "center",
  alignItems: "center",
  fontSize: fs ? `${fs}px` : "var(--key-font-size)"
});

const Main = () => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );
  const [fs, setFs] = React.useState<number>(16);
  const ref = React.useRef<HTMLDivElement>(null);
  const windowResize = () => {
    const { height, width } = ref.current?.getBoundingClientRect() || {
      height: 356,
      width: 356
    };
    const min = height <= width ? height : width;
    setFs(Math.floor(min / 18));
  };

  React.useEffect(() => {
    windowResize();
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);
  return (
    <div className="main" style={style(fs)} ref={ref}>
      <NameApp />
      <Display data={state.display} journal={state.journal} />
      <Keyboard dispatch={dispatch} />
    </div>
  );
};

export default Main;
