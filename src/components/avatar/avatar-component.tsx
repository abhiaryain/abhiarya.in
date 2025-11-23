import Image from "next/image";
import type { ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PERSONAL_DATA } from "@/data/personal";
import { cn } from "@/lib/utils";

export function AvatarComponent({
  className,
  ...props
}: ComponentProps<typeof Avatar>) {
  return (
    <Avatar className={cn("rounded-2xl", className)} {...props}>
      <AvatarImage
        loading="lazy"
        src={PERSONAL_DATA.avatar}
        alt={PERSONAL_DATA.nickname}
      ></AvatarImage>
      <AvatarFallback>
        {/* Image as a fallback because Image component support optimizations, caching and blur-hash */}
        <Image
          src={PERSONAL_DATA.image}
          alt={PERSONAL_DATA.nickname}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="e6EfTi00~qM{_3_3-;xu4n9F00M{j[IUM{~qD%9F-;xu%MofRjxuD%"
          className="size-full object-cover"
          priority
        />
      </AvatarFallback>
    </Avatar>
  );
}
