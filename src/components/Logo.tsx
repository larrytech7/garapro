import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
  onDark?: boolean;
};

export function Logo({
  className,
  priority = false,
  alt = "GaraPro",
  onDark = false,
}: LogoProps) {
  return (
    <Image
      src={onDark ? "/logo-on-dark.png" : "/logo.png"}
      alt={alt}
      width={680}
      height={864}
      quality={95}
      priority={priority}
      className={className}
    />
  );
}
