import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily R.",
    role: "IT Manager",
    company: "TechNova Inc.",
    feedback:
      "SoftSell made the license resale process effortless. Fast quotes and great support throughout!",
  },
  {
    name: "James W.",
    role: "Procurement Lead",
    company: "CloudCore Solutions",
    feedback:
      "We recovered thousands in unused licenses thanks to SoftSell. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Real results from real businesses.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
            <div className="text-sm text-blue-800 font-semibold">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
