import styles from "@/components/sideBar/PageLinkItem.module.css";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Link {
  href: string;
  label: string;
  icon: ReactNode;
}
interface PageLinkItemProps {
  currentPage: string;
  link: Link;
}

export default function PageLinkItem({ currentPage, link }: PageLinkItemProps) {
  const router = useRouter();
  const handleLinkStyle = (page: string): string => {
    return currentPage === page ? styles.activeLink : styles.inactiveLink;
  };

  return (
    <div
      className={`${styles.pageLink} ${handleLinkStyle(link.href)}`}
      onClick={() => router.push(link.href)}
      role="button"
      aria-label={`Navigate to ${link.label}`}
      tabIndex={0}
    >
      <div className="p-2">{link.icon}</div>
      <div className="p-2">
        <p className="">{link.label}</p>
      </div>
    </div>
  );
}
