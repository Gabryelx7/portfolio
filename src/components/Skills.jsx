import JavaScriptIcon from "@/assets/js.svg";
import HTMLIcon from "@/assets/html.svg";
import CSSIcon from "@/assets/css.svg";
import PythonIcon from "@/assets/python.svg";
import CppIcon from "@/assets/cpp.svg";
import MySQLIcon from "@/assets/mysql.svg";
import PostgreSQLIcon from "@/assets/pgsql.svg";
import ReactIcon from "@/assets/react.svg";
import TailwindIcon from "@/assets/tailwind.svg";
import DjangoIcon from "@/assets/django.svg";
import GitIcon from "@/assets/git.svg";
import LinuxIcon from "@/assets/linux.svg";
import { cn } from "@/lib/utils";

const skills = [
   {
      name: "JavaScript",
      icon: JavaScriptIcon,
   },
   {
      name: "HTML",
      icon: HTMLIcon,
   },
   {
      name: "CSS",
      icon: CSSIcon,
   },
   {
      name: "Python",
      icon: PythonIcon,
   },
   {
      name: "C++",
      icon: CppIcon,
   },
   {
      name: "MySQL",
      icon: MySQLIcon,
   },
   {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
   },
   {
      name: "React",
      icon: ReactIcon,
   },
   {
      name: "Tailwind",
      icon: TailwindIcon,
   },
   {
      name: "Django",
      icon: DjangoIcon,
   },
   {
      name: "Git",
      icon: GitIcon,
   },
   {
      name: "Linux",
      icon: LinuxIcon,
   },
];

export const Skills = () => {
   return (
      <section id="skills" className="py-24 px-4 relative">
         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My <span className="text-primary"> Skills </span>
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 container">
            {skills.map(skill => (
               <div className={cn("gradient-border card-hover bg-primary/10 flex flex-col items-center",
                  "justify-center py-4 dark:bg-deep")}
                  key={skill.name}
               >
                  <span className="mb-2 font-semibold">{skill.name}</span>
                  <img src={skill.icon} alt={skill.name} height={70} width={70} className="mx-auto" />
               </div>
            ))}
         </div>
      </section>
   );
};
