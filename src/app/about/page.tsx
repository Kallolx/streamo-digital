"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  ["Ronok Ekram", "Founder"],
  ["Ferdous Ara", "CEO"],
  ["Kamruzzaman Rabbi", "Consultent"],
  ["Raju Mondol", "Consultent"],
  ["Belal Khan", "Consultent"],
  ["Zahid Ahmed Joy", "Head of operations"],
  ["Jajabor Polash", "Head of marketing"],
  ["Yeasin Arafat", "Distribution Relations"],
  ["Roni Sikdar Jetu", "Artist & label manager"],
  ["Rakib", "Copyright Legal Notice"],
  ["ADV Rayhan Hasan", "Lawyer & Consultents"],
  ["Shahadat Hossain", "Office Assistant"],
];

const achievements = [
  {
    number: "20,000+",
    text: "Music Distributed",
    icon: (
      <img
        src="/icons/music.png"
        alt="icon1"
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
    ),
  },
  {
    number: "500+",
    text: "Artists Signed",
    icon: (
      <img
        src="/icons/guitar.png"
        alt="icon2"
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
    ),
  },
  {
    number: "180+",
    text: "Labels Signed",
    icon: (
      <img
        src="/icons/album.png"
        alt="icon3"
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
    ),
  },
  {
    number: "10+",
    text: "Industry Awards",
    icon: (
      <img
        src="/icons/reward.png"
        alt="icon4"
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="mt-24 text-white ">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <motion.div
          className="relative text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
              What is
            </span>{" "}
            streamo digital?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6">
            Streamo Digital stands out as a leading music distribution platform
            for artists and record labels. Founded in 2021, it prioritizes
            excellence, transparency, and artist empowerment. Known for its fair
            revenue shares and fast delivery, Streamo Digital reliably connects
            music to global audiences, helping artists and labels grow their
            reach and earnings.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              title: "Our Mission",
              text: "We connect music to global audiences using cutting-edge tech, copyright support, royalty tools, and real-time analytics—giving artists full control of their careers.",
            },
            {
              title: "Trusted by Labels",
              text: "Over 130 labels—including Sristy, Lionic, and HM Voice—trust us for 24/7 support, monthly payouts, and growth-driven distribution strategies.",
            },
            {
              title: "Artists We Serve",
              text: "60+ artists including Belal Khan, Raju Mondol, and Baul Akaeid rely on us for revenue growth and transparent performance tracking.",
            },
            {
              title: "Media Recognition",
              text: "Featured in top Desi newspapers, podcasts, and blogs—Streamo is shaping digital music distribution and representing South Asian talent globally.",
            },
          ].map((card, i) => (
            <Card
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/10"
            >
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-200">{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <div>
          <div className=" p-6 sm:p-8 md:p-10 lg:p-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-white text-center">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                Achievements
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {achievement.number}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map(([name, role], index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm shadow-md"
              >
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src={`/images/team/t${index + 1}.png`}
                    alt={name}
                    fill
                    className="object-contain transition duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                  <p className="text-gray-300 text-sm">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
