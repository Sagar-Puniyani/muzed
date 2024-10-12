// import { Appbar } from "./components/Appbar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Music2Icon,
//   PlayCircleIcon,
//   HeadphonesIcon,
//   RadioIcon,
// } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     // <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     //   <Appbar />
//     // </main>

//     <div className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-[#FFA500] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Header */}
//         <header className="px-4 lg:px-6 h-14 flex items-center">
//           <Link href="/" className="flex items-center justify-center">
//             <Music2Icon className="h-6 w-6 text-[#FF8C00]" />
//             <span className="ml-2 text-xl font-bold">Muzed</span>
//           </Link>
//           <nav className="ml-auto flex gap-4 sm:gap-6">
//             <Link
//               href="#features"
//               className="text-sm font-medium hover:text-[#FFA500] transition-colors"
//             >
//               Features
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium hover:text-[#FFA500] transition-colors"
//             >
//               Pricing
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium hover:text-[#FFA500] transition-colors"
//             >
//               About
//             </Link>
//           </nav>
//         </header>

//         {/* Hero Section */}
//         <section className="px-4 py-12 md:py-24 lg:py-32 xl:py-48 text-center">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
//             Your Music, <span className="text-[#FF8C00]">Elevated</span>
//           </h1>
//           <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl mt-4">
//             Immerse yourself in a world of premium sound. Stream millions of
//             songs with unparalleled audio quality.
//           </p>
//           <div className="flex justify-center mt-8">
//             <Button className="bg-[#FF8C00] text-white hover:bg-[#FFA500] transition-colors">
//               Start Listening Now
//             </Button>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="px-4 py-12 md:py-24 lg:py-32">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose MeloStream?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <FeatureCard
//               icon={<HeadphonesIcon className="h-10 w-10 text-[#FF8C00]" />}
//               title="High-Fidelity Audio"
//               description="Experience music as the artists intended with our lossless audio quality."
//             />
//             <FeatureCard
//               icon={<PlayCircleIcon className="h-10 w-10 text-[#FF8C00]" />}
//               title="Curated Playlists"
//               description="Discover new music with our expertly curated playlists for every mood and occasion."
//             />
//             <FeatureCard
//               icon={<RadioIcon className="h-10 w-10 text-[#FF8C00]" />}
//               title="Live Radio"
//               description="Tune into live radio stations from around the globe, all in one place."
//             />
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="px-4 py-12 md:py-24 lg:py-32 bg-[#FF8C00] text-[#1A1A1A]">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to Elevate Your Music Experience?
//             </h2>
//             <p className="mb-8">
//               Join millions of music lovers and start your journey with
//               MeloStream today.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="max-w-sm bg-white text-[#1A1A1A]"
//               />
//               <Button
//                 type="submit"
//                 className="bg-[#1A1A1A] text-white hover:bg-gray-800 transition-colors"
//               >
//                 Get Started
//               </Button>
//             </form>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="px-4 py-6 bg-[#1A1A1A] border-t border-gray-800">
//           <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
//             <div className="flex items-center mb-4 sm:mb-0">
//               <Music2Icon className="h-6 w-6 text-[#FF8C00]" />
//               <span className="ml-2 text-xl font-bold">MeloStream</span>
//             </div>
//             <div className="flex gap-4">
//               <Link
//                 href="#"
//                 className="text-sm text-gray-400 hover:text-[#FFA500] transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 href="#"
//                 className="text-sm text-gray-400 hover:text-[#FFA500] transition-colors"
//               >
//                 Terms of Service
//               </Link>
//               <Link
//                 href="#"
//                 className="text-sm text-gray-400 hover:text-[#FFA500] transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }: any ) {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors">
//       {icon}
//       <h3 className="mt-4 text-xl font-semibold">{title}</h3>
//       <p className="mt-2 text-gray-400">{description}</p>
//     </div>
//   );
// }

"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Music, Headphones, Radio, Mic2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import HeaderComponent from '@/components/HeaderComponent'



export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Neon light beams */}
      <div className="fixed inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-100%',
              right: '-100%',
              opacity: 0.3,
              filter: 'blur(4px)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `neonBeam 8s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
     
        <HeaderComponent />


        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            Unleash the Power of Music
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stream millions of songs with crystal-clear quality. Anytime. Anywhere.
          </motion.p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            get Started
            <ChevronRight className="ml-2" />
          </Button>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">Why Choose Muzed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Music, title: "Vast Music Library", description: "Access millions of tracks from various genres" },
              { icon: Headphones, title: "High-Quality Audio", description: "Experience lossless audio with our premium sound technology" },
              { icon: Radio, title: "Personalized Playlists", description: "Discover new music tailored to your taste" },
              { icon: Mic2, title: "Live Concerts", description: "Stream live performances from your favorite artists" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-orange-500 shadow-lg shadow-orange-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Experience the Future of Music?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join millions of music lovers and start your journey with Muzed today.
          </motion.p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            Get Started Now
          </Button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 bg-opacity-50 py-8 backdrop-blur-sm border-t border-orange-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">Muzed</div>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d={
                        social === 'facebook' 
                          ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          : social === 'twitter'
                          ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          : "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      } clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              © {new Date().getFullYear()} Muzed. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  )
}