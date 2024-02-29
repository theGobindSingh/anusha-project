import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "primereact/button";
import { homeWrapper, linkDiv } from "@/styles/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="page-wrapper" css={homeWrapper}>
      <span className="main-heading">Adoption</span>
      <div css={linkDiv}>
        <Link href="/adoption">
          <Button>Adoption</Button>
        </Link>
        <Link href="/listing">
          <Button>Listing</Button>
        </Link>
      </div>
    </section>
  );
}
