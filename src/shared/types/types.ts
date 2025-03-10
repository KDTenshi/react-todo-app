export type TTaskStatus = "idle" | "working" | "completed";

export type TTask = {
  id: string;
  title: string;
  date: number;
  status: TTaskStatus;
};
