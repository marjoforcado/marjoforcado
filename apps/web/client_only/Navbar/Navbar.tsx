"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shadcn/components/ui/navigation-menu";
import styles from "./styles.module.scss";
import { Brand } from "@/app/components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Brand />
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blogs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <i className="block md:hidden ri-menu-line ri-xl" />
    </div>
  );
};
