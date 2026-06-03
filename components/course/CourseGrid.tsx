"use client"
import {motion} from "framer-motion";
import {Course} from "@/types";
import CourseCard from "./CourseCard";
import { AlertTriangle} from "lucide-react";
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show:{opacity: 1, y: 0,trasition:{
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
}

interface CourseGridProps {
  courses: Course[] | null
  error: string | null
}

export default function CourseGrid({ courses, error }: CourseGridProps) {
  if (error) {
    return (
      <div className="col-span-4 flex items-center gap-3 rounded-2xl bg-[#0e1318] border border-red-900/50 p-5 text-red-400">
        <AlertTriangle size={18} />
        <div>
          <p className="text-sm font-medium">Failed to load courses</p>
          <p className="text-xs text-red-400/60 mt-0.5">{error}</p>
        </div>
      </div>
    )
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-4 text-center py-12 text-[#5a6a7a]">
        <p className="text-sm">No courses found. Add some in your Supabase dashboard.</p>
      </div>
    )
  }

  return (
    <>
      {courses.map((course, idx) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
            delay: idx * 0.1,
          }}
        >
          <CourseCard course={course} index={idx} />
        </motion.div>
      ))}
    </>
  )
}