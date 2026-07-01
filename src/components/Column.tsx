import ProjectCard from "./ProjectCard";
import type { Project, ProjectStatus } from "../types/Project";

type Props = {
  title: string;
  columnStatus: ProjectStatus;
  projects: Project[];
  handleDragStart: (projectId: number) => void;
  handleDrop: (status: ProjectStatus) => void;
};

export default function Column({ title, columnStatus, projects, handleDragStart, handleDrop }: Props) {
  return (
    <div
      className="
        bg-slate-200/70
        backdrop-blur-sm
        rounded-2xl
        border
        border-slate-300
        p-4
        min-h-[650px]
        transition
        duration-200
      "
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(columnStatus)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>

        <span
          className="
            bg-white
            text-slate-600
            text-sm
            font-semibold
            px-3
            py-1
            rounded-full
            shadow-sm
          "
        >
          {projects.length}
        </span>
      </div>

      {/* Lista */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <div
            className="
              flex
              items-center
              justify-center
              h-32
              rounded-xl
              border-2
              border-dashed
              border-slate-300
              text-slate-400
              text-sm
            "
          >
            Arraste um projeto para esta coluna
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} handleDragStart={handleDragStart} />
          ))
        )}
      </div>
    </div>
  );
}
