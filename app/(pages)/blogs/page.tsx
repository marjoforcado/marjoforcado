import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { Button } from "@/shadcn/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh_-_4rem_-_1rem)]">
      <div className="container flex flex-col lg:flex-row py-10 px-4 mx-auto">
        <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
          <AspectRatio className="size-full overflow-hidden relative z-10">
            <Image
              src="/images/image-1.jpg"
              alt="image"
              className="object-cover object-bottom"
              fill
            />
          </AspectRatio>
        </div>
        <div className="w-full h-80 p-8 lg:p-16">
          <div className="flex flex-col gap-3">
            <p className="text-lg">System Design</p>
            <p className="font-semibold text-4xl">
              How I architected Beensprout to scale.
            </p>
            <p className="text-sm">July 18, 2025</p>
            <Button size="sm" className="self-start">
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
