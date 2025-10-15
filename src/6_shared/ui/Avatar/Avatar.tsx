"use client";

import Image from "next/image";
import clsx from "clsx";
import { firstChar } from "@shared/utils";
import s from "./Avatar.module.scss";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarSource = string | { url?: string | null } | null | undefined;

export type AvatarProps = {
  src?: AvatarSource;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
};

export const Avatar = ({ src, alt = "", name = "", size = "md", className }: AvatarProps) => {
  const imageUrl = resolveSrc(src);

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={alt || name}
        width={sizeMap[size]}
        height={sizeMap[size]}
        className={clsx(s.avatar, s[`avatar_${size}`], className)}
      />
    );
  }

  return (
    <div className={clsx(s.avatarFallback, s[`avatar_${size}`], className)}>
      {firstChar(name, { toUpperCase: true })}
    </div>
  );
};

const sizeMap: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 64,
};

const resolveSrc = (src: AvatarSource) => {
  if (!src) {
    return "";
  }

  if (typeof src === "string") {
    return src;
  }

  if (typeof src.url === "string") {
    return src.url;
  }

  return "";
};
