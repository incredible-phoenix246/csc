"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, BookOpen, Calendar, User } from "lucide-react";

const journalsData = [
  {
    id: 1,
    title: "Police Academy Journal of Police and Policing (PAJPP)",
    authors: "Dr. James Erhurh, et al.",
    date: "2023-05-15",
    abstract:
      "This study explores innovative approaches to managing tropical diseases in resource-limited settings...",
    link: "/journals/1",
  },
  {
    id: 2,
    title: "Journal 2",
    authors: "Dr. Philip N., Nasfisa Muhd",
    date: "2023-07-22",
    abstract:
      "An examination of the implementation and impact of AI-powered diagnostic tools in rural African healthcare centers...",
    link: "/journals/2",
  },
  {
    id: 3,
    title: "Journal 3",
    authors: "Bashir Gambo, Ado Sule",
    date: "2023-09-10",
    abstract:
      "This paper presents innovative financing models designed to ensure sustainable healthcare provision in developing countries...",
    link: "/journals/3",
  },
  {
    id: 4,
    title: "Journal 4",
    authors: "Ado Sule, Nasfisa Muhd",
    date: "2023-11-05",
    abstract:
      "An analysis of the effectiveness of telemedicine programs in providing healthcare services to remote and underserved populations...",
    link: "/journals/4",
  },
  {
    id: 5,
    title: "Journal 5",
    authors: "Nasfisa Muhd, Dr. Philip N.",
    date: "2024-01-18",
    abstract:
      "This study examines the implementation and benefits of blockchain-based health records systems in improving data security and interoperability...",
    link: "/journals/5",
  },
];

export default function JournalsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJournals = journalsData.filter((journal) =>
    journal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-blue-main mb-8 text-center">
        Published Journals
      </h1>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search journals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-main"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </motion.div>

      <AnimatePresence>
        {filteredJournals.map((journal, index) => (
          <motion.div
            key={journal.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={journal.link} className="block">
              <h2 className="text-2xl font-semibold text-blue-main mb-2">
                {journal.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <User className="mr-2" size={16} />
                <span>{journal.authors}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>{journal.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{journal.abstract}</p>
              <div className="flex items-center text-blue-main hover:text-blue-600 transition-colors duration-300">
                <BookOpen className="mr-2" size={16} />
                <span>Read Full Article</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
