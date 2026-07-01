import { useProjects } from "../context/ProjectContext";
import KanbanBoard from "./KanbanBoard";

export default function Dashboard() {
  const { projects, createProject } = useProjects();

  const todoProjects = projects.filter((p) => p.status === "todo");
  const doingProjects = projects.filter((p) => p.status === "doing");
  const doneProjects = projects.filter((p) => p.status === "done");

  const handleSubmitFormData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dados = Object.fromEntries(formData.entries());

    const name = String(dados.name).trim();

    if (!name) {
      alert("O nome do projeto não pode ser vazio");
      return;
    }

    createProject(name);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800">📊 Project Management System</h1>

          <p className="mt-2 text-slate-500">Organize seus projetos utilizando um quadro Kanban.</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition">
            <p className="text-sm text-slate-500">Total</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">{projects.length}</h2>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition">
            <p className="text-sm text-yellow-600 font-medium">To Do</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">{todoProjects.length}</h2>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition">
            <p className="text-sm text-blue-600 font-medium">Em andamento</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">{doingProjects.length}</h2>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition">
            <p className="text-sm text-green-600 font-medium">Concluídos</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-800">{doneProjects.length}</h2>
          </div>
        </div>

        {/* NOVO PROJETO */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-5">Novo Projeto</h2>

          <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmitFormData}>
            <input
              className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              name="name"
              placeholder="Digite o nome do projeto..."
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg"
              type="submit"
            >
              Criar Projeto
            </button>
          </form>
        </div>

        {/* KANBAN */}
        <KanbanBoard />
      </div>
    </div>
  );
}
