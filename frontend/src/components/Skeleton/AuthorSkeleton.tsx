export default function AuthorSkeleton() {
  return (
    <div className="mx-auto grid max-w-[85rem] grid-cols-1 pb-8 md:grid-cols-[auto_1fr] md:gap-16">
      <div className="shimmer mx-auto size-64 -translate-y-16 rounded-full bg-gray-300 md:size-52"></div>

      <div className="flex flex-col items-center md:items-start">
        <div className="shimmer mb-4 h-8 w-3/4 rounded bg-gray-300 py-8"></div>
        {Array.from({ length: 5 }, (_, i) => (
          <div className="shimmer mb-4 h-4 w-full rounded bg-gray-200" key={i}></div>
        ))}
        <div className="shimmer h-4 w-4/6 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
