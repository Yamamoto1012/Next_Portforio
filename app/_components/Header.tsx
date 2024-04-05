import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-2 w-full rounded-2xl bg-[#2C3333]">
        <Link href="/" className="hover:scale-105 duration-150">
          <Image
            src="/icon.jpeg"
            alt="ロゴ"
            width={60}
            height={60}
            className=" rounded-full"
          />
        </Link>

        <ul className="flex gap-3 mr-8 text-base text-white ">
          <li className="hover:border-b duration-75 p-1">
            <Link href="/product">product</Link>
          </li>
          <li className="hover:border-b duration-75 p-1">
            <Link href="/history">history</Link>
          </li>
          <li className="hover:border-b duration-75 p-1">
            <Link href="/about">about</Link>
          </li>
          <li className="hover:border-b duration-75 p-1">
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
