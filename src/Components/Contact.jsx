import { motion } from "framer-motion";
import { IoMail, IoLogoWhatsapp, IoLogoLinkedin, IoCall } from "react-icons/io5";

const contactItems = [
  {
    id: 1,
    icon: <IoMail className="text-indigo-400 text-5xl mb-4" />,
    title: "Email",
    link: "mailto:nishinusrat395@gmail.com",
    display: "nishinusrat395@gmail.com",
    color: "hover:text-indigo-400",
  },
  {
    id: 2,
    icon: <IoCall className="text-indigo-400 text-5xl mb-4" />,
    title: "Phone",
    link: "tel:+880 1759797629",
    display: "+880 1759797629",
    color: "hover:text-indigo-400",
  },
  {
    id: 3,
    icon: <IoLogoWhatsapp className="text-green-400 text-5xl mb-4" />,
    title: "WhatsApp",
    link: "https://wa.me/8801759797629",
    display: "+880 1759797629",
    color: "hover:text-green-400",
  },
  {
    id: 4,
    icon: <IoLogoLinkedin className="text-blue-500 text-5xl mb-4" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/nusrat-islam-226b4b3a3",
    display: "linkedin.com/in/nusrat-islam",
    color: "hover:text-blue-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Contact Me
        </motion.h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {contactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl hover:shadow-indigo-500 transform hover:scale-105 transition cursor-pointer flex flex-col items-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${item.color} transition break-words text-center`}
              >
                {item.display}
              </a>
            </motion.div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 border-t border-gray-700 text-center text-gray-400">
        © {new Date().getFullYear()} Nusrat Islam. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;

