// Enhanced ContactForm.jsx
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Form validation schemas for each step
const Step1Schema = Yup.object().shape({
  name: Yup.string().required("Your name is required"),
  email: Yup.string().email("Please enter a valid email").required("Email is required"),
  company: Yup.string().required("Company name is required"),
});

const Step2Schema = Yup.object().shape({
  licenseType: Yup.string().required("Please select a license type"),
  licenseCount: Yup.number()
    .min(1, "Must be at least 1")
    .required("Number of licenses is required"),
  expiryDate: Yup.date()
    .min(new Date(), "Date must be in the future")
    .required("Expiry date is required"),
});

const Step3Schema = Yup.object().shape({
  message: Yup.string().required("Please tell us a bit more about your needs"),
  agreeTerms: Yup.boolean()
    .required("You must agree to the terms")
    .oneOf([true], "You must agree to the terms"),
});

// Animated form field wrapper component
const AnimatedField = ({ children, name, label, type = "text", touched, errors }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isError = touched && errors;
  const isValid = touched && !errors;

  return (
    <div className="relative mb-6">
      <motion.label
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || Field.value
            ? "text-xs text-blue-600 top-1"
            : "text-base text-gray-500 top-3"
        }`}
        initial={false}
        animate={{ 
          top: isFocused || (children && children.props && children.props.value) ? "1px" : "12px",
          fontSize: isFocused || (children && children.props && children.props.value) ? "0.75rem" : "0.875rem"
        }}
      >
        {label}
      </motion.label>
      
      <div 
        className="relative"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
        
        {/* Success icon */}
        <AnimatePresence>
          {isValid && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute right-3 top-3 text-green-500"
            >
              <FaCheckCircle />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {isError && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name={name} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactForm() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const totalSteps = 3;
  
  // Get the active schema based on step
  const getActiveSchema = () => {
    switch (formStep) {
      case 1: return Step1Schema;
      case 2: return Step2Schema;
      case 3: return Step3Schema;
      default: return Step1Schema;
    }
  };
  
  // Get fields for the active step
  const renderStepFields = (touched, errors, values) => {
    switch (formStep) {
      case 1:
        return (
          <>
            <AnimatedField name="name" label="Your Name" touched={touched.name} errors={errors.name}>
              <Field
                name="name"
                className={`w-full border ${
                  touched.name && errors.name ? "border-red-300" : touched.name ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none`}
                placeholder=""
              />
            </AnimatedField>
            
            <AnimatedField name="email" label="Email Address" touched={touched.email} errors={errors.email}>
              <Field
                name="email"
                type="email"
                className={`w-full border ${
                  touched.email && errors.email ? "border-red-300" : touched.email ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none`}
                placeholder=""
              />
            </AnimatedField>
            
            <AnimatedField name="company" label="Company Name" touched={touched.company} errors={errors.company}>
              <Field
                name="company"
                className={`w-full border ${
                  touched.company && errors.company ? "border-red-300" : touched.company ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none`}
                placeholder=""
              />
            </AnimatedField>
          </>
        );
      
      case 2:
        return (
          <>
            <AnimatedField name="licenseType" label="License Type" touched={touched.licenseType} errors={errors.licenseType}>
              <Field 
                as="select" 
                name="licenseType"
                className={`w-full border ${
                  touched.licenseType && errors.licenseType ? "border-red-300" : touched.licenseType ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none appearance-none`}
              >
                <option value="">Select a type</option>
                <option value="Windows">Windows</option>
                <option value="Office">Microsoft Office</option>
                <option value="Adobe">Adobe Creative Cloud</option>
                <option value="Antivirus">Enterprise Antivirus</option>
                <option value="CAD">CAD Software</option>
                <option value="CRM">CRM Solutions</option>
                <option value="Other">Other</option>
              </Field>
            </AnimatedField>
            
            <AnimatedField name="licenseCount" label="Number of Licenses" touched={touched.licenseCount} errors={errors.licenseCount}>
              <Field
                name="licenseCount"
                type="number"
                min="1"
                className={`w-full border ${
                  touched.licenseCount && errors.licenseCount ? "border-red-300" : touched.licenseCount ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none`}
                placeholder=""
              />
            </AnimatedField>
            
            <AnimatedField name="expiryDate" label="License Expiry Date" touched={touched.expiryDate} errors={errors.expiryDate}>
              <Field
                name="expiryDate"
                type="date"
                className={`w-full border ${
                  touched.expiryDate && errors.expiryDate ? "border-red-300" : touched.expiryDate ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none`}
              />
            </AnimatedField>
          </>
        );
      
      case 3:
        return (
          <>
            <AnimatedField name="message" label="Additional Details" touched={touched.message} errors={errors.message}>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className={`w-full border ${
                  touched.message && errors.message ? "border-red-300" : touched.message ? "border-green-300" : "border-gray-300"
                } rounded-lg px-4 py-3 pt-6 bg-white transition-all focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none`}
                placeholder=""
              />
            </AnimatedField>
            
            <div className="mt-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <Field
                  type="checkbox"
                  name="agreeTerms"
                  className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a> and acknowledge that my information will be processed according to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
                </span>
              </label>
              {touched.agreeTerms && errors.agreeTerms && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-500 text-xs mt-1 overflow-hidden"
                >
                  {errors.agreeTerms}
                </motion.div>
              )}
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (formStep < totalSteps) {
      setFormStep(formStep + 1);
      setSubmitting(false);
      return;
    }
    
    // Final submission
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted with values:", values);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after timeout
    setTimeout(() => {
      resetForm();
      setFormStep(1);
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-50 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      
      {/* Background illustration */}
      <div className="absolute right-10 top-1/4 w-96 h-96 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMTk0LjYgMzJIMzE3LjRDMzM4LjEgMzIgMzU1LjQgNTAuOSAzNTQuNiA3MS40TDM0Mi45IDE5MkgzNjhDMzg0LjkgMTkyIDM5OC4yIDIwOC4xIDM5NC42IDIyNC44TDM2NC44IDQxNkMzNjEuOSA0MjkgMzUwLjQgNDM4LjkgMzM3LjIgNDM4LjlIMTc0LjhDMTYxLjYgNDM4LjkgMTUwLjEgNDI5IDEzNDcuMiA0MTZMMTExLjQgMjI0LjhDMTA3LjggMjA4LjEgMTIxLjEgMTkyIDEzOCAxOTJIMTYzLjFMMTU3LjQgNzEuNEMxNTYuNiA1MC45IDE3My45IDMyIDE5NC42IDMyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+')] bg-center bg-no-repeat"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-blue-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Start Your Recovery
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2 relative inline-block">
            Get in Touch
            <motion.div 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-200 rounded-full"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "50%", left: "25%" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Let's unlock the value of your unused software licenses. Complete the form below to get started with your free valuation.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Progress bar */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold text-lg">License Recovery Request</h3>
              <div className="text-blue-100 text-sm">Step {formStep} of {totalSteps}</div>
            </div>
            
            <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
              <motion.div 
                className="h-2 bg-white rounded-full"
                initial={{ width: `${((formStep - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${(formStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-blue-100">
              <div className={`${formStep >= 1 ? "text-white font-medium" : ""}`}>Your Details</div>
              <div className={`${formStep >= 2 ? "text-white font-medium" : ""}`}>License Information</div>
              <div className={`${formStep >= 3 ? "text-white font-medium" : ""}`}>Final Details</div>
            </div>
          </div>
          
          {/* Success message */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-blue-800 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Request Submitted!
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-center max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thank you for your interest in SoftSell. Our team will evaluate your software licenses and contact you within 24 hours with a competitive quote.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Form */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              company: "",
              licenseType: "",
              licenseCount: "",
              expiryDate: "",
              message: "",
              agreeTerms: false
            }}
            validationSchema={getActiveSchema()}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValid, dirty, values }) => (
              <Form className="p-8 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`form-step-${formStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepFields(touched, errors, values)}
                  </motion.div>
                </AnimatePresence>
                
                <div className="flex justify-between pt-4">
                  {formStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={() => setFormStep(formStep - 1)}
                      className="flex items-center space-x-2 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaArrowLeft className="text-sm" />
                      <span>Back</span>
                    </motion.button>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !(isValid && dirty)}
                    className={`flex items-center space-x-2 ml-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition ${
                      isSubmitting || !(isValid && dirty) ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    whileHover={isValid && dirty ? { scale: 1.03 } : {}}
                    whileTap={isValid && dirty ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <>
                        <span>{formStep === totalSteps ? "Submit Request" : "Continue"}</span>
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>
          
          {/* Form footer */}
          <div className="border-t border-gray-100 bg-gray-50 p-4 text-xs text-gray-500 text-center">
            Your information is secure and will never be shared with third parties. 
            <span className="block mt-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              256-bit SSL encrypted submission
            </span>
          </div>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {["SOC 2 Compliant", "GDPR Compliant", "100% Secure Process", "ISO 27001 Certified"].map((item, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}