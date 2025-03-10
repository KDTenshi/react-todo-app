import { FC } from "react";
import "../style/App.css";
import { Task } from "../../components/Task";

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ padding: 50 }}>
        <Task />
      </div>
    </div>
  );
};

export default App;
