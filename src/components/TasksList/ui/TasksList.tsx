import { FC, useEffect } from "react";
import style from "./TasksList.module.css";
import { Task } from "../../Task";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { setTasks } from "../../../app/store/tasksSlice";
import { TTask } from "../../../shared/types/types";

const storageKey = "tasks";

const TasksList: FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTasks = localStorage.getItem(storageKey);
    const tasks: TTask[] = storedTasks ? JSON.parse(storedTasks) : [];

    if (tasks.length !== 0) {
      dispatch(setTasks({ tasks }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={style.List}>
      {tasks.length === 0 && (
        <div className={style.Empty}>
          <h2 className={style.Title}>You have no tasks to do!</h2>
        </div>
      )}
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
