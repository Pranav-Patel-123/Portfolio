import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact size={80} style={{ color: "#61DAFB" }} /> }, // React blue
  { name: "JavaScript", icon: <FaJs size={80} style={{ color: "#F7DF1E" }} /> }, // JavaScript yellow
  { name: "HTML", icon: <FaHtml5 size={80} style={{ color: "#E44D26" }} /> }, // HTML red
  { name: "CSS", icon: <FaCss3Alt size={80} style={{ color: "#1572B6" }} /> }, // CSS blue
  { name: "Node.js", icon: <FaNodeJs size={80} style={{ color: "#8CC84B" }} /> }, // Node.js green
  { name: "MongoDB", icon: <FaDatabase size={80} style={{ color: "#47A248" }} /> }, // MongoDB green
];

const Skills = () => {
  return (
    <section className="bg-[#0F1113] py-20 flex flex-col items-center">
      <h1 className="text-3xl uppercase font-semibold mb-10 text-center" style={{color:"white"}}>Skills</h1> {/* Centered heading */}
      <div className="grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <div className="text-6xl">{skill.icon}</div> {/* Render the icon */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
