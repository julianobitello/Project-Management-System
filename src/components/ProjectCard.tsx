import TaskItem from "./TaskItem";
import { useProjects } from "../context/ProjectContext";
import type { Project, Task, ProjectStatus } from "../types/Project";

type Props = {
  project: Project;
  handleDragStart: (projectId: number) => void;
};

export default function ProjectCard({ project, handleDragStart }: Props) {
  const { addTaskToProject, deleteProject, updateProjectStatus } = useProjects();

  function handleAddTask(event: React.FormEvent<HTMLFormElement>, projectId: number) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dados = Object.fromEntries(formData.entries());

    const title = String(dados.task).trim();

    if (!title) {
      alert("O título da task não pode ser vazio");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      priority: "medium",
    };

    addTaskToProject(projectId, newTask);
    event.currentTarget.reset();
  }

  return (
    <div
      draggable
      onDragStart={() => handleDragStart(project.id)}
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-200
        cursor-grab
        active:cursor-grabbing
        p-5
        space-y-5
      "
    >
      {/* HEADER */}
      <div className="space-y-2">
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold text-slate-800 break-words">{project.name}</h2>

          <span className="text-xs text-slate-400 font-medium uppercase">#{project.id.toString().slice(-4)}</span>
        </div>

        <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{project.status}</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2">
        <select
          value={project.status}
          onChange={(e) => updateProjectStatus(project.id, e.target.value as ProjectStatus)}
          className="
            flex-1
            border
            border-slate-300
            rounded-lg
            px-3
            py-2
            bg-white
            text-sm
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option value="todo">📋 To Do</option>
          <option value="doing">🚀 Em andamento</option>
          <option value="done">✅ Concluído</option>
        </select>

        <button
          onClick={() => deleteProject(project.id)}
          className="
            bg-red-50
            hover:bg-red-100
            text-red-600
            px-4
            rounded-lg
            transition
            font-medium
          "
        >
          🗑
        </button>
      </div>

      {/* NOVA TASK */}
      <form onSubmit={(e) => handleAddTask(e, project.id)} className="flex gap-2">
        <input
          name="task"
          placeholder="Nova tarefa..."
          className="
            flex-1
            border
            border-slate-300
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <button
          type="submit"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-lg
            px-4
            transition
            font-semibold
          "
        >
          +
        </button>
      </form>

      {/* TASKS */}
      <div className="space-y-3">
        {project.tasks.length === 0 ? (
          <p className="text-center text-sm text-slate-400 py-2">Nenhuma tarefa cadastrada.</p>
        ) : (
          project.tasks.map((task) => <TaskItem key={task.id} task={task} projectId={project.id} />)
        )}
      </div>
    </div>
  );
}
