import { FC } from "react";
import style from "./TasksList.module.css";
import { Task } from "../../Task";
import { useAppSelector } from "../../../app/store/appStore";

const TasksList: FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <div className={style.List}>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
