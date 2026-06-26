export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  priority: "low" | "medium" | "high";
};

export type Project = {
  id: number;
  name: string;
  tasks: Task[];
  status: "pendente" | "em andamento" | "concluído";
};
