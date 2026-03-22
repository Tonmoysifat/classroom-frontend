import {Subject} from "@/types";


export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science (CS)",
    department: "Computer Science",
    description:
      "An introductory course covering fundamental concepts of computer science, including algorithms, data structures, and basic programming in Python.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Mathematics II",
    department: "Mathematics",
    description:
      "A continuation of single-variable calculus: techniques of integration, infinite series, parametric equations, and polar coordinates.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG301",
    name: "English Literature",
    department: "English",
    description:
      "A survey of English history from the Norman Conquest to the present, covering political, social, and cultural developments.",
    createdAt: new Date().toISOString(),
  },
];

