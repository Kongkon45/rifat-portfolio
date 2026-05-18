"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Phone, Mail, X } from "lucide-react"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaFacebookMessenger } from "react-icons/fa"

export default function ContactFab() {
  const [open, setOpen] = useState(false)

  const items = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/",
      bg: "bg-emerald-400",
      icon: <IoLogoWhatsapp className="w-5 h-5 text-white" />,
    },
    {
      id: "messenger",
      label: "Messenger",
      href: "https://m.me/",
      bg: "bg-blue-500",
      icon: <FaFacebookMessenger className="w-4 h-4 text-white" />,
    },
    {
      id: "phone",
      label: "Call",
      href: "tel:+1234567890",
      bg: "bg-emerald-400",
      icon: <Phone className="w-4 h-4 text-white" />,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:hello@example.com",
      bg: "bg-rose-400",
      icon: <Mail className="w-4 h-4 text-white" />,
    },
  ]

  return (
    <div className="fixed right-6 bottom-16 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col items-center gap-3"
          >
            {items.map((it, idx) => (
              <motion.a
                key={it.id}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: idx * 0.04 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl ${it.bg} hover:scale-105 transform-gpu transition-all`}
                aria-label={it.label}
              >
                {it.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <button
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-2xl flex items-center justify-center text-white transform-gpu transition-all hover:scale-105 active:scale-95"
        >
          <motion.span
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: open ? 180 : 0, scale: open ? 0.96 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-center"
          >
            {open ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
          </motion.span>
        </button>

        {!open && (
          <div className="w-32 hidden md:flex absolute right-full top-1/2 -translate-y-1/2">
            <div className="rounded-full bg-white/95 dark:bg-slate-900/95 px-4 py-2 shadow-xl text-slate-800 dark:text-slate-100 text-sm font-semibold select-none">
              Contact us
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
