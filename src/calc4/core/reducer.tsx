import * as RF from "./reducerFuncs";

export type Reducer<S, A> = (prevState: S, action: A) => S;

export type ActionTypes =
  | "journal"
  | "menu"
  | "games"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "="
  | "C"
  | "("
  | ")"
  | "+"
  | "-"
  | "×"
  | "÷"
  | ","
  | "+/-";

export type Action = { type: ActionTypes };

export type State = {
  display: string[];
  journal: string[];
  showJournal: boolean;
  showGame: boolean;
  showMenu: boolean;
};

export const initialState = {
  display: [],
  journal: [],
  showJournal: false,
  showGame: false,
  showMenu: false
};

export const reducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case "journal":
      state.showJournal = !state.showJournal;
      return { ...state };
    case "games":
      state.showGame = !state.showGame;
      return { ...state };
    case "menu":
      state.showMenu = !state.showMenu;
      return { ...state };
    case "C":
      return RF.fC(state);
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return RF.fNum(state, action);
    case "+":
    case "-":
    case "÷":
    case "×":
      return RF.fS(state, action);
    case ")":
      return RF.fRS(state, action);
    case "(":
      return RF.fLS(state, action);
    case ",":
      return RF.fD(state, action);
    case "+/-":
      return RF.fCS(state);
    case "=":
      return RF.fR(state, action);
    default:
      return state;
  }
};
