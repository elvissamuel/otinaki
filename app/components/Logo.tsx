import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-20 w-auto" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Otinaki Limited"
      width={200}
      height={100}
      className={className}
      priority
    />
  );
}
