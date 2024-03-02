import { Separator } from "@/shadcn/components/ui/separator";
import { IntroductionCard } from "./components";

export default function Page() {
  return (
    <div className="container flex flex-col gap-5">
      <IntroductionCard />
      <Separator />
    </div>
  );
}
