import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Text } from "..";

export const ArticleCard = () => {
  return (
    <Card className="border-0 shadow-none rounded-none">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, harum?
        </Text>
      </CardContent>
      <CardFooter>
        <Text>Footer</Text>
      </CardFooter>
    </Card>
  );
};
