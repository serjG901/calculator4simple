import { calc } from "./SC";

export const last = (arr: string[] | string): string => {
  return arr[arr.length - 1];
};

export const lastI = (arr: string[] | string): number => {
  return arr.length - 1;
};

export const lastL = (arr: string[]): string => {
  return last(last(arr));
};

export const preLast = (arr: string[]): string => {
  return arr[arr.length - 2];
};

export const hasDot = (s: string) => {
  return s.indexOf(",") === -1 ? false : true;
};

export const lastHasDot = (arr: string[]) => {
  return last(arr).indexOf(",") === -1 ? false : true;
};

export const hasU = (arr: string[]) => {
  return /[0-9]/.test(last(arr)) && preLast(arr) !== "=";
};

export const hasNum = (arr: string[]) => {
  return /[0-9]/.test(last(arr));
};

export const hasRes = (arr: string[]) => {
  return preLast(arr) === "=";
};

export const hasItem = (arr: string[]) => {
  return arr.length !== 0;
};

export const howMatchNeedCloseScope = (arr: string[]) => {
  return arr.reduce(
    (a: number, s: string) => (s === "(" ? a + 1 : s === ")" ? a - 1 : a),
    0
  );
};

export const addIfNeedCloseScope = (display: string[]) => {
  const closeScope: number = howMatchNeedCloseScope(display);
  if (closeScope > 0) {
    display = [...display, ...new Array(closeScope).fill(")")];
  }
  return display;
};

export const resNotAllowed = (display: string[]) => {
  return (
    hasRes(display) || !hasItem(display) || /[-÷+×(,]$/.test(last(display))
  );
};

export const prepareStr = (display: string[]) => {
  return display
    .join("")
    .replace(/,/g, ".")
    .replace(/×/g, "*")
    .replace(/÷/g, "/");
};

const allZero = (str: string) => {
  return str.match(/0/g)?.length === str.length;
};

export const prepareRes = (res: string) => {
  if (allZero(res)) return "0";
  return res
    .replace(/\./g, ",")
    .replace(/\*/g, "×")
    .replace(/\//g, "÷")
    .replace(/^0+(?!,)/, "")
    .replace(/(?<=,\d*)0+$/, "")
    .replace(/,$/, ""); //
};

export const naCloseScope = (display: string[]) => {
  //notAllowedCloseScope
  return (
    /[-÷+×(,]$/.test(last(display)) ||
    hasRes(display) ||
    howMatchNeedCloseScope(display) === 0
  );
};

export const naOpenScope = (display: string[]) => {
  //notAllowedOpenScope
  return /[0-9),]$/.test(last(display)) || hasRes(display);
};

export const push = (display: string[], type: string): string[] => {
  return [...display, type];
};

export const pop = (display: string[]): string[] => {
  return display.slice(0, lastI(display));
};

export const pops = (str: string): string => {
  return str.slice(0, lastI(str));
};

export const addRes = (display: string[], journal: string[], type: string) => {
  display = addIfNeedCloseScope(display);
  const str = prepareStr(display);
  const res = calc(str);
  display = push(display, type);
  display = push(display, prepareRes(res));
  journal = push(journal, display.join(" "));
  return { display, journal };
};
