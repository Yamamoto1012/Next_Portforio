import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
        </div>
        <ul>
          <li><Link href="/product">product</Link></li>
          <li><Link href="/history">history</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/blog">blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}