"use client";
import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ronok Ekram",
    role: "Founder",
    image: "/images/team/t1.png",
  },
  {
    name: "Ferdous Ara",
    role: "CEO",
    image: "/images/team/t2.png",
  },
  {
    name: "Kamruzzaman Rabbi",
    role: "Consultent",
    image: "/images/team/t3.png",
  },
  {
    name: "Raju Mondol",
    role: "Consultent",
    image: "/images/team/t4.png",
  },
  {
    name: "Belal Khan",
    role: "Consultent",
    image: "/images/team/t5.png",
  },
  {
    name: "Zahid Ahmed Joy",
    role: "Head of operations",
    image: "/images/team/t6.png",
  },
  {
    name: "Jajabor Polash",
    role: "Head of marketing",
    image: "/images/team/t7.png",
  },
  {
    name: "Yeasin Arafat",
    role: "Distribution Relations",
    image: "/images/team/t8.png",
  },
  {
    name: "Roni Sikdar Jetu",
    role: "Artist & label manager",
    image: "/images/team/t9.png",
  },
  {
    name: "Rakib",
    role: "Copyright Legal Notice",
    image: "/images/team/t10.png",
  },
  {
    name: "ADV Rayhan Hasan",
    role: "Lawyer & Consultents",
    image: "/images/team/t11.png",
  },
  {
    name: "Shahadat Hossain",
    role: "Office Assistant",
    image: "/images/team/t12.png",
  },
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

const FadeInSection = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"artists" | "labels">("artists");

  return (
    <div className="mt-24 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Hero Section */}
        <FadeInSection>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                What is
              </span>{" "}
              streamo digital?
            </h1>
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-200">
                Streamo Digital stands out as a leading music distribution platform
                for artists and record labels. Founded in 2021, it prioritizes
                excellence, transparency, and artist empowerment. Known for its fair
                revenue shares and fast delivery, Streamo Digital reliably connects
                music to global audiences, helping artists and labels grow their
                reach and earnings.
              </p>
              <p className="text-lg sm:text-xl text-gray-200">
                Using cutting-edge technology and strong partnerships, Streamo Digital ensures artists receive recognition and fair rewards for their work. Its services include copyright protection, royalty management, and advanced analytics, enabling artists to manage their careers independently and reach new heights.
              </p>
              <p className="text-lg sm:text-xl text-gray-200">
                Founder Ronok Ekram highlights Streamo Digital's commitment to solving industry challenges like royalty distribution and reporting, which has earned the platform the trust of artists worldwide. As the music industry evolves, Streamo Digital remains dedicated to innovation and surpassing client expectations, solidifying its position as a leader in music distribution.
              </p>
            </div>
          </div>
        </FadeInSection>


        {/* Achievements Section */}
        <FadeInSection delay={0.3}>
          <div className="rounded-3xl bg-gradient-to-br from-green-900/20 to-black/20 backdrop-blur-sm p-8 md:p-16 border border-green-500/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                Achievements
              </span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mx-auto mb-4 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {achievement.number}
                  </h4>
                  <p className="text-base text-gray-300">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Artists & Labels Section */}
        <FadeInSection delay={0.4}>
          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                  Who We Serve
                </span>
              </h2>
              <div className="inline-flex bg-white/10 backdrop-blur-sm p-1 rounded-full">
                <button 
                  onClick={() => setActiveTab("artists")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "artists" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white"}`}
                >
                  Artists
                </button>
                <button 
                  onClick={() => setActiveTab("labels")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "labels" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white"}`}
                >
                  Labels
                </button>
              </div>
            </div>
            
            {activeTab === "artists" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-114 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/artists-collage.png" 
                    alt="Artists We Serve"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-200">
                    Streamo Digital is a leading audio distribution platform, dedicated to supporting over 60 artists, including prominent figures like National award-winning singer Belal Khan, Kamruzzaman Rabbi, Raju Mondol, Shan Shaik, Baul Akaeid, Rohan Raj, and others. These artists trust Streamo Digital for their music distribution needs, drawn by the company's commitment to reliable service.
                  </p>
                  <p className="text-lg text-gray-200">
                    Streamo Digital provides 24/7 support, ensuring artists receive assistance whenever they need it. This round-the-clock availability has solidified its reputation as a dependable partner for artists looking to effectively distribute their music.
                  </p>
                  <p className="text-lg text-gray-200">
                    The platform also offers exclusive, artist-focused features, such as revenue-boosting strategies, transparent analytics to track music performance, and monthly payouts, helping artists secure a steady income from their releases.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === "labels" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/labels-collage.png" 
                    alt="Labels We Serve"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-200">
                    Streamo Digital is a respected audio distribution company that partners with over 130 labels, including notable names like Sristy Multimedia, Lionic Multimedia, Munna Khan Multimedia, and HM Voice. With a strong presence in the industry, Streamo Digital has built lasting trust by prioritizing its clients' needs and delivering reliable service.
                  </p>
                  <p className="text-lg text-gray-200">
                    A standout feature of Streamo Digital is its dedication to client support, offering 24/7 customer assistance to ensure that clients have help whenever needed. This round-the-clock availability fosters reliability and confidence among its partners.
                  </p>
                  <p className="text-lg text-gray-200">
                    In addition to client support, Streamo Digital offers exclusive services tailored to boost clients' revenue and enhance their distribution strategy. These features include revenue-optimizing strategies, real-time analytics for transparent tracking, and monthly payouts, catering to label companies focused on maximizing earnings and gaining valuable insights into their performance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </FadeInSection>

        {/* Media Recognition */}
        <FadeInSection delay={0.5}>
          <div className="rounded-3xl bg-gradient-to-br from-black/20 to-green-900/20 backdrop-blur-sm p-8 border border-green-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                Media & Industry Recognition
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Streamo Digital has earned widespread recognition in the desi popular media landscape as a leading audio distribution service, with its innovative approach and contributions regularly spotlighted across various media channels:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Desi Newspaper Magazines</h3>
                    <p className="text-gray-200">
                      Streamo Digital is frequently featured in popular desi newspapers and magazines, with articles and interviews covering its impact on digital music trends, artist achievements, and industry insights.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Online Music Blogs</h3>
                    <p className="text-gray-200">
                      Desi music-focused blogs and websites often discuss Streamo Digital's role in supporting South Asian artists, reviewing its services, and highlighting artist partnerships and distribution successes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Music Industry Podcasts</h3>
                    <p className="text-gray-200">
                      Executives from Streamo Digital participate in music industry podcasts, sharing expertise on digital distribution strategies, desi music trends, and the platform's role in helping artists succeed.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Social Media Influencers</h3>
                    <p className="text-gray-200">
                      Influential figures in the desi music community endorse Streamo Digital through sponsored content, reviews, and testimonials, raising awareness among their followers and enhancing the company's reputation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Music Award Shows</h3>
                    <p className="text-gray-200">
                      Streamo Digital receives recognition at desi music award shows and industry events, whether through sponsorships, awards for supporting emerging artists, or mentions for its contributions to the industry.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">Industry Forums</h3>
                    <p className="text-gray-200">
                      At music forums, conferences, and panel discussions, Streamo Digital contributes to conversations on digital distribution in the desi music market, showcasing its approach to empowering musicians.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Meet the Team */}
        <FadeInSection delay={0.6}>
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
                Meet the Team
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-green-500/5 to-black/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-green-400 text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </div>
  );
}
