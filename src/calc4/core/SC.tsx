class SC {
  static regExpScope: RegExp = /\([^()]+\)/g;

  static regExpNumAndSym: RegExp = /^-?\d+(\.\d+)?|(?<=[^\d])-?\d+(\.\d+)?|\+|-|\*|\//g;

  static regExpMD: RegExp = /\*|\//;
  static regExpSimpleMD: RegExp = /(-?(\d+\.\d+)|-?\d+)\s*(\*|\/){1}\s*(-?(\d+\.\d+)|-?\d+)/;

  static regExpSD: RegExp = /\+|-/;
  static regExpSimpleSD: RegExp = /(-?(\d+\.\d+)|-?\d+)\s*(\+|-){1}\s*(-?(\d+\.\d+)|-?\d+)/;

  static getCalcArr = (exp: string): string[] => {
    return Array.from(exp.match(SC.regExpNumAndSym) || [""]);
  };

  static toNumber = (n: string) => {
    return n.includes(".") ? parseFloat(n) : parseInt(n, 10);
  };

  static sum = (a: number, b: number): number => a + b;
  static dif = (a: number, b: number): number => a - b;
  static mul = (a: number, b: number): number => a * b;
  static div = (a: number, b: number): number => a / b;

  static simbolCase = (a: string, b: string, sim: string): string => {
    const aN: number = SC.toNumber(a);
    const bN: number = SC.toNumber(b);
    let output: number = 0;
    switch (sim) {
      case "+":
        output = SC.sum(aN, bN);
        break;
      case "-":
        output = SC.dif(aN, bN);
        break;
      case "*":
        output = SC.mul(aN, bN);
        break;
      case "/":
        output = SC.div(aN, bN);
        break;
    }
    return `${output}`;
  };

  static getNotScope = (stringWithScope: string): string => {
    if (!SC.regExpScope.test(stringWithScope)) return stringWithScope;
    let stringNotScope: string = stringWithScope.replace(
      SC.regExpScope,
      (scope: string): string => {
        let scopeArr: string[] = SC.getCalcArr(scope);
        return scopeArr.length === 1
          ? scopeArr[0]
          : SC.calculateSimple(scopeArr.join(""));
      }
    );
    return SC.getNotScope(stringNotScope);
  };

  static simpleMD = (exp: string): string => {
    let calc: string = "";
    if (SC.regExpMD.test(exp)) {
      calc = exp.replace(SC.regExpSimpleMD, (simpleExp: string) => {
        let calcArr = SC.getCalcArr(simpleExp);
        return SC.simbolCase(calcArr[0], calcArr[2], calcArr[1]);
      });
    } else {
      return exp;
    }
    return SC.simpleMD(calc);
  };

  static simpleSD = (exp: string): string => {
    if (SC.getCalcArr(exp).length === 1) return exp;
    let calc: string = "";
    if (SC.regExpSD.test(exp)) {
      calc = (calc ? calc : exp).replace(
        SC.regExpSimpleSD,
        (simpleExp: string) => {
          let calcArr = SC.getCalcArr(simpleExp);
          return SC.simbolCase(calcArr[0], calcArr[2], calcArr[1]);
        }
      );
    } else {
      return exp;
    }
    return SC.simpleSD(calc);
  };

  static simpleMinus = (exp: string): string => {
    return exp
      .replace(/\/--/g, "/")
      .replace(/\*--/g, "*")
      .replace(/^--/g, "")
      .replace(/[^\d]--/g, "")
      .replace(/(\d)--/g, "$1+")
      .replace(/\s/g, "");
  };

  static calculateSimple = (exp: string): string => {
    let calc: string = "";
    calc = SC.simpleMinus(exp);
    calc = SC.simpleMD(calc);
    calc = SC.simpleSD(calc);
    return calc;
  };

  static calcString = (expression: string): string => {
    if (SC.getCalcArr(expression).length === 1)
      return SC.getCalcArr(expression)[0];
    let cutExpression = SC.calculateSimple(SC.getNotScope(expression));
    return SC.calcString(cutExpression);
  };

  static calcNumber = (expression: string): number => {
    return SC.toNumber(SC.calcString(expression));
  };
}

export function calc(expression: string): string {
  let output: string = "0";
  try {
    output = SC.calcString(expression);
  } catch (e) {
    return expression;
  }
  return output;
}
