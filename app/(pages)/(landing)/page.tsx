"use client";

import { Header } from "@/client_only/Header";
import { SmoothCursor } from "@/shadcn/components/ui/smooth-cursor";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <div className="h-[calc(100vh_-_4rem)] p-6 py-10">
        <div className="max-w-5xl mx-auto">
          <Header />
        </div>
      </div>
      <SmoothCursor
        cursor={
          <div className="size-5 rounded-full bg-primary relative">
            <span className="absolute top-5 text-center left-1/2 transform -translate-x-1/2">
              You
            </span>
          </div>
        }
      />
    </Fragment>
  );
}
