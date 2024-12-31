import Image from 'next/image'
import { FaFacebook,  FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import home from "@/app/images/home.png"
import Home from '@/components/Home'
import BlogShowcase from '@/components/Blogshowcase'
import Link from 'next/link'


export default function Page() {
  return (
    <main className="min-h-screen  ">
      <div className="flex flex-col md:flex-row  justify-center items-center">

      {/* Content */}
      <div className=" container md:w-1/2 w-full md:mx-auto ">
        <div className="flex flex-col bg-g items-center justify-center md:min-h-[100vh] min-h-[60vh] text-left ">
          <h1 className="text-5xl text-green-800  md:text-8xl font-bold  mb-6 animate-fade-in">
            BOOST YOUR
            <span className="block mt-6">SUCCESS</span>
          </h1>

          <p className="text-3xl md:text-5xl text-green-700 mb-12 text-center md:text-left max-w-2xl">
          Tips and tools for a productive mindset
          </p>

          <button className="bg-gradient-to-r from-green-400 to-green-950 hover:from-green-950 hover:to-green-400 text-white text-2xl  font-bold py-3 px-8 w-[260px] h-[40px] rounded-full 
            transition-transform hover:scale-105 shadow-lg">
            <Link href="/contact">Contact Now</Link>
          </button>


          {/* Social Icons */}
          <div className="mt-16 flex space-x-6">
            <a href="#" className=" hover:text-green-900 transition-colors">
              <FaFacebook className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/" className=" hover:text-green-900 transition-colors">
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/bint_e_farzana/" className=" hover:text-green-900 transition-colors">
              <FaInstagram className="w-10 h-10" />
            </a>
            <a href="https://github.com/faryal16" className=" hover:text-green-900 transition-colors">
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2  w-auto ">
        <Image src={home} alt='' width={480} height={400} className='rounded-[60px] shadow-lg  hover:shadow-2xl hover:shadow-green-800 hover:border-2 hover:border-green-800 transition-shadow duration-300' />
      </div>
      </div>
         <Home />
         <BlogShowcase/>
    </main>
  )
}

