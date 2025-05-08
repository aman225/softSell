import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Sell Unused Software Licenses Effortlessly
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          SoftSell helps you unlock hidden value from surplus software — fast, safe, and secure.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get a Quote
        </button>
      </motion.div>
    </section>
  );
}
