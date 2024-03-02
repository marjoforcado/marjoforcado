"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { Text } from "..";
import { Avatar } from "@/client_only";
import { cn } from "@/lib/utils";

export const IntroductionCard = () => {
  return (
    <div className={styles["card"]}>
      <Avatar
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="h-16 w-16"
      />
      <Text variant="h1">
        X-Platform Engineer, Open Source Enthusiast, Content Creator, Pizza
        Lover
      </Text>
      <Text variant="lead">
        My name is Marjo Forcado a cross platform engineer based on The
        Philippines. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis, assumenda?
      </Text>
      <div className="flex gap-3">
        <i className="ri-twitter-x-line ri-xl" />
        <i className="ri-instagram-line ri-xl" />
        <i className="ri-linkedin-box-fill ri-xl" />
        <i className="ri-github-fill ri-xl" />
      </div>
    </div>
  );
};
