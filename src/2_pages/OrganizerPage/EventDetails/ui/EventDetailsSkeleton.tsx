import { Container } from "@shared/ui";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from './EventDetailsPage.module.scss'
import { PAGES } from "@shared/constants";
export const EventDetailsSkeleton = () => (
  <Container className={s.page}>
    <Link href={PAGES.ORGANIZER_EVENTS} className={s.backLink} prefetch>
      <Skeleton width={160} height={18} />
    </Link>

    <header className={s.header}>
      <div className={s.header__titleBlock}>
        <Skeleton width={280} height={40} />
        <div className={s.header__statusControls}>
          <Skeleton width={120} height={24} />
          <Skeleton width={160} height={40} />
        </div>
      </div>

      <div className={s.header__actions}>
        <Skeleton width={120} height={40} />
        <Skeleton width={120} height={40} />
      </div>
    </header>

    <div className={s.layout}>
      <div className={s.layout__left}>
        <section className={s.section}>
          <Skeleton width={220} height={28} />
          <div className={s.infoGrid}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={s.infoItem}>
                <div className={s.infoItem__icon}>
                  <Skeleton width={80} height={40} />
                </div>
                <div className={s.infoItem__content}>
                  <Skeleton width="60%" height={16} />
                  <Skeleton width="80%" height={14} />
                </div>
              </div>
            ))}
          </div>
          <div className={s.requirementsBlock}>
            <Skeleton width="40%" height={18} />
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} width="90%" height={14} />
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.section__header}>
            <Skeleton width={240} height={24} />
            <Skeleton width={90} height={24} />
          </div>
          <div className={s.volunteerList}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={s.volunteerCard}>
                <div className={s.volunteerCard__header}>
                  <div className={s.volunteerCard__avatar}>
                    <Skeleton width={32} height={32} circle />
                  </div>
                  <div className={s.volunteerCard__meta}>
                    <Skeleton width={160} height={16} />
                    <Skeleton width={120} height={14} />
                  </div>
                </div>
                <div className={s.volunteerCard__infoRow}>
                  <Skeleton width="45%" height={14} />
                  <Skeleton width="35%" height={14} />
                </div>
                <div className={s.volunteerCard__actions}>
                  <Skeleton width={120} height={32} />
                  <Skeleton width={120} height={32} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className={s.layout__right}>
        <section className={s.section}>
          <div className={s.progressBlock__header}>
            <Skeleton width={140} height={20} />
            <Skeleton width={60} height={20} />
          </div>
          <div className={s.progressBlock}>
            <Skeleton width="100%" height={8} />
          </div>
          <div className={s.statsList}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={s.statRow}>
                <Skeleton width="45%" height={14} />
                <Skeleton width="25%" height={14} />
              </div>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.organizer}>
            <div className={s.organizer__avatar}>
              <Skeleton width={32} height={32} circle />
            </div>
            <div className={s.organizer__info}>
              <Skeleton width={140} height={16} />
              <Skeleton width={100} height={14} />
            </div>
          </div>
          <div className={s.contactList}>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className={s.contactItem}>
                <div className={s.contactItem__icon}>
                  <Skeleton width={20} height={20} />
                </div>
                <div className={s.contactItem__content}>
                  <Skeleton width={160} height={14} />
                  <Skeleton width={120} height={12} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  </Container>
);
