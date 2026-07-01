import { useProjects } from "../context/ProjectContext";
import Column from "./Column";
import { useState } from "react";

import type { ProjectStatus } from "../types/Project";

export default function KanbanBoard() {
  const { projects, updateProjectStatus } = useProjects();

  const [draggedProjectId, setDraggedProjectId] = useState<number | null>(null);

  const todoProjects = projects.filter((p) => p.status === "todo");
  const doingProjects = projects.filter((p) => p.status === "doing");
  const doneProjects = projects.filter((p) => p.status === "done");

  function handleDragStart(projectId: number) {
    setDraggedProjectId(projectId);
  }

  function handleDrop(status: ProjectStatus) {
    if (draggedProjectId !== null) {
      updateProjectStatus(draggedProjectId, status);
      setDraggedProjectId(null);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Column
        title="📋 To Do"
        columnStatus="todo"
        projects={todoProjects}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />

      <Column
        title="🚀 Em andamento"
        columnStatus="doing"
        projects={doingProjects}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />

      <Column
        title="✅ Concluído"
        columnStatus="done"
        projects={doneProjects}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
      />
    </section>
  );
}
