import { motion } from "framer-motion";
import { FaClipboardCheck, FaChartLine, FaMoneyCheckAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
    title: "Submit Your License Details",
    timeframe: "2 minutes",
    description: "Complete our secure form with basic license information – no sensitive access credentials required.",
    highlight: "Quick & Simple",
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-600" />,
    title: "Receive Our Market-Leading Quote",
    timeframe: "Within 4 hours",
    description: "Our AI-powered valuation system analyzes current market demand to provide the most competitive offer.",
    highlight: "30% Higher Value",
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-blue-600" />,
    title: "Secure Payment Directly to Your Account",
    timeframe: "Same day",
    description: "Accept our offer and receive payment via secure transfer to your preferred payment method.",
    highlight: "Instant Transfers",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-50 rounded-full opacity-70"></div>
      
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
            Simple Three-Step Process
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple, secure, and profitable.
            <span className="font-medium text-blue-700"> 93% of customers receive higher quotes than competitors.</span>
          </p>
        </motion.div>

        {/* Timeline process */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-1/2 w-px h-[calc(100%-120px)] bg-gradient-to-b from-blue-400 to-blue-50 hidden md:block"></div>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-6 max-w-6xl mx-auto relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Step number */}
                <div className="absolute -top-10 left-0 md:left-1/2 md:-translate-x-1/2 bg-white">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Card content */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 pt-12 h-full border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                      {step.icon}
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {step.timeframe}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg inline-block text-sm font-medium">
                    {step.highlight}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Process guarantees */}
        <motion.div 
          className="bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto mt-16 text-center flex flex-wrap justify-center gap-x-12 gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-blue-700">
            <span className="font-medium">✓ No obligation quotes</span>
          </div>
          <div className="text-blue-700">
            <span className="font-medium">✓ Transparent pricing</span>
          </div>
          <div className="text-blue-700">
            <span className="font-medium">✓ No hidden fees</span>
          </div>
          <div className="text-blue-700">
            <span className="font-medium">✓ Secure transactions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}