import { Navbar } from "@/app/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mrjfrcdo",
};

export default function Page() {
  return (
    <div className="px-6">
      <div className="container mx-auto">
        <Navbar />
      </div>
    </div>
  );
}
