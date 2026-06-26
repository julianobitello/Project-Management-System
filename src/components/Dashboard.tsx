import ProjectCard from "./ProjectCard";
import { useProjects } from "../context/ProjectContext";

export default function Dashboard() {
  const { projects, createProject } = useProjects();

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
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Meus Projetos</h1>

      <form className="flex gap-2" onSubmit={handleSubmitFormData}>
        <input className="border p-2 rounded w-full" type="text" name="name" placeholder="Nome do projeto" />

        <button className="bg-black text-white px-4 rounded">Criar</button>
      </form>

      <p className="text-gray-500">Total: {projects.length}</p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
