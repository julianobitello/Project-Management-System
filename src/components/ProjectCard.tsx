import TaskItem from "./TaskItem";
import { useProjects } from "../context/ProjectContext";
import type { Project, Task } from "../types/Project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { addTaskToProject, deleteProject, completeProject } = useProjects();

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
    <div className="bg-white p-4 rounded shadow-sm border space-y-4">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{project.name}</h2>

        <span className="text-sm text-gray-500">{project.status}</span>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2">
        <button
          onClick={() => completeProject(project.id)}
          className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded"
        >
          Concluir
        </button>

        <button onClick={() => deleteProject(project.id)} className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
          Excluir
        </button>
      </div>

      {/* TASK FORM */}
      <form onSubmit={(e) => handleAddTask(e, project.id)} className="flex gap-2">
        <input className="border p-2 w-full rounded" name="task" placeholder="Nova task" />

        <button type="submit" className="bg-blue-500 text-white px-3 rounded">
          +
        </button>
      </form>

      {project.tasks.map((task) => (
        <TaskItem key={task.id} task={task} projectId={project.id} />
      ))}
    </div>
  );
}
