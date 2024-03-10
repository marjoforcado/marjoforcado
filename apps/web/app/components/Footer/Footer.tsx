import { Button } from "@/shadcn/components/ui/button";
import Link from "next/link";
import { Text } from "..";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-5">
      <div className="space-x-3">
        <Link href="/">
          <Button className="font-semibold" variant="link">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button className="font-semibold" variant="link">
            About
          </Button>
        </Link>
        <Link href="/blogs">
          <Button className="font-semibold" variant="link">
            Blogs
          </Button>
        </Link>
        <Link href="/projects">
          <Button className="font-semibold" variant="link">
            Projects
          </Button>
        </Link>
      </div>
      <Text variant="muted">© 2024 Marjo Forcado. All rights reserved.</Text>
    </div>
  );
};
