import { mainSidebar, sidebarLogoContainer } from "@/components/sidebar/styles";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside css={mainSidebar}>
      <Link href={"/"} css={sidebarLogoContainer}>
        <Image src={"/vercel.svg"} alt="" height={40} width={40} />
        <span className="text">My Paws Mitra</span>
      </Link>
      <div>
        <span>Menu</span>
        <nav></nav>
      </div>
    </aside>
  );
}
