import { FC } from "react";
import "../style/App.css";
import { Task } from "../../components/Task";
import { TTask } from "../../shared/types/types";

const App: FC = () => {
  const tasks: TTask[] = [
    { id: "01", title: "Task 1", status: "idle", date: Date.now() },
    { id: "02", title: "Task 2", status: "idle", date: Date.now() },
    { id: "03", title: "Task 3", status: "idle", date: Date.now() },
    { id: "04", title: "Task 4", status: "idle", date: Date.now() },
  ];
  return (
    <div className="App">
      <div style={{ padding: 50 }}>
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
