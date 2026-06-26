export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-6">Project Board</h2>

      <nav className="flex flex-col gap-3 text-gray-600">
        <button className="text-left hover:text-black">Projetos</button>
        <button className="text-left hover:text-black">Tasks</button>
      </nav>
    </aside>
  );
}
