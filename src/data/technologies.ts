import type { ComponentType } from "react";
import { Tag, Code2, Layout, Cpu, Server, LayoutDashboard, Package, Database } from "lucide-react";

export interface Technology {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export const technologies: Technology[] = [
  { name: "HTML", icon: Tag },
  { name: "CSS", icon: Layout },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Cpu },
  { name: "React", icon: Server },
  { name: "Node.js", icon: LayoutDashboard },
  { name: "PHP", icon: Package },
  { name: "SQL Server", icon: Database },
];
