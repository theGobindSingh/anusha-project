import Link from "next/link";
import { homeWrapper, linkDiv } from "@/styles/home";
import { Button } from "@mui/material";

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
        <Link href="/takeaction">
          <Button>Take Action(RESCUE)</Button>
        </Link>
      </div>
    </section>
  );
}
