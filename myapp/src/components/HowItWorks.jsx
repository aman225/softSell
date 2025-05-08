import { motion } from "framer-motion";
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-3xl text-blue-600" />,
    title: "Upload License",
    description: "Submit your software license details using our secure form.",
  },
  {
    icon: <FaSearchDollar className="text-3xl text-blue-600" />,
    title: "Get Valuation",
    description: "We'll evaluate your license and send a competitive quote.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
    title: "Get Paid",
    description: "Accept the offer and receive payment instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">How It Works</h2>
        <p className="text-gray-600">Selling your software has never been easier.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 rounded-xl p-6 text-center shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
