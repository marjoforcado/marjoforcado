import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Text } from "..";
import Link from "next/link";
import { format } from "date-fns";

type TProps = {
  title: string;
  createdAt: Date;
  children: string;
  description: string;
  href: string;
};

export const ArticleCard = (props: TProps) => {
  const { title, createdAt, description, children } = props;

  return (
    <Link href="/blogs" className="block">
      <Card className="border-0 shadow-none p-4 space-y-2 hover:bg-slate-50">
        <CardHeader className="p-0 space-y-2">
          <Text variant="muted">{format(createdAt, "PP")}</Text>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Text>{children}</Text>
        </CardContent>
        <CardFooter className="p-0">
          <Text variant="small" className="p-0 font-bold text-teal-600">
            Read more
          </Text>
        </CardFooter>
      </Card>
    </Link>
  );
};
