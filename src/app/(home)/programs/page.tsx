"use client";

import React from "react";
import { motion } from "framer-motion";
import { careerPrograms } from "./data";

const ProgramsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-10 p-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-main">
        Career Service Center Programs
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        The Career Service Center offers a variety of programs to assist Cadets
        and Staff in their career development. Here are some of the key programs
        provided:
      </p>

      <div className="space-y-6">
        {careerPrograms.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-main">
              {program.title}
            </h2>
            <p className="text-gray-700 mt-2">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgramsPage;
