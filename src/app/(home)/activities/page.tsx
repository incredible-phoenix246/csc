"use client";

import React from "react";
import { motion } from "framer-motion";
import { careerActivities } from "./activities";

const ActivitiesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-10 p-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-blue-main">
        Career Service Center Activities
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        The Career Service Center offers a variety of activities and resources
        to support Cadets and Staff in navigating their career paths. Below are
        some of the key activities available:
      </p>

      <div className="space-y-6">
        {careerActivities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-main">
              {activity.title}
            </h2>
            <p className="text-gray-700 mt-2">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivitiesPage;
