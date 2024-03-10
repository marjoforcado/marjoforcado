import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";

export const NewsLetterForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          <i className="ri-mail-line" /> Stay up to date
        </CardTitle>
        <CardDescription>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex w-full items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
};
