import { FC, useState } from "react";
import style from "./TaskForm.module.css";
import Button from "../../../shared/ui/button/Button";
import { useAppDispatch } from "../../../app/store/appStore";
import { addTask } from "../../../app/store/tasksSlice";

const TaskForm: FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskTitle = title.trim();

    if (taskTitle) {
      dispatch(addTask({ title: taskTitle }));
    }

    setTitle("");
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={style.Input}
      />
      <Button>Add</Button>
    </form>
  );
};

export default TaskForm;
