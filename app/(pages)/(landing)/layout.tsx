import { Navbar } from "@/app/components/Navbar";
import { Particles } from "@/shadcn/components/magicui/particles";
import { Metadata } from "next";
import { Fragment, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "mrjfrcdo",
};

export default function Layout({ children }: TProps) {
  return (
    <Fragment>
      <div className="space-y-4">
        <div className="h-16 flex flex-col justify-center px-6">
          <div className="container mx-auto">
            <Navbar />
          </div>
        </div>
        {children}
        <footer className="h-12 bg-black flex items-center">
          <div className="container mx-auto flex items-center justify-end">
            <span className="text-white text-sm">Last update April 2025</span>
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
    </Fragment>
  );
}
