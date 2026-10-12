
// src/components/Projects.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ExternalLink, ArrowRight, FolderGit2 } from "lucide-react";
import projectsData from "../Data/projectsData";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#0b0e19] px-6 py-24 text-gray-300 sm:py-28"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-medium tracking-wide text-indigo-300">
            <FolderGit2 size={16} />
            MY WORK
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            A selection of projects showcasing my experience in building
            responsive interfaces, full-stack applications, and practical
            web solutions using modern technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-indigo-200/15 bg-gradient-to-br from-[#1b2140]/95 via-[#171b35]/95 to-[#131a2e]/95 shadow-xl shadow-black/10 transition-all duration-300 hover:border-indigo-300/35 hover:shadow-indigo-950/40"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-[#20263f]">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11162b]/70 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#11162b]/80 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur-md">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-300/80">
                  {project.description}
                </p>

                {/* Technology Tags */}
                {project.technologies?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-indigo-200/15 bg-indigo-300/[0.08] px-2.5 py-1.5 text-xs font-medium text-indigo-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200/20 bg-white/[0.04] text-indigo-200 transition hover:border-indigo-300/40 hover:bg-indigo-400/10 hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-indigo-400/15 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.06] to-blue-500/[0.08] px-6 py-7 text-center sm:px-10"
        >
          <p className="text-sm leading-7 text-gray-300 sm:text-base">
            Each project is an opportunity to strengthen my skills,
            solve practical problems, and build better user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;