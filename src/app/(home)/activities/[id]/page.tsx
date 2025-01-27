"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock event data
const event = {
  id: 1,
  title: "PROSPECTS AND CHALLENGES OF POLICING IN CONTEMPORARY NIGERIA",
  subtitle:
    "Agenda for the Police Academy Centre for the Study of Police and Policing",
  deliveredAt: {
    title: "ROUND-TABLE DISCUSSION ON FOCUS, PROGRAMMES AND STRATEGIES",
    organization: "POLICE ACADEMY CENTRE FOR STUDY OF POLICE AND POLICING",
    organizer:
      "CENTRE FOR THE STUDY OF POLICE AND POLICING, NIGERIA POLICE ACADEMY WUDIL, KANO",
  },
  speaker: {
    name: "HASHIMU, S. ARGUNGU",
    title: "DIG. RTD mni, psc NPM",
    role: "CHAIRMAN POLICE SERVICE COMMISSION",
  },
  date: "8TH JULY, 2024",
  time: "10:00AM",
  venue:
    "CONFERENCE HALL, USMAN B. ALKALI ICT CENTRE, NIGERIA POLICE ACADEMY, KANO",
  image: "/image1.jpg?height=400&width=600",
};

export default function EventDetailPage() {
  const params = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <Link
          href="/events"
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{event.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">
                {event.subtitle}
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{event.speaker.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.speaker.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {event.speaker.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button size="lg">Register Now</Button>
            </motion.div> */}
          </div>

          <div className="space-y-6">
            <div className="relative h-[300px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Delivered At</h3>
                      <div className="space-y-2">
                        <Badge variant="secondary">
                          {event.deliveredAt.title}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {event.deliveredAt.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {event.deliveredAt.organizer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
