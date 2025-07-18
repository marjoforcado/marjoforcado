import { AspectRatio } from "@/shadcn/components/ui/aspect-ratio";
import { Button } from "@/shadcn/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center">
      <div className="container flex h-80 p-4 mx-auto">
        <div className="w-full bg-gray-200 rounded-xl overflow-hidden">
          <AspectRatio
            ratio={16 / 9}
            className="size-full overflow-hidden relative"
          >
            <Image
              src="/images/image-1.jpg"
              alt="image"
              className="object-cover object-bottom"
              fill
            />
          </AspectRatio>
        </div>
        <div className="w-full p-16">
          <div className="flex flex-col gap-3">
            <p className="text-lg">System Design</p>
            <p className="font-semibold text-4xl leading-8">
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
