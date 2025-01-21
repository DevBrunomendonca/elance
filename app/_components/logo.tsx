import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-elance.png"
        alt="Logo império das pickups"
        width={200}
        height={49}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
