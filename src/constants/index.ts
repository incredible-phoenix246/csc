import { NavbarLinkProps, MembersProps, SidebarProps } from "@/types";
import { Category, type Icon } from "iconsax-react";

const NAV_LINKS: NavbarLinkProps[] = [
  { id: 2, link: "about", label: "About" },
  { id: 3, link: "administraion", label: "administration" },
  { id: 8, link: "programs", label: "Programs" },
  { id: 4, link: "academic", label: "Academic" },
  { id: 5, link: "research", label: "Research" },
  { id: 6, link: "announcements", label: "Announcements" },
  { id: 7, link: "activities", label: "Activities" },
  { id: 10, link: "gallery", label: "gallery" },
];

const members: MembersProps[] = [
  {
    id: 1,
    name: "Dr. Amanda Blake",
    role: "Commandant",
    image: "commandant_4.jpg",
    email: "amanda.blake@example.com",
    qulification: "Ph.D. Educational Leadership",
    bio: "Dr. Blake oversees the institution, ensuring that educational standards are met and continuously improved.",
  },
  {
    id: 2,
    name: "Mr. David Harris",
    role: "Provost",
    image: "",
    email: "david.harris@example.com",
    qulification: "M.Ed. Curriculum Development",
    bio: "Mr. Harris manages the academic programs and policies, working closely with faculty and students.",
  },
  {
    id: 3,
    name: "Mrs. Eleanor Scott",
    role: "Registrar",
    image: "",
    email: "eleanor.scott@example.com",
    qulification: "B.A. in Administration",
    bio: "Mrs. Scott is responsible for student records, registration processes, and maintaining academic data.",
  },
  {
    id: 4,
    name: "Prof. Frank White",
    role: "Dean of Students",
    image: "",
    email: "frank.white@example.com",
    qulification: "Ph.D. Student Affairs",
    bio: "Prof. White oversees student services, including counseling, extracurricular activities, and career services.",
  },
  {
    id: 5,
    name: "Dr. Grace King",
    role: "Director of Admissions",
    image: "",
    email: "grace.king@example.com",
    qulification: "Ed.D. Higher Education Administration",
    bio: "Dr. King leads the admissions office, focusing on recruitment strategies and managing the admissions process.",
  },
  {
    id: 6,
    name: "Mr. Henry Adams",
    role: "Bursar",
    image: "",
    email: "henry.adams@example.com",
    qulification: "M.Sc. Finance",
    bio: "Mr. Adams is in charge of financial operations, including budgeting, accounting, and financial planning.",
  },
];

export { NAV_LINKS, members };
