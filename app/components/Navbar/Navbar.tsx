import { Button } from "@/shadcn/components/ui/button";
import { HamburgerIcon } from "lucide-react";
import { Brand } from "../Brand";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Brand />
      <Button variant="ghost" className="size-10">
        <HamburgerIcon className="size-8" />
      </Button>
    </nav>
  );
}
