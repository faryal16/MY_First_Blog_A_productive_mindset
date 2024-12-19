
import { Metadata } from 'next'
import Image from 'next/image'
import Comment from '@/components/Comment'

export const metadata: Metadata = {
  title: 'The Journey to Self-Discovery | Featured Post',
  description: 'A deep dive into the transformative journey of self-discovery and personal growth'
}

export default function FeaturedPost() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-7xl ">
        <Image src="/blog.home.png" alt='' width={1000} height={500} className="rounded-[60px] shadow-lg shadow-blue-300 flex justify-center items-center " />
      <header className="mb-8 mt-12 text-center">
        <h1 className="text-4xl md:text-5xl text-fuchsia-500 font-bold mb-4">
          The Journey to Self-Discovery
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Embarking on a transformative path of self-awareness and personal evolution
        </p>
      <div className="flex flex-col sm:flex-row text-center justify-center items-center gap-8">
    <p className="text-xl font-semibold">Author:<span className="font-bold  text-2xl ml-3 text-purple-500">Faryal Junaid</span></p>
    <p className="text-xl font-semibold">Publication Date:<span className="font-bold text-2xl ml-3 text-purple-500">November 28, 2024</span></p>
  </div>
  <div className="text-5xl mt-4 font-bold  text-cyan-700">Featured</div>
      </header>


      <div className="prose lg:prose-xl mt-12 ">
        <section className="mb-12">
          <h2 className='text-4xl underline mb-4  text-amber-700'>1. Understanding Self-Discovery</h2>
          <p className='text-2xl'>
            Self-discovery is more than just a journey—it&#39;s a transformative process that leads us to 
            understand our true essence, values, and purpose. In today&#39;s fast-paced world, taking time 
            for self-reflection has become more crucial than ever.
          </p>
        </section>

        <section className="mb-12">
          <h2 className='text-4xl underline mb-4  text-amber-700'>2. Key Aspects of the Journey</h2>
          <ul className='text-2xl'>
            <li>Mindful Self-Reflection: Taking time to understand our thoughts and emotions.</li>
            <li>Personal Growth: Embracing challenges as opportunities for development.</li>
            <li>Emotional Intelligence: Developing awareness of our emotional landscape.</li>
            <li>Authentic Living: Aligning our actions with our true values.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className='text-4xl underline mb-4  text-amber-700'>3. Practical Steps for Your Journey</h2>
          <ol className='text-2xl'>
            <li>Start a daily journaling practice.</li>
            <li>Practice mindfulness meditation.</li>
            <li>Set aside time for regular self-reflection.</li>
            <li>Seek feedback from trusted friends and mentors.</li>
            <li>Embrace new experiences and challenges.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className='text-4xl underline mb-4  text-amber-700'>4. The Impact of Self-Discovery</h2>
          <p className='text-2xl'>
            When we embark on the journey of self-discovery, we open doors to improved relationships, 
            better decision-making, and a more fulfilled life. This journey isn&#39;t about reaching a 
            destination—it&#39;s about embracing the continuous process of growth and learning.
          </p>
        </section>
      </div>
      <Comment />
    </article>

  )
}
