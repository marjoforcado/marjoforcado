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
    <Card className="border-0 shadow-none rounded-none p-0 space-y-2">
      <CardHeader className="p-0">
        <Text variant="muted">March 09, 2024</Text>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, harum?
        </Text>
      </CardContent>
      <CardFooter className="p-0">
        <Text>Footer</Text>
      </CardFooter>
    </Card>
  );
};
