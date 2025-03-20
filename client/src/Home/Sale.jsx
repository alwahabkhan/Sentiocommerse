import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endDate = new Date('2023-12-31T23:59:59'); // Set your sale end date here
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 md:p-10 rounded-lg shadow-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          backgroundSize: ['100% 100%', '200% 200%'],
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 20,
        }}
        style={{
          backgroundImage: 'url("/Images/naughty-shopping-woman-smiling-wearing-hat-isolated-green-background_231208-4935-removebg-preview.png")',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Text Content Section */}
        <div className="flex flex-col mb-6 md:mb-0 md:mr-10 w-full md:w-auto"> {/* Make it take full width */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 w-full text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Big Sale - Up to 50% Off!
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-6 w-full text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Don't miss out on our exclusive deals. Shop now and save big!
          </motion.p>
          <motion.div 
            className="flex space-x-4 mb-6 justify-center md:justify-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="text-3xl font-bold bg-black bg-opacity-20 rounded-lg p-2 w-16 text-center">
                  {value}
                </div>
                <div className="text-sm mt-1 capitalize">{unit}</div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/Shop" className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-80 transition-colors duration-300">
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div 
          className="flex justify-center md:justify-end w-full md:w-auto mt-0 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            width="80%"  // Make the video take 80% width
            height="auto" 
            className="rounded-lg shadow-xl"
          >
            <source src="Images/amna1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Sale;
