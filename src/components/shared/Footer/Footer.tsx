"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-white via-[#FDFDFA] to-[#F2F9F2] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 max-w-3xl text-center text-slate-900 dark:text-slate-100">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-slate-100 tracking-tight">
            Let&apos;s Create Something
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#FF7639] mt-2">
            Extraordinary
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Have a project in mind? Let&apos;s discuss how thoughtful design can transform
          your vision into a product users love.
        </motion.p>

        {/* Connect With Me */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <h4 className="text-lg font-bold text-slate-950 dark:text-slate-100">
            Connect With <span className="text-[#FF7639]">Me</span>
          </h4>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, color: "bg-[#1877F2]", shadow: "shadow-blue-100" },
              { icon: <IoLogoWhatsapp />, color: "bg-[#25D366]", shadow: "shadow-green-100" },
              { icon: <FaLinkedinIn />, color: "bg-[#0A66C2]", shadow: "shadow-blue-100" },
              { icon: <FaBehance />, color: "bg-[#053EFF]", shadow: "shadow-blue-100" },
              { icon: <FaDribbble />, color: "bg-[#EA4C89]", shadow: "shadow-pink-100" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg ${item.shadow} border-2 border-white transition-all`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="#contact">
            <Button className="bg-[#FF7639] hover:bg-[#E6652D] text-white font-bold text-lg px-12 py-6 rounded-xl shadow-lg shadow-orange-100 w-[260px]">
              Hire Me
            </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-[#D4C4FF] text-[#8A63E5] hover:bg-[#F5F2FF] dark:border-slate-700 dark:text-slate-100 dark:hover:bg-white/10 font-bold text-lg px-10 py-6 rounded-xl border-2 w-[260px] flex items-center justify-center gap-2"
            >
              Download Resume <LuDownload className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;