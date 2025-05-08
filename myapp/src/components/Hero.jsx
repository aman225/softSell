import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center px-6 py-16 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-40 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-10 blur-lg"></div>
      
      <div className="container mx-auto grid md:grid-cols-5 gap-8 items-center">
        {/* Content section - takes up 3/5 of the grid on medium+ screens */}
        <motion.div 
          className="md:col-span-3 z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-blue-100"
          >
            Recover unused software investments
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
            Transform Dormant Software Licenses into <span className="text-blue-600">Instant Revenue</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 md:pr-12 max-w-xl">
            Businesses recover an average of <span className="font-semibold">$27,000</span> annually from unused licenses through our secure, same-day marketplace.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition flex items-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <FaArrowRight />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-full hover:bg-blue-50 transition flex items-center space-x-2"
            >
              <FaPlayCircle />
              <span>See How It Works</span>
            </motion.button>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-3">Trusted by 500+ companies including:</p>
            <div className="flex flex-wrap items-center gap-6">
              {['Microsoft', 'Adobe', 'Oracle', 'IBM', 'Salesforce'].map((company, index) => (
                <div key={index} className="text-gray-400 font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Visual section - takes up 2/5 of the grid on medium+ screens */}
        <motion.div 
          className="md:col-span-2 relative z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Dashboard/Software visualization mockup */}
            <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100 relative z-20">
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <div className="h-2 w-24 bg-blue-200 rounded-full mb-2"></div>
                <div className="flex justify-between">
                  <div className="h-6 w-20 bg-blue-100 rounded-md"></div>
                  <div className="h-6 w-16 bg-green-100 rounded-md"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="w-full h-2 bg-green-200 rounded-full mb-2"></div>
                  <div className="w-1/2 h-2 bg-green-200 rounded-full"></div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="w-full h-2 bg-blue-200 rounded-full mb-2"></div>
                  <div className="w-2/3 h-2 bg-blue-200 rounded-full"></div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="w-full h-2 bg-purple-200 rounded-full mb-2"></div>
                  <div className="w-3/5 h-2 bg-purple-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative badge */}
            <motion.div 
              className="absolute -right-4 -top-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg z-30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              Save up to 85%
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-yellow-100 rounded-lg rotate-12 z-10"></div>
            <div className="absolute -right-5 -bottom-5 w-32 h-20 bg-blue-100 rounded-lg -rotate-6 z-10"></div>
          </div>
          
          {/* Stats indicator */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-4 mt-8 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl">$27K</div>
              <div className="text-xs text-gray-500">Avg. Recovery</div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl">24hrs</div>
              <div className="text-xs text-gray-500">Avg. Turnaround</div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl">100%</div>
              <div className="text-xs text-gray-500">Secure Process</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}