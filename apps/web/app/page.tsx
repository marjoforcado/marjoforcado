import { Separator } from "@/shadcn/components/ui/separator";
import { ArticleCard, IntroductionCard, Text } from "./components";
import { NewsLetterForm } from "@/client_only/forms";

export default function Page() {
  return (
    <div className="container flex flex-col gap-5 mx-auto">
      <IntroductionCard />
      <Separator />
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-5">
          <ArticleCard
            title="Title"
            createdAt={new Date()}
            description="Description"
            href="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            exercitationem.
          </ArticleCard>
          <ArticleCard
            title="Title"
            createdAt={new Date()}
            description="Description"
            href="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            exercitationem.
          </ArticleCard>
          <ArticleCard
            title="Title"
            createdAt={new Date()}
            description="Description"
            href="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            exercitationem.
          </ArticleCard>
          <ArticleCard
            title="Title"
            createdAt={new Date()}
            description="Description"
            href="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            exercitationem.
          </ArticleCard>
          <ArticleCard
            title="Title"
            createdAt={new Date()}
            description="Description"
            href="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            exercitationem.
          </ArticleCard>
        </div>
        <div>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
