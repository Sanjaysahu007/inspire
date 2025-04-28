import React from "react";
import { motion } from "framer-motion";
import { User, Building2, Mail, CreditCard } from "lucide-react";

function Input({ placeholder }) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-xl"
      placeholder={placeholder}
    />
  );
}

function Button({ children }) {
  return (
    <button className="w-full bg-blue-600 text-white rounded-xl p-2 hover:bg-blue-700">
      {children}
    </button>
  );
}

export default function IEPIHub() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900"
        >
          IEPI Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 mb-8"
        >
          Where Innovative Entities meet Problem-solvers across every domain.
        </motion.p>

        <div className="mb-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Client Signup</h2>
          <Input placeholder="Organization Name" />
          <Input placeholder="Email" />
          <Input placeholder="Payment Method" />
          <Input placeholder="Sector (e.g., Engineering, Art, Finance...)" />
          <Button>Create Client Account</Button>
        </div>

        <div className="mb-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Member Signup</h2>
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Expertise Area (e.g., AI, Sculpture, etc.)" />
          <Button>Join as Member</Button>
        </div>

        <div id="contact" className="mt-12 p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <Input placeholder="Your Message or Inquiry" />
          <div className="mt-4">
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
