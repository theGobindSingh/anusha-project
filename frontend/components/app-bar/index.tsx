import { hamburgerCss, headerCss, logoCss, navCss } from "@/components/app-bar/styles";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function ResponsiveAppBar() {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const clickHandler = () => {
    const hamburger = hamburgerRef.current;
    const nav = navRef.current;
    if (nav && hamburger) {
      nav.classList.toggle("nav-active");
      hamburger.classList.toggle("hamburger-active");
    }
  };
  return (
    <header css={headerCss}>
      <Link href="/">
        <Image src="/images/logo.jpg" alt="logo" height={60} width={60} priority css={logoCss} />
      </Link>
      <div css={hamburgerCss} onClick={clickHandler} ref={hamburgerRef}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <nav ref={navRef} css={navCss}>
          <Link href="/">Home</Link>
          <Link href="/adoption">Adoption</Link>
          <Link href="/listing">Listing</Link>
          <Link href="/takeaction">Take Action</Link>
          <Link href="/health">Health</Link>
          <Link href="/wellness">Wellness</Link>
          <Link href="/petfriendly">Pet Friendly </Link>
          <Link href="/shop">Shop </Link>
        </nav>
      </div>
    </header>
  );
}
export default ResponsiveAppBar;
