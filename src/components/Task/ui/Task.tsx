import { FC } from "react";
import style from "./Task.module.css";

const Task: FC = () => {
  return (
    <div className={style.Task}>
      <h2 className={style.Title}>Task title goes here</h2>
      <p className={style.Date}>10.03.25 | 10:25am</p>
      <div className={style.Controls}>
        <button className={style.Button}>STP</button>
        <button className={style.Button}>STR</button>
        <button className={style.Button}>COM</button>
      </div>
      <div className={style.Actions}>
        <button className={style.Button}>DEL</button>
        <button className={style.Button}>EDT</button>
      </div>
    </div>
  );
};

export default Task;
