
import { motion } from "framer-motion";
import profile from "../assets/bonna7.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080b16] px-6 pb-16 pt-28 text-white md:pt-24"
    >
      {/* PREMIUM BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(165,180,252,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        {/* Decorative Rings */}
        <div className="absolute right-[10%] top-20 h-40 w-40 rounded-full border border-indigo-400/10 sm:h-64 sm:w-64" />

        <div className="absolute right-[13%] top-28 h-32 w-32 rounded-full border border-blue-400/10 sm:h-52 sm:w-52" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          {/* DESIGNATION */}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-300 shadow-lg shadow-indigo-500/5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            Frontend Developer
          </p>

          {/* HEADING */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Nusrat Islam
            </span>
          </h1>

          {/* SUBTITLE */}
          <h2 className="mt-5 text-lg font-medium leading-relaxed text-gray-300 sm:text-xl">
            Frontend Developer{" "}
            <span className="text-indigo-400">|</span>{" "}
            Junior MERN Stack Developer
          </h2>

          {/* INTRODUCTION */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 md:mx-0">
            I build clean, responsive, and user-friendly web applications
            using React, JavaScript, Tailwind CSS, and Node.js.
            I enjoy transforming ideas into practical digital experiences
            with a focus on usability, performance, and thoughtful design.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">

            {/* RESUME BUTTON */}
            <a
              href="https://drive.google.com/uc?export=download&id=1gly2glkLQuBVNjtG9hKpbpk_fXPhvAZH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Download Resume
              <span aria-hidden="true" className="ml-2 text-lg">
                ↓
              </span>
            </a>

            {/* GITHUB LOGO BUTTON */}
            <a
              href="https://github.com/Nusrat-Islam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              title="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-white/[0.03] text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 1.91 3.29 1.46.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.23-5.08 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* LINKEDIN LOGO BUTTON */}
            <a
              href="https://www.linkedin.com/in/nusrat-islam-226b4b3a3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              title="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 bg-white/[0.03] text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.73H4.96V9.15h2.97v9.58ZM6.45 7.84a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.28 10.89h-2.96v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.47V9.15h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.58 1.98 3.58 4.56v5.25Z" />
              </svg>
            </a>
          </div>

          {/* ACCENT LINE */}
          <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400 md:mx-0" />
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">

            {/* IMAGE GLOW */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-indigo-500/15 blur-3xl"
            />

            {/* OUTER RING */}
            <div className="absolute -inset-4 rounded-full border border-indigo-400/20" />

            {/* INNER RING */}
            <div className="absolute -inset-2 rounded-full border border-violet-400/20" />

            {/* PROFILE IMAGE */}
            <div className="relative rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-blue-500 p-[3px] shadow-2xl shadow-indigo-500/20">
              <div className="rounded-full bg-[#080b16] p-2">
                <img
                  src={profile}
                  alt="Nusrat Islam, Frontend Developer"
                  fetchPriority="high"
                  className="h-56 w-56 rounded-full object-cover object-center sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
              </div>
            </div>

            {/* DECORATIVE DOT */}
            <div
              aria-hidden="true"
              className="absolute right-3 top-8 h-4 w-4 rounded-full border-2 border-[#080b16] bg-indigo-400 shadow-lg shadow-indigo-400/50 sm:right-0"
            />

            {/* FLOATING LABEL */}
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-gray-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10">
              <p className="text-xs text-gray-400">
                Focused on
              </p>
              <p className="mt-1 text-sm font-semibold text-indigo-300">
                Modern Web Development
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
