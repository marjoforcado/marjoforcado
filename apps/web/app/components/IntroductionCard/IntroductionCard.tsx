"use client";

import styles from "./styles.module.scss";
import { Text } from "..";
import { Avatar } from "@/client_only";

export const IntroductionCard = () => {
  return (
    <div className={styles["card"]}>
      <Avatar
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="h-16 w-16"
      />
      <Text variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, earum.
      </Text>
      <Text variant="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        voluptate harum repellendus neque cum aspernatur odio recusandae
        veritatis aliquid explicabo. Excepturi quas culpa illo at amet. Quam
        doloremque in quis.
      </Text>
    </div>
  );
};
