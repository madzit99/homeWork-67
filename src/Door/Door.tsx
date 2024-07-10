import { useDispatch, useSelector } from "react-redux";
import { addValue, checkCode, disableButtons, slice } from "./doorSlice";
import { RootState } from "../app/store";
import { useEffect } from "react";

const Door = () => {
  const doorValue = useSelector((state: RootState) => state.door.value);
  const disabled = useSelector((state: RootState) => state.door.disable);
  const checked = useSelector((state: RootState) => state.door.checked);
  const color = useSelector((state: RootState) => state.door.color)
  const numbersButtons = useSelector((state: RootState) => {
    if (state.door.value.length > 0 && state.door.text !== "") {
      return state.door.text;
    } else {
      return state.door.value.replace(/./g, "*");
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (doorValue.length >= 4) {
      dispatch(disableButtons(true));
    } else {
      dispatch(disableButtons(false));
    }
  }, [doorValue]);

  return (
    <div className="d-flex flex-column border w-50 mx-auto">
      <div className={`pt-3 pb-3 text-center mb-2 ${color}`}>{numbersButtons}</div>
      <div className="row justify-content-center mb-3">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("7"))}
            disabled={disabled}
          >
            7
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("8"))}
            disabled={disabled}
          >
            8
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("9"))}
            disabled={disabled}
          >
            9
          </button>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("4"))}
            disabled={disabled}
          >
            4
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("5"))}
            disabled={disabled}
          >
            5
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("6"))}
            disabled={disabled}
          >
            6
          </button>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("1"))}
            disabled={disabled}
          >
            1
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("2"))}
            disabled={disabled}
          >
            2
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("3"))}
            disabled={disabled}
          >
            3
          </button>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(slice())}
            disabled={checked}
          >
            &lt;
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("0"))}
            disabled={disabled}
          >
            0
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(checkCode())}
            disabled={checked}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Door;
