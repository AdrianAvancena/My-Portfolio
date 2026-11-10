import type { ComponentType } from "react";
import {
  GraduationCap,
  Users,
  DollarSign,
  FolderOpen,
  Calendar,
  Package,
  Code2,
  Database,
} from "lucide-react";

export interface Service {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "student-portal",
    icon: GraduationCap,
    title: "Student Portal Development",
    description:
      "A dedicated online portal where students can view schedules, assignments, attendance, and academic progress in one place.",
  },
  {
    id: "student-information-systems",
    icon: Users,
    title: "Student Information Systems",
    description:
      "Centralised systems that store and manage student records, profiles, grades, and important academic documents securely.",
  },
  {
    id: "finance-management-systems",
    icon: DollarSign,
    title: "Finance Management Systems",
    description:
      "Management systems that help organisations track income, expenses, budgets, and financial reporting with ease.",
  },
  {
    id: "information-management-systems",
    icon: FolderOpen,
    title: "Information Management Systems",
    description:
      "Systems for storing, organising, and retrieving documents and records efficiently across teams or institutions.",
  },
  {
    id: "booking-reservation-systems",
    icon: Calendar,
    title: "Booking and Reservation Systems",
    description:
      "Online booking systems that allow students, parents, or clients to reserve appointments, rooms, or services effortlessly.",
  },
  {
    id: "inventory-management-systems",
    icon: Package,
    title: "Inventory Management Systems",
    description:
      "Systems that keep track of stock, supplies, and equipment, helping schools or businesses manage inventory accurately.",
  },
  {
    id: "custom-web-application-development",
    icon: Code2,
    title: "Custom Web Application Development",
    description:
      "Tailored web applications built to match each client's exact workflows, processes, and goals.",
  },
  {
    id: "database-backend-development",
    icon: Database,
    title: "Database and Backend Development",
    description:
      "Reliable database and backend development to keep applications fast, secure, and scalable.",
  },
];
