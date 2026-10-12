import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiReactrouter,
  SiAxios,
  SiVite,
  SiStripe,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "React Router", icon: SiReactrouter, color: "text-pink-400" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Developing APIs and connecting applications with databases.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-200" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Axios", icon: SiAxios, color: "text-violet-400" },
    ],
  },
  {
    title: "Authentication & Payments",
    description: "Integrating user authentication and payment functionality.",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "Stripe", icon: SiStripe, color: "text-violet-400" },
    ],
  },
  {
    title: "Development Tools",
    description: "Managing code and building modern web applications.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
      { name: "Vite", icon: SiVite, color: "text-violet-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#0b0e19] px-6 py-24 text-gray-300 sm:py-28"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(165,180,252,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-indigo-400/25 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 px-4 py-2 text-sm font-medium tracking-wide text-indigo-300">
            MY TECHNICAL TOOLKIT
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Technologies and tools I have used to build web projects
            and develop full-stack applications.
          </p>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
              className="rounded-3xl border border-indigo-300/15 bg-gradient-to-br from-[#1b2140]/95 via-[#171b35]/95 to-[#131a2e]/95 p-6 shadow-xl shadow-indigo-950/20 backdrop-blur-md transition-all duration-300 hover:border-indigo-300/25 sm:p-8"
            >
              {/* CATEGORY HEADING */}
              <div className="mb-7">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300/80">
                  {group.description}
                </p>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-indigo-400/50 via-violet-400/20 to-transparent" />
              </div>

              {/* SKILL CARDS */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group flex min-h-[110px] items-center gap-3 rounded-2xl border border-indigo-200/15 bg-gradient-to-br from-[#30385c]/75 via-[#252d4b]/75 to-[#20263f]/75 p-4 shadow-md shadow-black/5 transition-all duration-300 hover:border-violet-300/40 hover:from-[#39416b]/90 hover:via-[#2d3459]/90 hover:to-[#252e4b]/90 hover:shadow-lg hover:shadow-indigo-500/10 sm:min-h-[120px] sm:flex-col sm:justify-center sm:gap-3 sm:p-5"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-indigo-300/[0.06] transition duration-300 group-hover:scale-110 group-hover:border-violet-300/30 group-hover:shadow-md group-hover:shadow-indigo-500/10 sm:h-14 sm:w-14 ${skill.color}`}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>

                      <h4 className="text-sm font-medium leading-5 text-gray-100 transition-colors group-hover:text-white sm:text-center sm:text-base">
                        {skill.name}
                      </h4>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-blue-500/15 px-6 py-6 text-center shadow-lg shadow-indigo-950/10 sm:px-10"
        >
          <p className="text-sm leading-7 text-gray-200 sm:text-base">
            Continuously improving my skills through hands-on development
            and practical project experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
