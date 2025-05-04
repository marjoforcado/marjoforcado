import { Navbar } from "@/app/components/Navbar";
import { Particles } from "@/shadcn/components/magicui/particles";
import { SmoothCursor } from "@/shadcn/components/ui/smooth-cursor";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function Layout({ children }: TProps) {
  return (
    <div className="h-screen relative">
      <div className="px-6">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      {children}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#000"
        refresh
      />
      <SmoothCursor
        cursor={
          <div className="size-5 rounded-full bg-primary relative">
            <span className="absolute top-5 text-center left-1/2 transform -translate-x-1/2">
              You
            </span>
          </div>
        }
      />
    </div>
  );
}
