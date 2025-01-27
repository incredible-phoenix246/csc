"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/IMG-20240703-WA0013.jpg?height=400&width=600",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "/IMG-20240703-WA0014.jpg?height=400&width=600",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "/IMG-20240709-WA0042.jpg?height=400&width=600",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "/IMG-20240709-WA0043.jpg?height=400&width=600",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "/IMG-20240709-WA0044.jpg?height=400&width=600",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "/IMG-20240709-WA0045.jpg?height=400&width=600",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "/IMG-20240709-WA0046.jpg?height=400&width=600",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: "/IMG-20240709-WA0047.jpg?height=400&width=600",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    src: "/IMG-20240709-WA0048.jpg?height=400&width=600",
    alt: "Gallery Image 5",
  },
  {
    id: 10,
    src: "/IMG-20240709-WA0049.jpg?height=400&width=600",
    alt: "Gallery Image 6",
  },
  {
    id: 11,
    src: "/IMG-20240709-WA0050.jpg?height=400&width=600",
    alt: "Gallery Image 7",
  },
  {
    id: 12,
    src: "/IMG-20240709-WA0051.jpg?height=400&width=600",
    alt: "Gallery Image 8",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(
    null
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
