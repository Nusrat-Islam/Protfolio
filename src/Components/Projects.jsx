// src/components/Projects.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import projectsData from "../Data/projectsData";


const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500 transition cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button
                  className="px-4 py-2 bg-gradient-to-r bg-indigo-500   hover:bg-indigo-600 rounded-lg text-white transition"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
