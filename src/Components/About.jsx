import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: "⌘",
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and user-friendly interfaces with modern web technologies.",
    },
    {
      icon: "✦",
      title: "Continuous Learning",
      description:
        "Exploring new technologies, improving problem-solving skills, and learning through practical projects.",
    },
    {
      icon: "🌱",
      title: "Nature & Gardening",
      description:
        "Enjoying gardening, farming, and spending time with nature to stay patient, calm, and creative.",
    },
    {
      icon: "📚",
      title: "Reading & Growth",
      description:
        "Reading, discovering new perspectives, and developing a thoughtful approach to learning.",
    },
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0b0e19] px-6 py-24 text-gray-300 sm:py-28"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

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
          <span className="inline-block rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-medium tracking-wide text-indigo-300">
            GET TO KNOW ME
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            A little about my journey, what I love building, and the
            interests that inspire me beyond the screen.
          </p>
        </motion.div>

        {/* ABOUT CONTENT */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT SIDE: INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-xl font-bold text-indigo-300">
                N
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Hello, I'm Nusrat Islam
                </h3>
                <p className="mt-1 text-sm text-indigo-300">
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm leading-8 text-gray-400 sm:text-base">
              <p>
                I'm a passionate{" "}
                <strong className="font-semibold text-gray-200">
                  Frontend Developer and aspiring MERN Stack Developer
                </strong>
                . My programming journey began with curiosity about how
                websites work and how ideas can become interactive digital
                experiences. Since then, I've been developing my skills
                through hands-on projects and continuous learning.
              </p>

              <p>
                I particularly enjoy building{" "}
                <strong className="font-semibold text-gray-200">
                  clean, responsive, and intuitive user interfaces
                </strong>
                . Working with React, JavaScript, and Tailwind CSS allows
                me to combine visual design with logical thinking. My
                foundational knowledge of Node.js and MongoDB also helps
                me understand how frontend and backend systems work
                together.
              </p>

              <p>
                Beyond programming, I enjoy gardening, farming, and
                spending time with nature. I also love reading and
                exploring new ideas. These interests encourage patience,
                curiosity, and a thoughtful approach to solving problems.
              </p>

              <p>
                As an aspiring developer, I'm committed to strengthening
                my technical foundation, building meaningful projects,
                and growing through consistent practice. I value
                simplicity, thoughtful design, and the opportunity to
                turn real problems into useful digital solutions.
              </p>
            </div>

            {/* PERSONAL VALUES */}
            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
              {["Curiosity", "Creativity", "Consistency", "Growth"].map(
                (value) => (
                  <span
                    key={value}
                    className="rounded-full border border-indigo-400/15 bg-indigo-400/[0.06] px-3 py-1.5 text-xs font-medium text-indigo-200 sm:text-sm"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE: INTERESTS & STRENGTHS */}
          <div className="flex flex-col gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/[0.05] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10 text-xl text-indigo-300 transition duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/20">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* MY APPROACH CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl border border-indigo-400/15 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.025] to-violet-500/[0.08] p-5 transition duration-300 hover:border-indigo-400/30 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10 text-xl text-indigo-300">
                  ✨
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    My Approach
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    I believe in consistent learning, thoughtful design,
                    and improving through practical projects. My goal is
                    to create useful digital experiences while growing
                    as a developer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-indigo-400/15 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.05] to-blue-500/[0.08] px-6 py-7 text-center sm:px-10"
        >
          <p className="text-base font-medium leading-8 text-gray-300 sm:text-lg">
            "Always learning, thoughtfully building, and growing one
            project at a time."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;