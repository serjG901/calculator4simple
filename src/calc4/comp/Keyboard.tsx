import React from "react";
import Keybutton from "./molecul/Keybutton";
import { Action, ActionTypes } from "../core/reducer";

type TKeyboard = {
  dispatch: React.Dispatch<Action>;
};

const keys: ActionTypes[] = [
  "C",
  "(",
  ")",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ",",
  "="
];

const styled = {
  display: "grid",
  width: "100%",
  height: "100%",
  grid: "repeat(5, 19%)/repeat(4, 24%)",
  justifyContent: "space-evenly",
  alignContent: "space-evenly",
  background: "var(--keyboard-bg)",
  color: "var(--keyboard-color)"
};

const Keyboard = ({ dispatch }: TKeyboard) => {
  return (
    <div style={styled}>
      {keys.map((type: ActionTypes) => {
        return <Keybutton key={type} type={type} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default React.memo(Keyboard);
