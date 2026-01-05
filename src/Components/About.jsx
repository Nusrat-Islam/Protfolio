import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-900 text-gray-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 leading-relaxed"
        >
          <p>
            Hello! I’m <span className="text-indigo-400 font-semibold">Nusrat Islam</span>, 
            a passionate <strong>Frontend Developer</strong> and an aspiring 
            <strong> Junior MERN Stack Developer</strong>. My journey into programming
            began with a strong curiosity about how websites work and how ideas turn into
            real, interactive products on the web.
          </p>

          <p>
            I enjoy building clean, responsive, and user-friendly interfaces using 
            <strong> React and Tailwind CSS</strong>. I love working on the frontend where
            design meets logic, but I also have a foundational understanding of backend
            technologies like <strong>Node.js and MongoDB</strong>, which helps me think
            from a full-stack perspective.
          </p>

          <p>
            Outside of programming, I have a deep interest in <strong>gardening and farming</strong>.
            Spending time with nature helps me stay calm, focused, and patient—qualities that
            also reflect in my approach to problem-solving and development work.
            I also enjoy <strong>reading</strong>, as it allows me to continuously learn,
            gain new perspectives, and improve my analytical thinking.
          </p>

          <p>
            As a fresher developer, I am highly motivated, eager to learn, and committed to
            improving my skills every day. I am excited about working on real-world projects,
            collaborating with others, and growing into a confident professional developer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

