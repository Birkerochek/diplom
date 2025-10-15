"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { Typography, Avatar } from "@shared/ui";
import styles from "./EventPageWidgets.module.scss";

const MAILTO_PREFIX = "mailto:";

type OrganizerCardWidgetProps = {
  organizer: {
    name: string;
    email: string;
  };
};

export const OrganizerCardWidget = ({ organizer }: OrganizerCardWidgetProps) => {
  return (
    <section className={styles.section}>
      <Typography variant="h3" className={styles.sectionHeaderTitle}>
        Организатор
      </Typography>

      <div className={styles.organizerCard}>
        <Avatar name={organizer.name} size="md"  />
        <div className={styles.organizerInfo}>
          <Typography variant="bodyBold">{organizer.name}</Typography>
          <Typography variant="body" color="gray">
            Организатор
          </Typography>
        </div>
      </div>

      <div className={styles.contactList}>
        <ContactLink
          icon={<Mail size={16} />}
          label="Email"
          value={organizer.email}
          href={`${MAILTO_PREFIX}${organizer.email}`}
        />
      </div>
    </section>
  );
};

type ContactLinkProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
};

const ContactLink = ({ icon, label, value, href }: ContactLinkProps) => (
  <Link href={href} className={styles.contactItem}>
    <span className={styles.contactItemIcon}>{icon}</span>
    <div className={styles.contactItemContent}>
      <Typography variant="bodyBold">{label}</Typography>
      <Typography variant="body" color="gray">
        {value}
      </Typography>
    </div>
  </Link>
);
