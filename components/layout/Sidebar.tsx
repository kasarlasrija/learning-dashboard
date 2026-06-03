"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Analytics", icon: BarChart3 },
  { label: "Achievements", icon: Trophy },
  { label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <motion.nav
      animate={{ width: collapsed ? 64 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-full bg-[#0e1318] border-r border-[#1e2832] overflow-hidden shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1e2832]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0">
          <Zap size={16} className="text-black" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="font-bold text-sm tracking-wider text-white whitespace-nowrap"
            >
              LEARN OS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <ul className="flex flex-col gap-1 p-2 flex-1 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left group"
              >
                {/* Sliding highlight — layoutId makes it animate between items */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 rounded-lg bg-[#141b22]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Left accent line */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-line"
                    className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={18}
                  className={`relative z-10 shrink-0 transition-colors ${
                    isActive ? "text-cyan-400" : "text-[#5a6a7a] group-hover:text-[#8a9aaa]"
                  }`}
                />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className={`relative z-10 text-sm whitespace-nowrap transition-colors ${
                        isActive ? "text-white font-medium" : "text-[#5a6a7a] group-hover:text-[#8a9aaa]"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Collapse button */}
      <div className="p-2 border-t border-[#1e2832]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg text-[#5a6a7a] hover:text-white hover:bg-[#141b22] transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </motion.nav>
  )
}