import type { Task } from "../types/Project";
import { useProjects } from "../context/ProjectContext";

type TaskItemProps = {
  projectId: number;
  task: Task;
};

export default function TaskItem({ projectId, task }: TaskItemProps) {
  const { deleteTaskFromProject, completeTask } = useProjects();

  return (
    <div
      className="
        flex
        items-center
        justify-between
        bg-slate-50
        border
        border-slate-200
        rounded-xl
        px-3
        py-3
        hover:bg-slate-100
        hover:border-slate-300
        transition-all
      "
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => completeTask(projectId, task.id)}
          className="
            w-5
            h-5
            accent-blue-600
            cursor-pointer
          "
        />

        <p className={`flex-1 ${task.completed ? "line-through text-slate-400" : "text-slate-700 font-medium"}`}>
          {task.title}
        </p>
      </div>

      <button
        onClick={() => deleteTaskFromProject(projectId, task.id)}
        className="
          ml-3
          text-red-500
          hover:text-red-700
          hover:bg-red-50
          rounded-lg
          px-2
          py-1
          transition
        "
      >
        🗑
      </button>
    </div>
  );
}
