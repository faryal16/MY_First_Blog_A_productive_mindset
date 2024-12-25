import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { ModeToggle } from './ThemeButton'
  


const Navbar = () => {
    

  return (
    <nav className="w-full sticky z-10 top-0  border-b backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link
    href="/"
    className="text-4xl font-thin italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:scale-110 transform transition-all duration-300 ease-in-out   hover:from-green-600 hover:to-green-900 flex items-center space-x-2"
  >
    
    <span>Fairy&#39;sBlog</span>
  </Link>
</div>



          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/"
                className=" hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm "
              >
                Home
              </Link>
              <Link 
                href="/about"
                className=" hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm "
              >
                About
              </Link>
              <Link 
                href="/blog"
                className=" hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm "
              >
                Blog
              </Link>
              <Link 
                href="/contact"
                className=" hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm "
              >
                Contact
              </Link>
              <div className="flex items-center justify-center">
            <Button className='mx-1 hover:font-semibold hover:scale-150 transition-transform duration-300' variant="outline">
              <Link href="/login">Login</Link></Button>
            <Button className='mx-1 hover:font-semibold hover:scale-150 transition-transform duration-300' variant="outline">
              <Link href="/signup">Signup</Link></Button>
            <ModeToggle  />

            </div>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
          <Sheet>
          <span className="mx-2">
            <ModeToggle  />

              </span>
          <SheetTrigger>
          
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
              

            
  <SheetContent>
    <SheetHeader>
      <SheetTitle  className="text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:scale-110 transform transition-all duration-300 ease-in-out   hover:from-green-600 hover:to-green-900 flex justify-center mt-20 mb-8 items-center space-x-2" >  Fairy&#39;sBlog</SheetTitle>
      <SheetDescription>  
         <div className="flex justify-center items-center flex-col gap-6">
              <Link 
                href="/"
                className="hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link 
                href="/blog"
                className="hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link 
                href="/contact"
                className="hover:font-semibold hover:scale-150 transition-transform duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <div className="flex items-center justify-center mx-1">
            <Button className='mx-1 text-xs hover:font-semibold hover:scale-150 transition-transform duration-300' variant="outline"><Link href="/login">Login</Link></Button>
            <Button className='mx-1 text-xs hover:font-semibold hover:scale-150 transition-transform duration-300' variant="outline"> <Link href="/signup">Signup</Link></Button>
            <ModeToggle />

            </div>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


            
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className=" hover:font-semibold hover:scale-150 transition-transform duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className=" hover:font-semibold hover:scale-150 transition-transform duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className=" hover:font-semibold hover:scale-150 transition-transform duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className=" hover:font-semibold hover:scale-150 transition-transform duration-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
