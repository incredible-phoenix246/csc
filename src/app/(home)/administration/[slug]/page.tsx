"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { managementProfiles, servicesOffered } from "./data";

const ProfilePage = () => {
  const { slug } = useParams();
  const profile = managementProfiles[slug as keyof typeof managementProfiles];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-10 p-8"
    >
      <div className="flex flex-col md:flex-row">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-0 md:mr-8"
        >
          <Image
            src={profile.image}
            alt={profile.name}
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-blue-main">
            {profile.name}
          </h1>
          <h2 className="text-2xl text-gray-600 mb-4">{profile.role}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{profile.bio}</p>

          {/* Responsibilities */}
          <h3 className="text-2xl font-semibold mb-3 text-blue-main">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {profile.responsibilities.map((task, index) => (
              <li key={index} className="text-gray-700">
                {task}
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex space-x-4 mb-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center text-blue-main hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="mr-2" size={20} />
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-main hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-main hover:text-blue-600 transition-colors duration-300"
            >
              <Twitter className="mr-2" size={20} />
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-main">
        Services Offered
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {servicesOffered.map((service, index) => (
          <li key={index} className="text-gray-700">
            {service}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProfilePage;
