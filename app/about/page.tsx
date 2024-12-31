"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-700 to-green-500 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="md:text-6xl text-4xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover our story and how we aim to inspire developers worldwide.
        </motion.p>
      </motion.section>

      {/* About Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/about.png"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </motion.div>
          {/* About Description */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-5xl font-semibold text-green-800 mb-4">
              Who We Are
            </h2>
            <p className="text-green-600 text-xl mt-8 md:text-2xl">
              We are passionate about empowering developers and creators to
              unleash their potential. Through inspirational blogs, insightful
              content, and community-driven initiatives, we aim to make
              technology accessible and engaging for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <motion.section
        className="bg-white py-16 px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Mission */}
          <motion.div
            className="p-6 shadow-lg rounded-lg hover:border-[2px] hover:border-green-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and guide developers toward success in their careers
              and projects.
            </p>
          </motion.div>
          {/* Vision */}
          <motion.div
            className="p-6 shadow-lg rounded-lg hover:border-[2px] hover:border-green-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading platform for developers seeking knowledge and
              inspiration.
            </p>
          </motion.div>
          {/* Values */}
          <motion.div
            className="p-6 shadow-lg rounded-lg hover:border-[2px] hover:border-green-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, creativity, and a commitment to fostering growth in the
              tech community.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-green-500 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Ready to Explore More?
        </h2>
        <p className="mb-6 text-xl md:text-2xl">
          Dive into our latest blogs and discover insightful content tailored
          for developers.
        </p>
        <motion.button
          className=" bg-gradient-to-r from-purple-400 to-lime-400 hover:from-green-900 hover:to-yellow-900 text-white md:text-2xl text-xl font-bold  md:w-[260px] w-[150px] h-[40px] rounded-full 
          transition-transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/blog">Explore Blogs</Link>
        </motion.button>
      </motion.section>
    </div>
  );
}
