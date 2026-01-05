import { motion } from "framer-motion"
import profile from "../assets/bonna7.jpeg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-6 md:flex md:flex-row flex flex-col-reverse gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-indigo-400">Nusrat Islam</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Frontend Developer | Junior MERN Stack Developer
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            I build clean, responsive, and user-friendly web applications using
            modern technologies like React, Tailwind, and Node.js.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1gly2glkLQuBVNjtG9hKpbpk_fXPhvAZH/view?usp=sharing"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition shadow-lg"
              download
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Nusrat-Islam"
              target="_blank"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-indigo-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nusrat-islam-226b4b3a3"
              target="_blank"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-indigo-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-500 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero


