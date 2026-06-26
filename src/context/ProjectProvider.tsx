import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ProjectContext } from "./ProjectContext";
import type { Project, Task } from "../types/Project";

type Props = {
  children: ReactNode;
};

export function ProjectProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem("projects");
    return stored ? (JSON.parse(stored) as Project[]) : [];
  });

  function createProject(name: string) {
    setProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        tasks: [],
        status: "pendente",
      },
    ]);
  }

  function deleteProject(id: number) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  function completeProject(id: number) {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, status: "concluído" } : p)));
  }

  function addTaskToProject(projectId: number, task: Task) {
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p)));
  }

  function deleteTaskFromProject(projectId: number, taskId: number) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.filter((t) => t.id !== taskId),
            }
          : p,
      ),
    );
  }

  function completeTask(projectId: number, taskId: number) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t)),
            }
          : p,
      ),
    );
  }

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        createProject,
        deleteProject,
        completeProject,
        addTaskToProject,
        deleteTaskFromProject,
        completeTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
