import { Header } from "@/client_only/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mrjfrcdo",
};

export default function Page() {
  return (
    <div className="px-6">
      <div className="max-w-5xl mx-auto my-10">
        <Header />
      </div>
    </div>
  );
}
