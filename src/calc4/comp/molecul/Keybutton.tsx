import ActOnClick from "../atom/ActOnClick";
import KeyDecor from "../decor/KeyDecor";
import { Action, ActionTypes } from "../../core/reducer";

type Tkeybutton = {
  type: ActionTypes;
  dispatch: React.Dispatch<Action>;
};

const Keybutton = ({ type, dispatch }: Tkeybutton) => {
  return (
    <ActOnClick type={type} dispatch={dispatch}>
      <KeyDecor>{type}</KeyDecor>
    </ActOnClick>
  );
};

export default Keybutton;
