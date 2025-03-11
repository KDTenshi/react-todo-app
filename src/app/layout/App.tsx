import { FC } from "react";
import "../style/App.css";
import { TasksList } from "../../components/TasksList";
import { TaskForm } from "../../components/TaskForm";

const App: FC = () => {
  return (
    <div className="App">
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default App;
