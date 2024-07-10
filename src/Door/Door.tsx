import { useDispatch, useSelector } from "react-redux";
import { addValue } from "./doorSlice";
import { RootState } from "../app/store";

const Door = () => {
  const numbersButtons = useSelector((state: RootState) => state.door.value);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column border w-50 mx-auto">
      <div className="pt-3 pb-3 text-center">{numbersButtons}</div>
      <div className="row justify-content-center mb-3">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("7"))}
          >
            7
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("8"))}
          >
            8
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("9"))}
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
          >
            4
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("5"))}
          >
            5
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("6"))}
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
          >
            1
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("2"))}
          >
            2
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("3"))}
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
            onClick={() => dispatch(addValue(""))}
          >
            &lt;
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue("0"))}
          >
            0
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => dispatch(addValue(""))}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Door;
