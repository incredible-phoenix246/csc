"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    title:
      "Round table discusion on focus and programmes and strategies for the police academy centre for study of police and policing organised by the center for the study of police and policing Nigeria Police Academy",
    description: "Explore scenic mountain trails",
    image: "/image1.jpg?height=400&width=600",
  },
  //   {
  //     id: 2,
  //     title: "Cooking Class",
  //     description: "Learn to cook gourmet meals",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 3,
  //     title: "Yoga Retreat",
  //     description: "Relax and rejuvenate with yoga",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 4,
  //     title: "Photography Workshop",
  //     description: "Capture stunning landscapes",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 5,
  //     title: "Surfing Lessons",
  //     description: "Ride the waves like a pro",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 6,
  //     title: "Wine Tasting",
  //     description: "Savor exquisite wines",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
];

export default function ActivitiesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Exciting Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredId(activity.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <Link href={`/activities/${activity.id}`}>
              <Card className="h-full overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {activity.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === activity.id ? 1 : 0 }}
                    className="mt-4"
                  >
                    <span className="text-primary">Learn more →</span>
                  </motion.div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
