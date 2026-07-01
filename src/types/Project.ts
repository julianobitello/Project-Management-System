export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  priority: "low" | "medium" | "high";
};

export type ProjectStatus = "todo" | "doing" | "done";

export type Project = {
  id: number;
  name: string;
  tasks: Task[];
  status: ProjectStatus;
};
