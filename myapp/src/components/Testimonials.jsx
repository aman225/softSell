import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar, FaPlay } from "react-icons/fa";

const testimonialData = [
  {
    name: "Emily Rodriguez",
    role: "IT Director",
    company: "TechNova Healthcare",
    industry: "Healthcare",
    image: "/api/placeholder/64/64", // Using placeholder as instructed
    logo: "/api/placeholder/100/40",
    feedback:
      "SoftSell recovered $47,000 from our unused Adobe and Microsoft licenses in just one week. The process was incredibly smooth, and the valuation was 30% higher than a competitor's quote.",
    rating: 5,
    licenseType: "Adobe Creative Cloud & Microsoft 365",
    recovered: "$47,000"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "CloudCore Solutions",
    industry: "Technology",
    image: "/api/placeholder/64/64",
    logo: "/api/placeholder/100/40",
    feedback:
      "After downsizing, we had 200+ unused licenses sitting idle. SoftSell helped us recover $93,500 in capital that we reinvested in our core business operations. Their security protocols gave us complete confidence.",
    rating: 5,
    licenseType: "Enterprise Software",
    recovered: "$93,500"
  },
  {
    name: "Sarah Chen",
    role: "Finance Manager",
    company: "Global Financial Partners",
    industry: "Finance",
    image: "/api/placeholder/64/64",
    logo: "/api/placeholder/100/40",
    feedback:
      "As a financial institution, security was our primary concern. SoftSell's compliance protocols exceeded our expectations. We recovered $61,200 from unused security software licenses with zero hassle.",
    rating: 5,
    licenseType: "Security Software",
    recovered: "$61,200"
  },
];

// Stats calculated from testimonial data
const stats = {
  totalRecovered: "$201,700",
  averageSavings: "$67,233",
  satisfactionRate: "100%"
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };
  
  return (
    <section className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 opacity-50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 opacity-50 rounded-tr-full"></div>
      
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
            Client Success Stories
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join 500+ satisfied organizations that have unlocked hidden value from their software assets.
          </p>
        </motion.div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <motion.div 
            className="bg-blue-50 rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-sm mb-1">Total Value Recovered</p>
            <h3 className="text-blue-700 text-2xl font-bold">{stats.totalRecovered}</h3>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-sm mb-1">Average Client Savings</p>
            <h3 className="text-blue-700 text-2xl font-bold">{stats.averageSavings}</h3>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-sm mb-1">Client Satisfaction</p>
            <h3 className="text-blue-700 text-2xl font-bold">{stats.satisfactionRate}</h3>
          </motion.div>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Main content area */}
            <div className="grid md:grid-cols-5 min-h-[400px]">
              {/* Left column - profile info (hidden on mobile) */}
              <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-6">
                        <img 
                          src={testimonialData[currentIndex].image} 
                          alt={testimonialData[currentIndex].name}
                          className="w-16 h-16 rounded-full border-2 border-white" 
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{testimonialData[currentIndex].name}</h3>
                      <p className="text-blue-100 mb-4">{testimonialData[currentIndex].role}</p>
                      
                      <div className="mb-2">
                        <div className="text-sm text-blue-100">Company</div>
                        <div className="font-medium">{testimonialData[currentIndex].company}</div>
                      </div>
                      
                      <div className="mb-2">
                        <div className="text-sm text-blue-100">Industry</div>
                        <div className="font-medium">{testimonialData[currentIndex].industry}</div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-sm text-blue-100">License Type</div>
                        <div className="font-medium">{testimonialData[currentIndex].licenseType}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-100 mb-1">Total Recovered</div>
                      <div className="text-2xl font-bold">{testimonialData[currentIndex].recovered}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Right column - testimonial content */}
              <div className="p-8 md:col-span-3 flex flex-col justify-between">
                <div>
                  {/* Mobile profile info (visible only on mobile) */}
                  <div className="flex items-center mb-4 md:hidden">
                    <img 
                      src={testimonialData[currentIndex].image} 
                      alt={testimonialData[currentIndex].name}
                      className="w-12 h-12 rounded-full mr-4" 
                    />
                    <div>
                      <h3 className="font-bold">{testimonialData[currentIndex].name}</h3>
                      <p className="text-sm text-gray-500">{testimonialData[currentIndex].role}, {testimonialData[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonialData[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote icon */}
                  <div className="mb-4 text-blue-200">
                    <FaQuoteLeft size={36} />
                  </div>
                  
                  {/* Testimonial text */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {testimonialData[currentIndex].feedback}
                      </p>
                      
                      {/* Mobile-only stats */}
                      <div className="md:hidden bg-blue-50 p-3 rounded-lg mb-4">
                        <div className="text-sm text-gray-500">Total Recovered</div>
                        <div className="text-xl font-bold text-blue-700">{testimonialData[currentIndex].recovered}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Navigation controls */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex space-x-2">
                    {testimonialData.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                      aria-label="Previous testimonial"
                    >
                      <FaArrowLeft className="text-gray-400" size={14} />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                      aria-label="Next testimonial"
                    >
                      <FaArrowRight className="text-gray-400" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video testimonial teaser */}
        <motion.div
          className="mt-16 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="relative mb-4 group cursor-pointer">
              <div className="rounded-lg overflow-hidden">
                <img src="/api/placeholder/400/225" alt="Video testimonial" className="w-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <FaPlay className="text-blue-600 ml-1" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-blue-800">Watch Client Success Stories</h3>
            <p className="text-gray-600 text-sm">See how organizations like yours turned unused software licenses into valuable capital.</p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Get Your Free Valuation
          </motion.button>
        </div>
      </div>
    </section>
  );
}