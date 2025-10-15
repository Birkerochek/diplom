import { memo } from "react";
import styles from "../../../EventPageWidgets.module.scss";

type InfoBadgeProps = {
  icon: React.ReactNode;
  value: string;
  href?: string;
};

const InfoBadgeBase = ({ icon, value, href }: InfoBadgeProps) => {
  const content = (
    <span className={styles.infoBadge}>
      {icon}
      {value}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={styles.infoBadgeLink}>
        {content}
      </a>
    );
  }

  return content;
};

 export const InfoBadge = memo(InfoBadgeBase);
