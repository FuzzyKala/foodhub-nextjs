import { useRouter, usePathname } from "next/navigation";

import PageLinkItem from "./PageLinkItem";

interface Link {
  href: string;
  label: string;
}
const links: Link[] = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/following", label: "Following" },
];

export default function PageLink() {
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
