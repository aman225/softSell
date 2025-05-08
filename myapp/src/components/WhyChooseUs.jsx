import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaHeadset, FaThumbsUp } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Bank-Level Security",
    description: "256-bit encryption and SOC 2 compliance ensures your license data and transactions are fully protected.",
    stat: "100%",
    statLabel: "Secure",
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600" />,
    title: "Industry-Leading Speed",
    description: "Average 6-hour turnaround compared to industry standard of 72 hours for license valuation and transfer.",
    stat: "12x",
    statLabel: "Faster",
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-600" />,
    title: "24/7 Dedicated Support",
    description: "Personal account managers available around the clock with an average response time of just 15 minutes.",
    stat: "15min",
    statLabel: "Response",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-600" />,
    title: "Trusted by Businesses",
    description: "Over $14M recovered for 500+ businesses last year with a 4.9/5 star satisfaction rating.",
    stat: "4.9/5",
    statLabel: "Rating",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Our Commitment
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Why Choose SoftSell</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped organizations recover <span className="font-semibold">over $14 million</span> in unused software value with our secure, efficient, and transparent process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition border border-gray-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative background element */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-50 rounded-full transition-all duration-300 group-hover:scale-150"></div>
              
              {/* Icon */}
              <div className="mb-4 relative">
                <div className="bg-blue-50 w-14 h-14 flex items-center justify-center rounded-lg">
                  {item.icon}
                </div>
              </div>
              
              {/* Stat */}
              <div className="absolute top-6 right-6 flex flex-col items-end">
                <div className="text-blue-700 font-bold text-2xl">{item.stat}</div>
                <div className="text-xs text-gray-500">{item.statLabel}</div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Recovery Guarantee</h3>
            <p className="mb-6">If we can't offer at least 20% more than competitors for your licenses, we'll cover the difference.</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Best Value Guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Secure Process</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}