import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-5 h-5 bg-red-700 rounded-sm" />
    </Link>
  );
}
