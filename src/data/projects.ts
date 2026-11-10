import type { ComponentType } from "react";
import { DollarSign, Users as UsersIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  website: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  screenshot: string;
}

export const projects: Project[] = [
  {
    id: "mtcg-finance",
    title: "MTCGS Finance Management System",
    website: "https://finance.mtcgsportal.com",
    description:
      "A finance management system developed to help organisations manage financial workflows, records, and reporting in a structured, usable way. Screenshots, features, and details can be replaced with final project material.",
    icon: DollarSign,
    screenshot: "/mtcgs-finance.png",
  },
  {
    id: "patnubay-portal",
    title: "Patnubay Student Portal",
    website: "https://patnubaystudentportal.info",
    description:
      "A student portal developed to provide students and stakeholders with a practical online space for exploring and accessing portal features. Screenshots, features, and details can be replaced with final project material.",
    icon: UsersIcon,
    screenshot: "/patnubay-portal.png",
  },
];
