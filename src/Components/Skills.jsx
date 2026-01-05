import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400 w-12 h-12" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" />, level: 85 },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 w-12 h-12" />, level: 80 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-12 h-12" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-12 h-12" />, level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4">{skill.icon}</div>
              {/* Name */}
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-indigo-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
              {/* Percentage */}
              <motion.span
                className="mt-2 text-sm font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Accent */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.69,22.36,103.79,29.69,158,17,70-16.88,136-61.58,206-68.72,86-9.29,172,16.65,257,35.2C817,56.28,902,75.83,977,64.82c39-6,76-20.71,123-32.25V0Z"
            fill="#111827"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
