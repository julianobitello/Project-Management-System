import type { Project, Task } from "../types/Project";

export type ProjectContextType = {
  projects: Project[];
  createProject: (name: string) => void;
  deleteProject: (id: number) => void;
  completeProject: (id: number) => void;
  addTaskToProject: (projectId: number, task: Task) => void;
  deleteTaskFromProject: (projectId: number, taskId: number) => void;
  completeTask: (projectId: number, taskId: number) => void;
};
