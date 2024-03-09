import { Separator } from "@/shadcn/components/ui/separator";
import { IntroductionCard } from "./components";

export default function Page() {
  return (
    <div className="container flex flex-col gap-5 mx-auto">
      <IntroductionCard />
      <Separator />
    </div>
  );
}
