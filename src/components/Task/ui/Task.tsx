import { FC } from "react";
import style from "./Task.module.css";
import { TTask } from "../../../shared/types/types";
import { getDateString } from "../../../shared/utils/getDateString";
import Button from "../../../shared/ui/button/Button";

interface TaskProps {
  task: TTask;
}

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <div className={style.Task}>
      <h2 className={style.Title}>{task.title}</h2>
      <p className={style.Date}>{getDateString(task.date)}</p>
      <div className={style.Controls}>
        <Button color="blue">STP</Button>
        <Button color="blue">STR</Button>
        <Button color="green">COM</Button>
      </div>
      <div className={style.Actions}>
        <Button color="blue">EDT</Button>
        <Button color="red">DEL</Button>
      </div>
    </div>
  );
};

export default Task;
