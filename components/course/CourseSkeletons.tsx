function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-[#0e1318] border border-[#1e2832] p-5">
      <div className="skeleton-shimmer w-10 h-10 rounded-xl mb-4" />
      <div className="skeleton-shimmer h-3 rounded w-4/5 mb-2" />
      <div className="skeleton-shimmer h-3 rounded w-3/5 mb-6" />
      <div className="flex justify-between mb-2">
        <div className="skeleton-shimmer h-2 rounded w-16" />
        <div className="skeleton-shimmer h-2 rounded w-8" />
      </div>
      <div className="skeleton-shimmer h-1.5 rounded-full w-full" />
    </div>
  )
}

export default function CourseSkeletons() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  )
}