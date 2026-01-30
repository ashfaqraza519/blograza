"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We build modern digital products that are fast, scalable, and
            designed to grow your business.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We are a team of passionate developers and designers delivering
              clean, high-performance web solutions using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our mission is to help businesses succeed online with reliable,
              secure, and visually appealing digital products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Projects Completed", value: "120+" },
              { label: "Happy Clients", value: "80+" },
              { label: "Years Experience", value: "5+" },
              { label: "Team Members", value: "10+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center"
              >
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Frontend Developer" },
              { name: "Sarah Khan", role: "UI/UX Designer" },
              { name: "Michael Lee", role: "Backend Developer" },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <Image
                  className="w-24 h-24 mx-auto rounded-full bg-gray-200 dark:bg-gray-800 mb-4"
                  src="/member.jpg"
                  alt="Member"
                  width={427}
                  height={427}
                  priority
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {["Quality", "Performance", "Trust", "Innovation"].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We focus on delivering excellence in every project we build.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
