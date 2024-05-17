// components/LoadingDetails.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function LoadingDetails() {
  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-20">
      <Card className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/3 p-4">
          <Skeleton className="w-full h-64" />
        </div>
        <CardContent className="p-4 md:w-2/3 md:pl-8 space-y-4">
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </CardContent>
      </Card>
    </div>
  );
}
