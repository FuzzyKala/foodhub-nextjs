import styles from "@/components/sideBar/PageLinkItem.module.css";
import { useRouter } from "next/navigation";

interface Link {
  href: string;
  label: string;
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
      <p className="py-1 px-2">{link.label}</p>
    </div>
  );
}
