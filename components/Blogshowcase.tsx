"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'



const BlogShowcase = () => {
  const blogPosts = [
    {
      slug: "1",
      title: "The Art of Self-Discovery",
      excerpt: "Learn how to unlock your true potential through mindful practices and self-reflection.",
      image: "/blog1.png",
      category: "Personal Growth",
      readTime: "5 min read",
      author: "John David",
      date: "May 15, 2024",
      
    },
    {
      slug: "2",
      title: "The Art of Mindful Living",
      excerpt: "Discover how mindfulness can transform your daily life and boost your mental well-being.",
      author: "Sarah Wilson",
      date: "Nov 16, 2024",
      category: "Mindfulness",
      readTime: "5 min read",
      image: "/blog4.png",
  
    },
    {
      slug: "3",
    title: "Building Healthy Habits",
    excerpt: "Learn the science-backed strategies for creating lasting habits that stick.",
    author: "John Davis",
    date: "Nov 15, 2024",
    category: "Health",
    readTime: "7 min read",
    image: "/blog5.png",
    },
  ]

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Featured Blogs
          </h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Explore our most popular articles on personal growth and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl hover:border-[2px] hover:border-green-600  dark:shadow-green-600 shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {blog.readTime}
                  </span>
                  
                  <Link  href={`/blog/${blog.slug}`} className='btn'>Read More → </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex text-xl items-center justify-center px-8 py-3 border border-transparent font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-green-600 hover:from-green-700 hover:to-yellow-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            View All Blogs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogShowcase
