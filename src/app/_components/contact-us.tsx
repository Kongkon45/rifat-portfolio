"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUsSection = () => {
  return (
    <section id="contact" className="pt-10 md:pt-2 pb-2 relative w-full overflow-hidden bg-white dark:bg-slate-950 site-section">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-[-40px] top-40 h-[90%] w-64 hidden lg:block"
          viewBox="0 0 100 1000"
          fill="none"
          stroke="#FF7639"
          strokeWidth="1.5"
        >
          <path d="M50 0 C 100 150 0 300 50 450 C 100 600 0 750 50 900 C 100 1050 0 1200 50 1350" />
        </motion.svg>

        <div
          className="absolute right-10 top-40 w-48 h-80 opacity-15 hidden lg:block"
          style={{
            backgroundImage: 'radial-gradient(#8A63E5 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="site-container container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT SIDE: Avatar & Visuals */}
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px]"
            >
              {/* Stars on the left */}
              <div className="absolute left-[-20px] top-[20%] z-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFD700" className="opacity-80">
                  <path d="M12 1L14.39 8.26L22 9.27L16.5 14.14L18.18 21.02L12 17.77L5.82 21.02L7.5 14.14L2 9.27L9.61 8.26L12 1Z" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" className="opacity-60 mt-4 ml-8">
                  <path d="M12 1L14.39 8.26L22 9.27L16.5 14.14L18.18 21.02L12 17.77L5.82 21.02L7.5 14.14L2 9.27L9.61 8.26L12 1Z" />
                </svg>
              </div>

              {/* Main Avatar */}
              <Image
                src="/assets/images/contact_bg.png"
                alt="Contact Avatar"
                width={500}
                height={500}
                className="w-full h-auto object-contain relative z-10"
              />

              {/* Message Bubble on the right of head */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[-10%] w-[100px] md:w-[130px] z-10"
              >
                <Image
                  src="/assets/images/message_bubble.png"
                  alt="Message"
                  width={150}
                  height={150}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Contact Form Card */}
          <div className="w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-[24px] p-4 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 dark:border-slate-800"
            >
              <form className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Name</label>
                  <Input
                    placeholder="enter your name"
                    className="h-14 rounded-xl bg-[#FFF8F6] dark:bg-slate-900 dark:border-slate-700 border border-[#FFEDE9] text-slate-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 px-5 focus-visible:ring-1 focus-visible:ring-orange-200"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Email</label>
                  <Input
                    placeholder="you@gmail.com"
                    className="h-14 rounded-xl bg-[#FFF8F6] dark:bg-slate-900 dark:border-slate-700 border border-[#FFEDE9] text-slate-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 px-5 focus-visible:ring-1 focus-visible:ring-orange-200"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] rounded-xl bg-[#FFF8F6] dark:bg-slate-900 dark:border-slate-700 border border-[#FFEDE9] text-slate-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 p-5 focus-visible:ring-1 focus-visible:ring-orange-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full h-11 md:h-12 lg:h-14 bg-[#FF7E47] hover:bg-[#F26D35] text-white text-lg font-bold rounded-xl shadow-lg shadow-orange-100 transition-all duration-300">
                  Contact Me
                </Button>
              </form>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                {[
                  { icon: <FaFacebookF className="w-5 h-5" />, color: "bg-[#1877F2]", shadow: "shadow-blue-100" },
                  { icon: <IoLogoWhatsapp className="w-6 h-6" />, color: "bg-[#25D366]", shadow: "shadow-green-100" },
                  { icon: <FaLinkedinIn className="w-5 h-5" />, color: "bg-[#0A66C2]", shadow: "shadow-blue-100" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-md ${item.shadow} transition-all`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;