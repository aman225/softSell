import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  company: Yup.string().required("Required"),
  licenseType: Yup.string().required("Select a type"),
  message: Yup.string().required("Required"),
});

export default function ContactForm() {
  return (
    <section className="py-20 bg-blue-50 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600">Let’s unlock the value of your unused software licenses.</p>
      </motion.div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Form submitted! 🚀 (Dummy only)");
          resetForm();
        }}
      >
        {() => (
          <Form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Field
                  name="name"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border rounded px-4 py-2"
                  placeholder="you@example.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <Field
                  name="company"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Your company"
                />
                <ErrorMessage name="company" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">License Type</label>
                <Field as="select" name="licenseType" className="w-full border rounded px-4 py-2">
                  <option value="">Select a type</option>
                  <option value="Windows">Windows</option>
                  <option value="Adobe">Adobe</option>
                  <option value="Antivirus">Antivirus</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage name="licenseType" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="w-full border rounded px-4 py-2"
                placeholder="How can we help you?"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
