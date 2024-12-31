
import Image from "next/image";
import Comment from "@/components/Comment";
import { PageProps } from "@/.next/types/app/page";
const blogPosts = [
  {
    slug: "1",
    title: "The Art of Self-Discovery",
    excerpt: "Learn how to unlock your true potential through mindful practices and self-reflection.",
     author: "John David",
    date: "May 15, 2024",
    image: "/blog1.png",
    category: "Personal Growth",
    readTime: "5 min read",
    h1:"Understanding What Self-Discovery Truly Means",
    para1:"Self-discovery is the process of gaining a deeper understanding of who you are—your values, desires, and purpose. In today's fast-paced world, it's easy to lose sight of yourself amidst external expectations and distractions. By engaging in self-reflection and mindful practices, you can begin to uncover the layers of your personality, identify your strengths, and confront areas where growth is needed.",
    h2:"The Role of Mindfulness in Self-Reflection",
    para2:"Mindfulness is a powerful tool for self-discovery as it brings your awareness to the present moment. Whether through meditation, journaling, or simply observing your thoughts, mindfulness allows you to pause and reflect on your emotions, actions, and thought patterns. Over time, this practice reveals insights into your behaviors, helping you make intentional choices that align with your authentic self.",
    h3:" Identifying Your Core Values and Passions",
    para3:"A key step in self-discovery is identifying what truly matters to you. Your core values act as guiding principles, shaping your decisions and direction in life. By exploring your interests, passions, and the moments that bring you joy, you gain clarity on what fuels your sense of purpose. Aligning your daily life with your values creates fulfillment and meaning.",
    h4:"Taking Action Toward Personal Growth",
    para4:"Self-discovery isn't just about understanding yourself—it's about taking actionable steps toward personal growth. Once you've identified areas where you want to improve, set realistic goals, embrace challenges, and celebrate progress. Growth requires consistency and resilience, but each step brings you closer to becoming the best version of yourself."

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
    h1:"What is Mindful Living?",
    para1:"Mindful living is the practice of being fully present in every moment of your life. It's about consciously focusing on the here and now, instead of being overwhelmed by past regrets or future worries. By practicing mindfulness, you cultivate a deeper connection to your surroundings, thoughts, and emotions, helping you find peace and clarity in the busiest of days.",
    h2:"The Benefits of Mindfulness on Mental Health",
    para2:"Research has shown that mindfulness significantly reduces stress, anxiety, and depression. By observing your thoughts without judgment, you become more resilient to emotional triggers. Mindfulness encourages a sense of calm, improves focus, and enhances emotional well-being, allowing you to navigate life's challenges with grace and balance.",
    h3:"Practical Ways to Incorporate Mindfulness Daily",
    para3:"Mindfulness doesn't require hours of meditation; small, simple changes can make a big impact. Start your day with deep breathing exercises, pay attention to your senses during meals, or take short mindful walks where you focus on your surroundings. Turning off distractions and being intentional with your actions helps you stay grounded throughout the day.",
    h4:"Overcoming Challenges in Staying Mindful",
    para4:"While mindfulness is simple in concept, staying present can be challenging, especially with a busy lifestyle. The key is consistency and self-compassion. It's okay to get distracted; gently bring your focus back to the present moment. Over time, mindfulness becomes a natural habit that empowers you to respond to life with calmness and clarity.",
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
    h1:"The Power of Small, Consistent Actions",
    para1:"Building healthy habits starts with small, manageable actions repeated consistently. Whether it's exercising for 10 minutes, journaling daily, or drinking more water, these tiny steps accumulate over time to create powerful change. Science shows that habits stick when they're easy to adopt, so start small and gradually build momentum toward your bigger goals.",
    h2:"Understanding the Habit Loop",
    para2:"Habits are formed through a psychological loop consisting of three stages: the cue, the routine, and the reward. A cue triggers the habit, the routine is the action, and the reward reinforces it. For example, placing your running shoes near the door (cue) encourages a morning run (routine), and the post-workout energy boost (reward) motivates you to repeat it. By understanding this loop, you can reshape habits to align with your goals.",
    h3:"Overcoming Common Barriers to Habit Formation",
    para3:"Creating lasting habits isn't always easy. Lack of motivation, time, or willpower can derail progress. To overcome these challenges, focus on accountability and environment design. Track your progress using habit-tracking apps, partner with a friend for support, and remove distractions that hinder your success. Remember, consistency matters more than perfection.",
    h4:"The Role of Mindset in Building Lasting Habits",
    para4:"Your mindset plays a crucial role in forming habits that stick. Adopting a growth mindset—believing that change is possible through effort—helps you push past setbacks and stay committed. Instead of aiming for overnight results, view habit-building as a long-term journey. Celebrate small wins along the way and focus on progress, not perfection.",
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
    h1:"Why Continuous Learning is Essential for Developers",
    para1:"In the fast-paced tech industry, change is constant. New tools, frameworks, and programming languages emerge rapidly, making continuous learning essential for developers. Staying updated not only enhances your skillset but also keeps you competitive in the job market. Continuous learning empowers you to innovate, solve complex problems, and adapt to evolving trends in technology.",
    h2:"Strategies for Lifelong Learning in Tech",
    para2:"To master continuous learning, it's crucial to develop effective strategies. Start by dedicating time daily or weekly to learning new concepts. Use platforms like Udemy, Coursera, or freeCodeCamp for structured learning. Stay engaged with the developer community through blogs, podcasts, and open-source projects. Remember, consistency and curiosity are the keys to growth",
    h3:"Balancing Work and Learning",
    para3:"Balancing a full-time job with continuous learning can feel overwhelming. Prioritize topics that align with your career goals and focus on just-in-time learning — learning what you need when you need it. Break large topics into smaller milestones, and set aside short, focused study sessions to maintain momentum without burnout",
    h4:"Building a Growth Mindset for Lifelong Success",
    para4:"A growth mindset is the foundation of lifelong learning. Embrace challenges as opportunities to improve rather than fearing failure. Celebrate small achievements, and view feedback as a tool for growth. By believing in your ability to learn and adapt, you'll remain motivated to explore new technologies and take your skills to the next level",
    
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
h1:"Reignite Your Passion for Coding",
    para1:"It's easy to lose your spark as a programmer when routines get monotonous or challenges feel overwhelming. Finding your passion in coding isn't just about writing better code—it's about reconnecting with the joy and creativity that drew you to programming in the first place. By exploring new projects, learning exciting technologies, and challenging yourself, you can reignite your enthusiasm for coding.",
    h2:"Explore Projects That Inspire You",
    para2:"One of the best ways to rediscover your love for coding is to work on projects that excite and inspire you. Think about problems that matter to you personally—whether it's building a productivity app, contributing to open-source projects, or experimenting with game development. When you align coding with your passions, the process becomes fun, engaging, and rewarding.",
    h3:"Learn a New Technology or Framework",
    para3:"Staying in your comfort zone can make coding feel repetitive. Challenge yourself to learn a new programming language, framework, or tool. Exploring areas like machine learning, AI, or cloud technologies can reignite your curiosity. The act of learning something new not only boosts your skills but also reminds you of the infinite possibilities that coding offers.",
    h4:"Connect with the Developer Community",
    para4:"Passion thrives when shared. Engage with other developers through meetups, hackathons, or online communities like GitHub and Stack Overflow. Collaborating, sharing knowledge, and seeing how others approach programming challenges can inspire you to explore new ideas and stay motivated in your coding journey.",

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
h1:"The Key to Long-Term Success in Development",
    para1:"Consistency is the foundation of success for any developer. By dedicating regular time to improving your skills, exploring projects, and solving problems, you build momentum that leads to long-term progress. Whether you're learning a new framework or working on your first app, consistency helps you break big goals into achievable milestones.",
    h2:"Build a Daily Coding Habit",
    para2:"Small, daily actions create big results over time. Start by setting aside 30 minutes to 1 hour every day for coding or learning. Platforms like LeetCode, HackerRank, or Codewars can help you solve challenges daily. Even if you work on small portions of a project, consistent practice reinforces knowledge and builds confidence in your coding abilities.",
    h3:"Stay Organized and Set Clear Goals",
    para3:"Consistency is easier when you have clarity. Outline specific goals for each coding session—whether it's mastering a concept, fixing bugs, or writing clean code. Tools like Trello, Notion, or GitHub Projects can help you stay organized and motivated. Breaking tasks into smaller chunks reduces overwhelm and makes progress tangible.",
    h4:" Overcome the Challenges of Staying Consistent",
    para4:"Maintaining consistency can be tough when motivation dips. The key is to focus on discipline over motivation. Track your progress, reward yourself for milestones, and remind yourself of the 'why' behind your efforts. Surround yourself with a supportive developer community that pushes you to keep going, even on difficult days.",

  }
];

type Props = PageProps &{
  params: {
    slug: string;
  };
};

export default async function DynamicSlugPage({ params }: Props) {
  // Find the blog post based on the slug
  const blogPost =await blogPosts.find((post) => post.slug === params.slug);

  // If no post is found, handle gracefully
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-7xl ">
    <Image src={blogPost.image} alt='' width={800} height={400} className="rounded-[60px] shadow-lg shadow-blue-300 flex justify-center items-center md:ml-24 ml-4" />
  <header className="mb-8 mt-12 text-center">
    <h1 className="text-4xl md:text-5xl text-fuchsia-500 font-bold mb-4">
      {blogPost.title}
    </h1>
    <p className="text-2xl text-gray-600 mb-4">
     {blogPost.excerpt}
    </p>
  <div className="flex flex-col sm:flex-row text-center justify-center items-center gap-8">
<p className="text-xl font-semibold">Author:<span className="font-bold  text-2xl ml-3 text-purple-500">{blogPost.author}</span></p>
<p className="text-xl font-semibold">Publication Date:<span className="font-bold text-2xl ml-3 text-purple-500">{blogPost.date}</span></p>
</div>
<div className="text-5xl mt-4 font-bold  text-cyan-700">{blogPost.category}</div>
  </header>


  <div className="prose lg:prose-xl mt-12 ">
    <section className="mb-12">
      <h2 className='text-4xl underline mb-4 text-gray-700 '>1. {blogPost.h1}</h2>
      <p className='text-2xl '>
        {blogPost.para1}
      </p>
    </section>

    <section className="mb-12">
      <h2 className='text-4xl underline mb-4 text-gray-700'>2. {blogPost.h2}</h2>
      <ul className='text-2xl '>
       {blogPost.para2}
      </ul>
    </section>

    <section className="mb-12">
      <h2 className='text-4xl underline mb-4 text-gray-700'>3. {blogPost.h3}</h2>
      <ol className='text-2xl '>
       {blogPost.para3}
      </ol>
    </section>

    <section className="mb-12">
      <h2 className='text-4xl underline mb-4 text-gray-700'>4. {blogPost.h4}</h2>
      <p className='text-2xl '>
       {blogPost.para4}
      </p>
    </section>
  </div>
  <Comment />
</article>
  );
}

