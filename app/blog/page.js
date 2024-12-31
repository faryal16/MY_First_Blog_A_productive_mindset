"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'





export default function BlogPage() {



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
    {
      slug: "4",
      title: "Mastering the Art of Continuous Learning",
      excerpt: "Stay motivated and up-to-date in tech with strategies for lifelong learning as a developer.",
      author: "Emily Carter",
      date: "Nov 30, 2024",
      category: "Career Growth",
      readTime: "8 min read",
      image: "/blog7.png",
      
    },
    {
      slug: "5",
  title: "Finding Your Passion in Coding",
  excerpt: "Reignite your love for programming by exploring projects that inspire and challenge you.",
  author: "Daniel Smith",
  date: "Dec 5, 2024",
  category: "Inspiration",
  readTime: "6 min read",
  image: "/blog8.png",
  
    },
    {
      slug: "6",
  title: "Staying Consistent as a Developer",
  excerpt: "Unlock the power of consistency to improve your coding skills and reach your developer goals.",
  author: "Sophia Martinez",
  date: "Dec 10, 2024",
  category: "Motivation",
  readTime: "7 min read",
  image: "/blog9.png",
  
    }
    // Add more blog posts as needed
  ]

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-16 text-center"
      >
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-green-700 md:text-6xl font-bold  mb-4">
          Our Blog
        </h1>
        <p className="text-xl  max-w-2xl mx-auto">
          Explore insights on personal growth, mindfulness, and well-being
        </p>
      </motion.div>

      {/* Featured Post */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 mb-16 "
      >
        <div className="relative h-[60vh]  rounded-2xl overflow-hidden ">
          <Image
            src="/blog.home.png"
            alt="Featured Blog"
            fill
            className="object-cover h-full w-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-center" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="text-sm text-white/80 mb-2 block">Featured Post</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Journey to Self-Discovery
            </h2>
            <p className="text-white/90 mb-4 max-w-2xl">
              Embark on a transformative journey of self-discovery and personal growth.
            </p>
            <Link 
              href="/blog/featured"
              className="inline-block btn w-[160px] h-[44px] text-2xl text-center text-white  px-6 py-3 rounded-full font-medium transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:border-[2px] hover:border-green-600 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 font-medium">
                        {post.author}
                      </p>
                    </div>
                  </div>
                 <button className='btn'>
                   <Link  href={`/blog/${post.slug}`}>Read More  </Link>
                  </button>
                </div>
              </div>
            </motion.article>
            
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mt-20"
      >
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6 ">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-green-950 hover:from-green-950 hover:to-green-400 text-white text-2xl  font-bold py-3 px-8 md:w-[260px] w-auto h-[40px] rounded-full 
            transition-transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  )
}
