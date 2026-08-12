// ─── Skills Data ──────────────────────────────────────────────────────────────

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaUsers,
  FaComments,
  FaPuzzlePiece,
  FaFigma 
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiGithub,
  SiDiscord,
  SiSqlite 
} from 'react-icons/si';

import { 
  TbApi 
} from 'react-icons/tb';

import {
  VscVscode
} from 'react-icons/vsc';

import { 
  BiLogoPostgresql 
} from "react-icons/bi";

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
      { name: 'JavaScript', icon: FaJsSquare, level: 'Advanced' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate' },
      { name: 'React', icon: FaReact, level: 'Advanced' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 'Advanced' },
      { name: 'Express.js', icon: SiExpress, level: 'Advanced' },
      { name: 'PHP', icon: SiPhp, level: 'Intermediate' },
      { name: 'VB.NET', icon: SiDotnet, level: 'Intermediate' },
      { name: 'Python', icon: FaPython, level: 'Intermediate' },
      { name: 'REST API', icon: TbApi, level: 'Advanced' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 'Advanced' },
      { name: 'MySQL', icon: SiMysql, level: 'Intermediate' },
      { name: 'PostgreSQL', icon: BiLogoPostgresql, level: 'Intermediate' },
      { name: 'SQLite', icon: SiSqlite, level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'GitHub', icon: SiGithub, level: 'Advanced' },
      { name: 'VS Code', icon: VscVscode, level: 'Advanced' },
      { name: 'Docker', icon: FaDocker, level: 'Intermediate' },
      { name: 'Figma', icon: FaFigma, level: 'Intermediate' },
      { name: 'Discord', icon: SiDiscord, level: 'Intermediate' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', icon: FaPuzzlePiece, level: 'Advanced' },
      { name: 'Teamwork', icon: FaUsers, level: 'Advanced' },
      { name: 'Communication', icon: FaComments, level: 'Advanced' },
    ],
  },
];