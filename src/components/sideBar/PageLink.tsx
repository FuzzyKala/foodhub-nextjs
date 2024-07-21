import { useRouter, usePathname } from "next/navigation";
import styles from "@/components/sideBar/pageLink.module.css";

export default function PageLink() {
  const router = useRouter();
  const currentPage = usePathname();
  console.log("Current page:", currentPage);
  const handleLinkStyle = (page: string) => {
    return currentPage === page ? styles.activeLink : styles.inactiveLink;
  };

  return (
    <div>
      <div
        id="homeLink"
        className={`${styles.pageLink} ${handleLinkStyle("/")}`}
        onClick={() => router.push("/")}
      >
        <p className="py-1 px-2">Home</p>
      </div>
      <div
        id="popularLink"
        className={`${styles.pageLink} ${handleLinkStyle("/popular")}`}
        onClick={() => router.push("/popular")}
      >
        <p className="py-1 px-2">Popular</p>
      </div>
      <div
        id="followingLink"
        className={`${styles.pageLink} ${handleLinkStyle("/following")}`}
        onClick={() => router.push("/following")}
      >
        <p className="py-1 px-2">Following</p>
      </div>
    </div>
  );
}
