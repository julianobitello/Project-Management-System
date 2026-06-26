import { createContext, useContext } from "react";
import type { ProjectContextType } from "./types";

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function useProjects() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjects must be used within ProjectProvider");
  }

  return context;
}
