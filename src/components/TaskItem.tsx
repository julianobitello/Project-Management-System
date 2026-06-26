import type { Task } from "../types/Project";
import { useProjects } from "../context/ProjectContext";

type TaskItemProps = {
  projectId: number;
  task: Task;
};

export default function TaskItem({ projectId, task }: TaskItemProps) {
  const { deleteTaskFromProject, completeTask } = useProjects();

  return (
    <div className="flex items-center justify-between border rounded p-2 hover:bg-gray-50 transition">
      <p className={task.completed ? "line-through text-gray-400" : ""}>{task.title}</p>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={task.completed}
          onChange={() => completeTask(projectId, task.id)}
        />

        <button
          onClick={() => deleteTaskFromProject(projectId, task.id)}
          className="text-red-500 text-sm hover:opacity-70"
        >
          x
        </button>
      </div>
    </div>
  );
}
