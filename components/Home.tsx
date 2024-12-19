import Image from 'next/image'
import Link from 'next/link'
import { FaLightbulb, FaChartLine, FaBrain, FaHeart } from 'react-icons/fa'

const SelfImprovementSection = () => {
  const features = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Personal Growth",
      description: "Discover strategies to unlock your full potential and achieve personal excellence."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-green-500" />,
      title: "Goal Achievement",
      description: "Learn effective methods to set and accomplish your life goals with purpose."
    },
    {
      icon: <FaBrain className="w-8 h-8 text-blue-500" />,
      title: "Mindset Development",
      description: "Transform your mindset and develop habits that lead to lasting success."
    },
    {
      icon: <FaHeart className="w-8 h-8 text-red-500" />,
      title: "Well-being Balance",
      description: "Create harmony between your mental, physical, and emotional well-being."
    }
  ]

  return (
    <section className="py-20  ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Transform Your Life
          </h2>
          <p className="text-xl  max-w-2xl mx-auto">
            Embark on a journey of self-discovery and personal development with our expert guidance and proven techniques.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-green-500 transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-600 to-green-600 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have already taken the first step towards personal transformation.
            </p>
            <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full hover:bg-green-100 transition-colors duration-300">
             <Link href="/login"> Begin Your Journey</Link>
            </button>
          </div>
        </div>

        {/* Testimonial */}
       
        <div className="mt-20">
          
        <h1 className="text-4xl md:text-5xl font-bold  my-6 text-center ">&#34;What Our Readers Are Saying&#34;</h1>
           <div className="flex justify-center flex-col md:flex-row  items-center gap-4">
       
        <div className="mt-12 bg-white hover:border-[2px] hover:border-green-400 hover:shadow-xl p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
  {/* First Testimonial */}
  <div className="flex items-center space-x-4 mb-6">
    <Image
      src="/Avater2.png" // Add an avatar image to your public folder
      alt="User Avatar"
      width={60}
      height={60}
      className="rounded-full"
    />
    <div>
      <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
      <p className="text-gray-600">Life Coach & Mentor</p>
    </div>
  </div>
  <p className="text-gray-700 italic">
  &#34;The journey of self-improvement is not about becoming someone else, but uncovering the best version of yourself. Every small step counts towards your greater transformation.&#34;
  </p>
</div>

{/* Second Testimonial */}
<div className="mt-12 bg-white hover:border-[2px] hover:border-green-400 hover:shadow-xl p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
  <div className="flex items-center space-x-4 mb-6">
    <Image
      src="/Avater1.png" // Add an avatar image to your public folder
      alt="User Avatar"
      width={60}
      height={60}
      className="rounded-full"
    />
    <div>
      <h4 className="font-semibold text-gray-800">John Smith</h4>
      <p className="text-gray-600">Web Developer & Tech Enthusiast</p>
    </div>
  </div>
  <p className="text-gray-700 italic">
  &#34;Being consistent is key to growth in any field. As developers, we learn through challenges and persistence. Every line of code is a step toward mastering our craft.&#34;
  </p>
</div>

{/* Third Testimonial */}
<div className="mt-12 bg-white hover:border-[2px] hover:border-green-400 hover:shadow-xl p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
  
  <div className="flex items-center space-x-4 mb-6">
    <Image
      src="/Avater.png" // Add an avatar image to your public folder
      alt="User Avatar"
      width={60}
      height={60}
      className="rounded-full"
    />
    <div>
      <h4 className="font-semibold text-gray-800">Daniel Lee</h4>
      <p className="text-gray-600">Full Stack Developer & Educator</p>
    </div>
  </div>
  <p className="text-gray-700 italic">
  &#34;Coding is not just about solving problems. It&#39;s about unlocking creativity, and learning new ways to bring ideas to life. Every project is a chance to expand our horizons.&#34;
  </p>
</div>
</div>
</div>
      </div>
    </section>
  )
}

export default SelfImprovementSection
