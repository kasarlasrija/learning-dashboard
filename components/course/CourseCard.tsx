"use client"

import { motion } from "framer-motion"
import { Course } from "@/types"
import DynamicIcon from "@/components/ui/DynamicIcon"
import ProgressBar from "@/components/ui/ProgressBar"

const courseColors = [
  { gradient: "from-cyan-500/20 to-blue-600/10", accent: "#00d4ff", iconBg: "#00d4ff20" },
  { gradient: "from-purple-500/20 to-pink-600/10", accent: "#8b5cf6", iconBg: "#8b5cf620" },
  { gradient: "from-emerald-500/20 to-teal-600/10", accent: "#10b981", iconBg: "#10b98120" },
  { gradient: "from-orange-500/20 to-amber-600/10", accent: "#f59e0b", iconBg: "#f59e0b20" },
]

interface CourseCardProps {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const colorScheme = courseColors[index % courseColors.length]

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl bg-[#0e1318] border border-[#1e2832] p-5 overflow-hidden noise-overlay glow-border cursor-pointer"
    >
      {/* Gradient background */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-60`}
      />
      <div
        aria-hidden
        className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-20"
        style={{ backgroundColor: colorScheme.accent }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: colorScheme.iconBg }}
      >
        <DynamicIcon name={course.icon_name} size={18} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-white text-sm leading-snug mb-4">
        {course.title}
      </h3>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[#5a6a7a] text-xs">Progress</span>
          <span className="text-xs font-mono font-medium" style={{ color: colorScheme.accent }}>
            {course.progress}%
          </span>
        </div>
        <ProgressBar value={course.progress} color={colorScheme.accent} />
      </div>
    </motion.article>
  )
}