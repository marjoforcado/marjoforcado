import { Navbar } from "@/app/components/Navbar";
import { Particles } from "@/shadcn/components/magicui/particles";
import { Calendar } from "@/shadcn/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shadcn/components/ui/sheet";
import { Metadata } from "next";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "mrjfrcdo",
};

export default function Layout({ children }: TProps) {
  return (
    <Sheet>
      <div className="relative">
        <div className="space-y-4">
          <div className="h-16 flex flex-col justify-center px-6 sticky top-0 z-30 bg-white">
            <div className="container mx-auto">
              <Navbar />
            </div>
          </div>
          {children}
          <footer className="h-20 flex items-center px-6">
            <div className="container mx-auto flex items-center justify-end">
              <span className="text-muted-foreground text-sm">
                Last update April 2025
              </span>
            </div>
          </footer>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#000"
          refresh
        />
      </div>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Request a meeting</SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-center">
          <Calendar />
        </div>
        <div className="h-full flex items-center justify-center">
          <p className="text-sm">
            Something went wrong, please try again later.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
