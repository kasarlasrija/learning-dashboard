import { Suspense } from "react"
import Sidebar from "@/components/layout/Sidebar"
import MobileNav from "@/components/layout/MobileNav"
import HeroTile from "@/components/ui/HeroTile"
import ActivityTile from "@/components/ui/ActivityTile"
import CoursesSection from "@/components/course/CoursesSection"
import CourseSkeletons from "@/components/course/CourseSkeletons"
import { BentoContainer, BentoItem } from "@/components/layout/BentoGrid"

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#080c10]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6">
        <header className="mb-6 flex items-center justify-between">
          <p className="text-[#5a6a7a] text-xs tracking-widest uppercase">
            Student Dashboard
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#5a6a7a] text-xs">Live</span>
          </div>
        </header>

        <BentoContainer>
          {/* Hero — full width */}
          <BentoItem className="col-span-1 md:col-span-2 lg:col-span-3">
            <HeroTile />
          </BentoItem>

          {/* Activity graph */}
          <BentoItem className="col-span-1 md:col-span-2">
            <ActivityTile />
          </BentoItem>

          {/* This week stats */}
          <BentoItem className="col-span-1">
            <article className="rounded-2xl bg-[#0e1318] border border-[#1e2832] p-5 noise-overlay glow-border h-full">
              <h2 className="font-semibold text-white text-sm mb-4">
                This Week
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Hours studied", value: "12.5h", bar: 62 },
                  { label: "Lessons done", value: "18", bar: 45 },
                  { label: "Quiz avg", value: "91%", bar: 91 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#5a6a7a]">{stat.label}</span>
                      <span className="text-white font-mono">{stat.value}</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#1e2832] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${stat.bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </BentoItem>

          {/* Courses from Supabase */}
          <BentoItem className="col-span-1 md:col-span-2 lg:col-span-3">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-white">Active Courses</h2>
                <span className="text-[#5a6a7a] text-xs">from Supabase ↗</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Suspense fallback={<CourseSkeletons />}>
                  <CoursesSection />
                </Suspense>
              </div>
            </section>
          </BentoItem>
        </BentoContainer>
      </main>

      <MobileNav />
    </div>
  )
}