// components/LoadingHome.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingHome() {
  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <Skeleton className="w-full h-64" />
            <div className="p-4 space-y-2">
              <Skeleton className="w-3/4 h-6" />
              <Skeleton className="w-1/2 h-4" />
              <Skeleton className="w-1/3 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
