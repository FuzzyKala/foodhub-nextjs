import { useRouter, usePathname } from "next/navigation";
import styles from "@/components/sideBar/pageLink.module.css";
import PageLinkItem from "./PageLinkItem";

interface Link {
  href: string;
  label: string;
}
const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/popular", label: "Popular" },
  { href: "/following", label: "Following" },
];

export default function PageLink() {
  const router = useRouter();
  const currentPage = usePathname();
  console.log("Current page:", currentPage);

  return (
    <div id="pagesContainer">
      {links.map((link) => (
        <PageLinkItem key={link.href} currentPage={currentPage} link={link} />
      ))}
    </div>
  );
}
