import { FC, useEffect, useState } from "react";
import style from "./TasksList.module.css";
import { Task } from "../../Task";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { setTasks } from "../../../app/store/tasksSlice";
import { TTask, TTaskStatus } from "../../../shared/types/types";

const storageKey = "tasks";

type Sortings = "default" | "alphabet" | "alphabet_rev" | "date";
type Filters = "all" | TTaskStatus;

type SortFilters = {
  sorting: Sortings;
  filter: Filters;
};

const TasksList: FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const [sortedFilteredTasks, setSortedFilteredTasks] = useState(tasks);
  const [selectedFilter, setSelectedFilter] = useState<SortFilters>({ sorting: "default", filter: "all" });

  useEffect(() => {
    const storedTasks = localStorage.getItem(storageKey);
    const tasks: TTask[] = storedTasks ? JSON.parse(storedTasks) : [];

    if (tasks.length !== 0) {
      dispatch(setTasks({ tasks }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));

    setSortedFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    const { filter, sorting } = selectedFilter;

    const filteredTasks = filter === "all" ? tasks : [...tasks].filter((task) => task.status === filter);

    switch (sorting) {
      case "default":
        setSortedFilteredTasks(filteredTasks);
        break;

      case "alphabet":
        setSortedFilteredTasks([...filteredTasks].sort((a, b) => a.title.localeCompare(b.title)));
        break;

      case "alphabet_rev":
        setSortedFilteredTasks([...filteredTasks].sort((a, b) => b.title.localeCompare(a.title)));
        break;

      case "date":
        setSortedFilteredTasks([...filteredTasks].sort((a, b) => a.date + b.date));
        break;

      default:
        break;
    }
  }, [selectedFilter, tasks]);

  return (
    <div className={style.List}>
      <div className={style.Filters}>
        <div className={style.Filter}>
          <label htmlFor="filters">Filter by:</label>
          <select
            name="filters"
            value={selectedFilter.filter}
            onChange={(e) => setSelectedFilter((prev) => ({ ...prev, filter: e.target.value as Filters }))}
          >
            <option value="all">All</option>
            <option value="idle">Not completed</option>
            <option value="working">Working</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className={style.Filter}>
          <label htmlFor="sortings">Sort by:</label>
          <select
            name="sortings"
            value={selectedFilter.sorting}
            onChange={(e) => setSelectedFilter((prev) => ({ ...prev, sorting: e.target.value as Sortings }))}
          >
            <option value="default">Default</option>
            <option value="alphabet">A-Z</option>
            <option value="alphabet_rev">Z-A</option>
            <option value="date">Date added</option>
          </select>
        </div>
      </div>
      {sortedFilteredTasks.length === 0 && (
        <div className={style.Empty}>
          <h2 className={style.Title}>You have no tasks to do!</h2>
        </div>
      )}
      {sortedFilteredTasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
