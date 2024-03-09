import { Separator } from "@/shadcn/components/ui/separator";
import { ArticleCard, IntroductionCard, Text } from "./components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function Page() {
  return (
    <div className="container flex flex-col gap-5 mx-auto">
      <IntroductionCard />
      <Separator />
      <div className="space-y-3">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
