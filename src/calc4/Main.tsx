import "./styles.css";
import React from "react";
import Display from "./comp/Display";
import Keyboard from "./comp/Keyboard";
import { reducer, initialState, Reducer, State, Action } from "./core/reducer";

const style = (fs?: number) => ({
  width: "100%",
  height: "100%",
  display: "grid",
  grid: "50%/100%",
  fontSize: fs ? `${fs}px` : "var(--key-font-size)"
});

const Main = () => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );
  const [fs, setFs] = React.useState<number>(16);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const { height, width } = ref.current?.getBoundingClientRect() || {
      height: 356,
      width: 356
    };
    const min = height <= width ? height : width;
    setFs(Math.floor(min / 18));
  }, []);
  return (
    <div style={style(fs)} ref={ref}>
      <Display data={state.display} journal={state.journal} />
      <Keyboard dispatch={dispatch} />
    </div>
  );
};

export default Main;
