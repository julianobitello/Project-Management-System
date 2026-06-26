import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { ProjectProvider } from "./context/ProjectProvider";

export default function App() {
  return (
    <ProjectProvider>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-6">
          <Home />
        </main>
      </div>
    </ProjectProvider>
  );
}
