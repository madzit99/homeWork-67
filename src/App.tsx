import Door from "./Door/Door";

const App = () => {

  return (
    <div className="row">
      <div className="col-6">
        <h2 className="text-center">Дверь</h2>
        <Door/>
      </div>
      <div className="col-6">
        <h2 className="text-center">Калькулятор</h2>
      </div>
    </div>
  );
}

export default App
