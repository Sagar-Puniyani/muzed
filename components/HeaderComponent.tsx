import { useState } from 'react';
import { motion } from 'framer-motion';
import { Appbar } from '@/components/Appbar';

const HeaderComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <motion.div 
        className="text-2xl md:text-3xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Muzed
      </motion.div>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggleDrawer}
          className="relative w-6 h-6 focus:outline-none"
        >
          <motion.span
            className={`block absolute top-0 left-0 h-0.5 w-full bg-orange-500 transition-transform duration-300 ${drawerOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <motion.span
            className={`block absolute top-2.5 left-0 h-0.5 w-full bg-orange-500 transition-opacity duration-300 ${drawerOpen ? 'opacity-0' : ''}`}
          />
          <motion.span
            className={`block absolute bottom-0 left-0 h-0.5 w-full bg-orange-500 transition-transform duration-300 ${drawerOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>

      {/* Nav Links & Appbar for larger screens */}
      <nav className="hidden md:flex space-x-4 items-center">
        {['Home', 'Features', 'About', 'Contact'].map((item, index) => (
          <motion.a
            key={item}
            href="#"
            className="hover:text-orange-500 transition-colors text-sm md:text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item}
          </motion.a>
        ))}
        <div className="m-6 relative z-20">
        <Appbar />
        </div>
      </nav>

      {/* Drawer for smaller screens */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-black shadow-lg transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          {/* Close button */}
          <button
            type='button' 
            onClick={toggleDrawer} 
            className="text-orange-500 focus:outline-none mb-4"
          >
            {/* Close Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Drawer links with new styles */}
          {['Home', 'Features', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 px-4 text-lg text-orange-500 hover:text-orange-600 transition-colors bg-black"
            >
              {item}
            </a>
          ))}
          {/* Appbar component */}
          <div className="mt-6 relative z-50">
            <Appbar />
          </div>

        </div>
      </div>

      {/* Overlay behind the drawer */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </header>
  );
};

export default HeaderComponent;
