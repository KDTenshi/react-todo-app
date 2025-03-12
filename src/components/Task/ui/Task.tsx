import { FC } from "react";
import style from "./Task.module.css";
import { TTask, TTaskStatus } from "../../../shared/types/types";
import { getDateString } from "../../../shared/utils/getDateString";
import Button from "../../../shared/ui/button/Button";
import { useAppDispatch } from "../../../app/store/appStore";
import { changeTaskStatus, deleteTask } from "../../../app/store/tasksSlice";
import Icon from "../../../shared/ui/icon/Icon";

interface TaskProps {
  task: TTask;
}

const taskStatuses: { [key in TTaskStatus]: string } = {
  working: "In Progress",
  idle: "Not Completed",
  completed: "Completed",
};

const taskStatusClassNames: { [key in TTaskStatus]: string } = {
  working: style.Blue,
  idle: style.Black,
  completed: style.Green,
};

const Task: FC<TaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const startTask = () => {
    dispatch(changeTaskStatus({ id: task.id, status: "working" }));
  };

  const stopTask = () => {
    dispatch(changeTaskStatus({ id: task.id, status: "idle" }));
  };

  const completeTask = () => {
    dispatch(changeTaskStatus({ id: task.id, status: "completed" }));
  };

  return (
    <div className={style.Task}>
      <h2 className={style.Title}>{task.title}</h2>
      <p className={style.Date}>{getDateString(task.date)}</p>
      <p className={[style.Status, taskStatusClassNames[task.status]].join(" ")}>{taskStatuses[task.status]}</p>
      <div className={style.Controls}>
        {task.status !== "idle" && (
          <Button color="blue" onClick={stopTask} title="Mark as not completed">
            <Icon type={"stop"} />
          </Button>
        )}
        {task.status !== "working" && (
          <Button color="blue" onClick={startTask} title="Mark as in progress">
            <Icon type={"start"} />
          </Button>
        )}
        {task.status !== "completed" && (
          <Button color="green" onClick={completeTask} title="Mark as completed">
            <Icon type={"complete"} />
          </Button>
        )}
      </div>
      <div className={style.Actions}>
        <Button color="blue">
          <Icon type={"edit"} />
        </Button>
        <Button color="red" onClick={() => dispatch(deleteTask({ id: task.id }))} title="Delete">
          <Icon type={"delete"} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
