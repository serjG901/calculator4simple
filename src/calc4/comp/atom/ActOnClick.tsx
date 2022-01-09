import { Action, ActionTypes } from "../../core/reducer";

type TAction = {
  type: ActionTypes;
  dispatch: React.Dispatch<Action>;
  children: React.ReactNode;
};

const styled = {
  display: "contents"
};

const ActionOnClick = ({ type, dispatch, children }: TAction) => {
  return (
    <div style={styled} onClick={() => dispatch({ type })}>
      {children}
    </div>
  );
};

export default ActionOnClick;
