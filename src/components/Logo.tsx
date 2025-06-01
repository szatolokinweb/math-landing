import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block hover:opacity-80 transition-opacity">
      <Image
        src="/math-logo.svg"
        alt="Math Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}
