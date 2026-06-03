"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, BarChart3, Trophy, Settings } from "lucide-react"

const navItems = [
  { label: "Home", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Stats", icon: BarChart3 },
  { label: "Awards", icon: Trophy },
  { label: "Settings", icon: Settings },
]

export default function MobileNav() {
  const [active, setActive] = useState("Home")

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0e1318] border-t border-[#1e2832]">
      <ul className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label

          return (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="flex flex-col items-center gap-1 px-3 py-1"
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-bg"
                      className="absolute -inset-2 rounded-xl bg-[#141b22]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={20}
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-cyan-400" : "text-[#5a6a7a]"
                    }`}
                  />
                </div>
                <span className={`text-[10px] ${isActive ? "text-cyan-400" : "text-[#3a4a5a]"}`}>
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}