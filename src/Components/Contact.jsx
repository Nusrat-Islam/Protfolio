
// src/Components/Contact.jsx

import { motion } from "framer-motion";
import {
  IoMail,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoCall,
} from "react-icons/io5";

const contactItems = [
  {
    id: 1,
    icon: IoMail,
    title: "Email",
    description: "For project inquiries and professional communication.",
    link: "mailto:nishinusrat395@gmail.com",
    display: "nishinusrat395@gmail.com",
    color: "text-indigo-300",
    hover: "group-hover:text-indigo-300",
    iconBg: "bg-indigo-400/10",
    borderHover: "hover:border-indigo-300/40",
  },
  {
    id: 2,
    icon: IoCall,
    title: "Phone",
    description: "Feel free to reach out for a direct conversation.",
    link: "tel:+8801759797629",
    display: "+880 1759797629",
    color: "text-blue-300",
    hover: "group-hover:text-blue-300",
    iconBg: "bg-blue-400/10",
    borderHover: "hover:border-blue-300/40",
  },
  {
    id: 3,
    icon: IoLogoWhatsapp,
    title: "WhatsApp",
    description: "Connect with me for a quick message.",
    link: "https://wa.me/8801759797629",
    display: "+880 1759797629",
    color: "text-green-300",
    hover: "group-hover:text-green-300",
    iconBg: "bg-green-400/10",
    borderHover: "hover:border-green-300/40",
  },
  {
    id: 4,
    icon: IoLogoLinkedin,
    title: "LinkedIn",
    description: "Let's connect and grow our professional network.",
    link: "https://www.linkedin.com/in/nusrat-islam-226b4b3a3",
    display: "View LinkedIn Profile",
    color: "text-sky-300",
    hover: "group-hover:text-sky-300",
    iconBg: "bg-sky-400/10",
    borderHover: "hover:border-sky-300/40",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#0b0e19] px-6 py-24 text-gray-300 sm:py-28"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
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
          <span className="inline-block rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-medium tracking-wide text-indigo-300">
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Have a project in mind or want to get in touch? You can reach me
            through any of the following channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                href={item.link}
                target={item.id === 1 || item.id === 2 ? undefined : "_blank"}
                rel={
                  item.id === 1 || item.id === 2
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group flex min-h-[245px] flex-col items-center rounded-3xl border border-indigo-200/15 bg-gradient-to-br from-[#1b2140]/95 via-[#171b35]/95 to-[#131a2e]/95 p-6 text-center shadow-xl shadow-black/10 transition-all duration-300 ${item.borderHover}`}
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.06] ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`text-3xl ${item.color}`} />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold text-white transition-colors ${item.hover}`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                {/* Contact Link */}
                <span
                  className={`mt-auto break-all pt-5 text-sm font-medium ${item.color} transition-colors`}
                >
                  {item.display}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-indigo-400/15 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.06] to-blue-500/[0.08] px-6 py-7 text-center sm:px-10"
        >
          <h3 className="text-lg font-semibold text-white">
            Thank you for visiting my portfolio!
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-400 sm:text-base">
            I appreciate your time and look forward to connecting with you.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 pt-7 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-200">Nusrat Islam</span>.
          All rights reserved.
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Designed and built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
