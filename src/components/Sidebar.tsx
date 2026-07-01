export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col justify-between p-6 shadow-xl">
      {/* Logo */}
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">📊 PMS</h1>

          <p className="mt-2 text-sm text-slate-400">Project Management System</p>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-left">
            📁 Projetos
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition text-left">
            ✅ Tarefas
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition text-left">
            📊 Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition text-left">
            ⚙️ Configurações
          </button>
        </nav>
      </div>

      {/* Rodapé */}
      <div className="border-t border-slate-700 pt-5">
        <p className="text-sm text-slate-400">Desenvolvido por</p>

        <h3 className="mt-1 font-semibold">Juliano Bitello</h3>

        <p className="mt-2 text-xs text-slate-500">React • TypeScript • TailwindCSS</p>
      </div>
    </aside>
  );
}
