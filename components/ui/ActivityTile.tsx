"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

function generateActivityData() {
  const fixed = [
    [0, 1, 0, 2, 1, 0, 3],
    [1, 0, 2, 0, 1, 3, 0],
    [2, 1, 0, 3, 0, 1, 2],
    [0, 0, 1, 2, 3, 4, 1],
    [1, 2, 0, 0, 1, 0, 2],
    [3, 1, 2, 0, 1, 2, 0],
    [0, 2, 1, 3, 0, 1, 0],
    [1, 0, 0, 2, 1, 3, 2],
    [2, 3, 1, 0, 2, 0, 1],
    [0, 1, 2, 1, 0, 2, 3],
  ]
  return fixed
}

function getColor(level: number) {
  const colors = ["#1e2832", "#0e4a5a", "#0a6e80", "#00a8c8", "#00d4ff"]
  return colors[level]
}

export default function ActivityTile() {
  const activityData = useMemo(() => generateActivityData(), [])

  return (
    <article className="rounded-2xl bg-[#0e1318] border border-[#1e2832] p-5 noise-overlay glow-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-white text-sm">Learning Activity</h2>
        <span className="text-[#5a6a7a] text-xs">Last 10 weeks</span>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-1 min-h-[88px]">
        {activityData.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1">
            {week.map((level, dayIdx) => (
              <motion.div
                key={dayIdx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (weekIdx * 7 + dayIdx) * 0.005,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-[#5a6a7a] text-[10px]">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-2.5 h-2.5 rounded-sm"
            style={{ backgroundColor: getColor(level) }}
          />
        ))}
        <span className="text-[#5a6a7a] text-[10px]">More</span>
      </div>
    </article>
  )
}