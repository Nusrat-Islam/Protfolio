// src/components/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import projectsData from "../Data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === parseInt(id));
  if (!project) return <p className="text-white text-center mt-20">Project not found!</p>;

  return (
    <section className="py-24 bg-gray-900 text-gray-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition"
        >
          &larr; Back
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          {project.name}
        </motion.h2>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
        />

        <p className="text-gray-400 mb-2"><strong>Technology Stack:</strong> {project.techStack}</p>
        <p className="text-gray-400 mb-2"><strong>Description:</strong> {project.description}</p>
        <p className="text-gray-400 mb-2"><strong>Challenges Faced:</strong> {project.challenges}</p>
        <p className="text-gray-400 mb-4"><strong>Future Improvements:</strong> {project.improvements}</p>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="px-4 py-2  bg-indigo-500  hover:bg-indigo-500 rounded-lg text-white transition"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            className="px-4 py-2 border border-gray-600 hover:border-indigo-400 rounded-lg text-white transition"
          >
            GitHub Client
          </a>
          <a
            href={project.githubServer}
            target="_blank"
            className="px-4 py-2 border border-gray-600 hover:border-indigo-400 rounded-lg text-white transition"
          >
            GitHub Server
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
