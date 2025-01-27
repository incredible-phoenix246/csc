"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import Link from "next/link";
const journalsData = [
  {
    id: 1,
    title: "Police Academy Journal of Police and Policing (PAJPP)",
    authors: "Dr. James Erhurh, et al.",
    date: "2023-05-15",
    abstract:
      "This study explores innovative approaches to managing tropical diseases in resource-limited settings...",
    content: `
      <h2>Introduction</h2>
      <p>Tropical diseases continue to pose significant challenges to healthcare systems in developing countries...</p>
      <h2>Methodology</h2>
      <p>We conducted a comprehensive review of recent advancements...</p>
      <h2>Results</h2>
      <p>Our findings indicate that a combination of community-based interventions...</p>
      <h2>Discussion</h2>
      <p>The results of this study highlight the importance of tailored approaches...</p>
      <h2>Conclusion</h2>
      <p>This research provides valuable insights into effective strategies...</p>
    `,
  },
  {
    id: 2,
    title: "AI-Driven Diagnostics in Rural Healthcare",
    authors: "Dr. Philip N., Nasfisa Muhd",
    date: "2023-07-22",
    abstract:
      "An examination of the implementation and impact of AI-powered diagnostic tools in rural African healthcare centers...",
    content: `
      <h2>Introduction</h2>
      <p>AI-driven diagnostics are transforming healthcare delivery in rural areas...</p>
      <h2>Methodology</h2>
      <p>This study involved case studies from various healthcare centers...</p>
      <h2>Results</h2>
      <p>Results indicated improved diagnostic accuracy and reduced waiting times...</p>
      <h2>Discussion</h2>
      <p>The implications of AI in rural healthcare suggest a significant shift...</p>
      <h2>Conclusion</h2>
      <p>Adopting AI technologies could bridge the healthcare gap in rural regions...</p>
    `,
  },
  {
    id: 3,
    title: "Sustainable Financing Models for Healthcare in Developing Nations",
    authors: "Bashir Gambo, Ado Sule",
    date: "2023-09-10",
    abstract:
      "This paper presents innovative financing models designed to ensure sustainable healthcare provision in developing countries...",
    content: `
      <h2>Introduction</h2>
      <p>Access to healthcare services in developing nations is often hindered by financial constraints...</p>
      <h2>Methodology</h2>
      <p>We analyzed various financing models across several countries...</p>
      <h2>Results</h2>
      <p>Our findings show that micro-financing and public-private partnerships can enhance healthcare access...</p>
      <h2>Discussion</h2>
      <p>These models can be tailored to local contexts to ensure sustainability...</p>
      <h2>Conclusion</h2>
      <p>This research highlights the importance of innovative financing in health systems...</p>
    `,
  },
  {
    id: 4,
    title: "Telemedicine: Bridging the Healthcare Gap in Remote Areas",
    authors: "Ado Sule, Nasfisa Muhd",
    date: "2023-11-05",
    abstract:
      "An analysis of the effectiveness of telemedicine programs in providing healthcare services to remote and underserved populations...",
    content: `
      <h2>Introduction</h2>
      <p>Telemedicine has emerged as a crucial solution for healthcare delivery in remote areas...</p>
      <h2>Methodology</h2>
      <p>This study surveyed telemedicine initiatives across several regions...</p>
      <h2>Results</h2>
      <p>The results indicate that telemedicine significantly improves patient access...</p>
      <h2>Discussion</h2>
      <p>Challenges such as internet connectivity and training need to be addressed...</p>
      <h2>Conclusion</h2>
      <p>Telemedicine can play a vital role in improving health outcomes...</p>
    `,
  },
  {
    id: 5,
    title: "Blockchain Technology in Health Records Management",
    authors: "Nasfisa Muhd, Dr. Philip N.",
    date: "2024-01-18",
    abstract:
      "This study examines the implementation and benefits of blockchain-based health records systems in improving data security and interoperability...",
    content: `
      <h2>Introduction</h2>
      <p>Blockchain technology presents a revolutionary approach to health records management...</p>
      <h2>Methodology</h2>
      <p>We conducted a review of existing literature and case studies...</p>
      <h2>Results</h2>
      <p>Our findings reveal that blockchain can enhance data security and patient privacy...</p>
      <h2>Discussion</h2>
      <p>Adopting blockchain technology may also facilitate interoperability among different systems...</p>
      <h2>Conclusion</h2>
      <p>This research underscores the potential of blockchain in transforming health records management...</p>
    `,
  },
];

export default function JournalPage() {
  const { id } = useParams();
  const journal = journalsData.find((j) => j.id === parseInt(id as string));

  if (!journal) {
    return <div>Journal not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <Link
        href="/journals"
        className="inline-flex items-center text-blue-main hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Journals
      </Link>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-blue-main mb-4"
      >
        {journal.title}
      </motion.h1>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center text-gray-600 mb-2"
      >
        <User className="mr-2" size={16} />
        <span>{journal.authors}</span>
      </motion.div>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center text-gray-600 mb-6"
      >
        <Calendar className="mr-2" size={16} />
        <span>{journal.date}</span>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold text-blue-main mb-4">Abstract</h2>
        <p className="text-gray-700 mb-4">{journal.abstract}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-blue-main mb-4">
          Full Article
        </h2>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: journal.content }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center bg-blue-main text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <BookOpen className="mr-2" size={20} />
          Download PDF
        </a>
      </motion.div>
    </motion.div>
  );
}
