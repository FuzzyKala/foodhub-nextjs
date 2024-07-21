import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import PageLinkItem from "./PageLinkItem";
import { IoHomeOutline, IoStarOutline, IoPeopleOutline } from "react-icons/io5"; // Import icons

interface Link {
  href: string;
  label: string;
  icon: ReactNode;
}
const links: Link[] = [
  { href: "/", label: "Home", icon: <IoHomeOutline size={24} /> },
  { href: "/trending", label: "Trending", icon: <IoStarOutline size={24} /> },
  {
    href: "/following",
    label: "Following",
    icon: <IoPeopleOutline size={24} />,
  },
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
