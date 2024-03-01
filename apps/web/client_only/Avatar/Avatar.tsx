"use client";

import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";

type TProps = {
  src: string;
  alt: string;
  fallBack?: string;
  className?: string;
};

export const Avatar = (props: TProps) => {
  const { fallBack, className, ...rest } = props;

  return (
    <ShadAvatar className={className}>
      <AvatarImage {...rest} />
      {fallBack && <AvatarFallback>{fallBack}</AvatarFallback>}
    </ShadAvatar>
  );
};
