import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaHeadset, FaThumbsUp } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Secure Process",
    description: "We use encrypted systems and safe transactions for your peace of mind.",
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600" />,
    title: "Fast Turnaround",
    description: "Get valuations and payouts in record time — usually within 24 hours.",
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-600" />,
    title: "Dedicated Support",
    description: "Our team is always here to guide you through the process.",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-600" />,
    title: "Trusted by Clients",
    description: "We’ve helped hundreds of businesses recover value from unused licenses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-50 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-600">We make software resale simple and reliable.</p>
      </motion.div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut"
              }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
