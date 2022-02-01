import { State, Action } from "./reducer";
import * as CF from "./clearFuncs";

export const fC = ({ display, journal, ...state }: State) => {
  if (CF.hasRes(display)) {
    display = [];
    return { ...state, display, journal };
  }
  if (!CF.hasItem(display)) {
    if (CF.hasItem(journal)) {
      journal = CF.pop(journal);
    }
    return { ...state, display, journal };
  }
  if (CF.last(display).length === 1) {
    display = CF.pop(display);
  } else {
    display[CF.lastI(display)] = CF.pops(CF.last(display));
  }

  return { ...state, display, journal };
};

export const fR = (
  { display, journal, ...state }: State,
  { type }: Action
): State => {
  if (CF.resNotAllowed(display)) {
    return { ...state, display, journal };
  }
  return { ...state, ...CF.addRes(display, journal, type) };
};

export const fNum = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.hasRes(display) || !CF.hasItem(display)) {
    display = [type];
    return { ...state, display };
  }
  if (CF.last(display) === ")") {
    return { ...state, display };
  }
  if (/[.0-9]|^-\d+/.test(CF.last(display))) {
    display[CF.lastI(display)] = CF.last(display) + type;
    return { ...state, display };
  }
  if (/[-÷+×(]/.test(CF.last(display))) {
    display = CF.push(display, type);
    return { ...state, display };
  }
  return { ...state, display };
};

export const fS = ({ display, ...state }: State, { type }: Action): State => {
  if (
    !CF.hasItem(display) ||
    CF.last(display) === "(" ||
    CF.lastL(display) === ","
  ) {
    return { ...state, display };
  }
  if (/[-÷+×]$/.test(CF.last(display))) {
    display[CF.lastI(display)] = type;
    return { ...state, display };
  }
  if (CF.hasRes(display)) {
    display = [CF.last(display), type];
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};

export const fCS = ({ display, ...state }: State): State => {
  if (/[0-9]/.test(CF.last(display)) && !CF.hasRes(display)) {
    const last: string = CF.last(display);
    display = CF.pop(display);
    if (last && last[0] === "-") display = CF.push(display, last.slice(1));
    if (last && last[0] !== "-") display = CF.push(display, "-" + last);
  }
  return { ...state, display };
};

export const fD = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.lastHasDot(display)) return { ...state, display };
  if (/[0-9]/.test(CF.last(display)) && !CF.hasRes(display)) {
    display[CF.lastI(display)] = CF.last(display) + type;
  }
  return { ...state, display };
};

export const fLS = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.naOpenScope(display)) {
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};

export const fRS = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.naCloseScope(display)) {
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};
