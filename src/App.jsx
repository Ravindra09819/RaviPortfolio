import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import profile from "./assets/profile.png";
import news from "./assets/news.png";
import invoice from "./assets/invoice.png";
import rds from "./assets/rds.png";
import education from "./assets/education.png";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiExpress,
  SiDocker,
} from "react-icons/si";

const projects = [
 {
  title: "News Application",
  desc: "A scalable news platform with authentication, pagination, and real-time API integration for dynamic content updates.",
  image: news,
  github: "https://github.com/your-link",
  live: "#",
  tech: ["react", "node", "express", "mongo", "tailwind"],
},
  {
    title: "Invoice Billing System",
    desc: "Role-based billing system where customers view invoices and CAs manage clients with real-time product APIs.",
    image: "/assets/invoice.png",
    github: "#",
    live: "#",
    tech: ["react", "node", "express", "mongo"],
  },
  {
    title: "Education Management System",
    desc: "Learning & resource management system with email automation and auto certificate generation using Puppeteer.",
    image: education,
    github: "#",
    live: "#",
    tech: ["react", "node", "mongo", "tailwind"],
  },
  {
    title: "RDS Enterprises Website",
    desc: "Responsive housekeeping website with SEO optimization and PHP-based contact form integration.",
    image: rds,
    github: "#",
    live: "https://rdsenterprisespune.com/",
    tech: ["html", "css", "javascript", "php"],
  },
];

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-green-600"  /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-green-600"  /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
];
export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      {/* 🔥 NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <h1 className="text-xl font-bold">Ravindra</h1>

        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="bg-blue-500 px-3 py-1 rounded"
        >
          Toggle
        </button>
      </nav>

      {/* 🔥 HERO */}
  <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20">

  {/* LEFT CONTENT */}
  <div className="max-w-xl">

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Hi, I'm <span className="text-purple-500">Ravindra</span>
    </h1>

    <p className="mt-4 text-lg font-semibold">
      React Developer | Frontend Developer | Backend Developer
    </p>

    <p className="mt-4 text-gray-400">
      I build modern, responsive web applications using React.js, Node.js, and MongoDB.
      I enjoy creating efficient solutions and clean user interfaces.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex gap-4">
      <a
        href="#projects"
        className="bg-purple-600 px-5 py-2 rounded hover:bg-purple-700 transition"
      >
        View Projects
      </a>

      <a
        href="https://drive.google.com/file/d/1sg1AsxNXCIByMjhddG-2tI-Z9V1JvlXp/view?usp=drivesdk"
        download
        className="border border-purple-500 px-5 py-2 rounded hover:bg-purple-500 hover:text-white transition"
      >
        Download Resume
      </a>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="mt-10 md:mt-0 relative">

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-30"></div>

    <img
      src={profile}
      alt="profile"
      className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500"
    />
  </div>

</section>  
    {/* 🔥 PROJECTS */}
     <section id="projects" className="py-16 px-5">
  <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((p, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow overflow-hidden"
      >
        {/* Screenshot */}
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-70 object-cover"
        />

        <div className="p-5">
          {/* Title */}
          <h3 className="text-xl font-bold">{p.title}</h3>

          {/* Description */}
          <p className="text-gray-400 mt-2">{p.desc}</p>

          {/* Tech Icons */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {p.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 px-2 py-1 text-sm rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <a href={p.github} className="bg-gray-700 px-3 py-1 rounded">
              GitHub
            </a>
            <a href={p.live} className="bg-blue-500 px-3 py-1 rounded">
              Live
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

<section id="technologies" className="py-16 px-5 bg-gray-900 "  >
  <h2 className="text-3xl font-bold text-center mb-10">
    Technologies I Use
  </h2>
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
  {techStack.map((tech, i) => (
    <div key={i} className="flex flex-col items-center gap-2">
      <div className="text-4xl">{tech.icon}</div>
      <p className="text-sm">{tech.name}</p>
    </div>
  ))}
</div>

</section>



      {/* 🔥 CONTACT */}
      <section id="contact" className="py-16 px-5 bg-gray-900 text-white">
  <h2 className="text-3xl font-bold text-center mb-10">
    Contact Me
  </h2>

  {(() => {
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
      let err = {};

      if (!form.name) err.name = "Name is required";

      if (!form.email) {
        err.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        err.email = "Invalid email";
      }

      if (!form.message) {
        err.message = "Message is required";
      } else if (form.message.length < 10) {
        err.message = "Minimum 10 characters";
      }

      return err;
    };

    const submit = async (e) => {
      e.preventDefault();

      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      try {
        await axios.post("http://localhost:5000/contact", form);
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } catch {
        alert("Error sending message");
      }
    };

    return (
      <form
        onSubmit={submit}
        className="max-w-lg mx-auto flex flex-col gap-5"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            className="w-full p-3 rounded text-black"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            className="w-full p-3 rounded text-black"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            value={form.message}
            className="w-full p-3 rounded text-black"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
          {errors.message && (
            <p className="text-red-400 text-sm">
              {errors.message}
            </p>
          )}
        </div>

        <button className="bg-blue-500 py-3 rounded hover:bg-green-600">
          Send Message
        </button>
      </form>
    );
  })()}
</section>

      {/* 🔥 FOOTER */}
      <footer className="text-center py-5 bg-gray-800 mt-10">
        © 2026 Ravindra
      </footer>
    </div>
  );
}