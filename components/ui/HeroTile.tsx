import { Flame } from "lucide-react"

const STUDENT_NAME = "Alex"
const STREAK_DAYS = 14

export default function HeroTile() {
  return (
    <article className="relative rounded-2xl overflow-hidden noise-overlay glow-border bg-[#0e1318] border border-[#1e2832] p-6 md:p-8">
      {/* Background glow blob */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, #3b82f6 50%, transparent 70%)",
        }}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[#5a6a7a] text-xs tracking-widest uppercase mb-2">
            Welcome back
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {STUDENT_NAME},<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              keep going.
            </span>
          </h1>
          <p className="text-[#5a6a7a] text-sm mt-3 max-w-xs">
            You&apos;re making steady progress. Your consistency is paying off.
          </p>
        </div>

        {/* Streak counter */}
        <div className="flex items-center gap-3 bg-[#141b22] border border-[#1e2832] rounded-xl px-5 py-4 shrink-0">
          <Flame size={28} className="text-orange-400" />
          <div>
            <p className="text-2xl font-bold text-white">{STREAK_DAYS}</p>
            <p className="text-[#5a6a7a] text-xs">day streak</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-6 mt-8 pt-6 border-t border-[#1e2832]">
        <div>
          <p className="text-xl font-bold text-white">4</p>
          <p className="text-[#5a6a7a] text-xs">Active Courses</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">127h</p>
          <p className="text-[#5a6a7a] text-xs">Total Study Time</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">89%</p>
          <p className="text-[#5a6a7a] text-xs">Avg. Score</p>
        </div>
      </div>
    </article>
  )
}