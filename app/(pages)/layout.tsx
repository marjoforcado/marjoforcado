import { Navbar } from "@/app/components/Navbar";
import { AppCalendar } from "@/client_only/AppCalendar";
import { Particles } from "@/shadcn/components/magicui/particles";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shadcn/components/ui/sheet";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
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
          <AppCalendar />
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
