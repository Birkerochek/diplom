import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container } from "@shared/ui";
import { PAGES } from "@shared/constants";

import s from "./VolunteerEventDetailsPage.module.scss";

export const VolunteerEventDetailsSkeleton = () => (
  <Container className={s.page}>
    <Link href={PAGES.VOLUNTEER_EVENTS} className={s.backLink} prefetch>
      <Skeleton width={140} height={18} />
    </Link>

    <header className={s.header}>
      <div className={s.header__top}>
        <div className={s.header__title}>
          <Skeleton width={260} height={36} />
          <Skeleton width={120} height={18} />
          <div className={s.header__chips}>
            <Skeleton width={120} height={24} />
            <Skeleton width={90} height={22} />
          </div>
        </div>
        <div className={s.statusRow}>
          <Skeleton width={110} height={28} />
          <Skeleton width={110} height={28} />
        </div>
      </div>
    </header>

    <section className={s.actions}>
      <div className={s.actions__row}>
        <div className={s.actions__info}>
          <Skeleton width={220} height={18} />
          <Skeleton width={180} height={14} />
        </div>
        <div className={s.actions__buttons}>
          <Skeleton width={140} height={40} />
          <Skeleton width={140} height={40} />
        </div>
      </div>
      <Skeleton width={240} height={14} />
    </section>

    <div className={s.layout}>
      <div className={s.layout__left}>
        <section className={s.actions}>
          <Skeleton width={200} height={24} />
          <Skeleton width="80%" height={16} />
          <Skeleton width="90%" height={14} />
          <Skeleton width="70%" height={14} />
        </section>
      </div>
      <aside className={s.layout__right}>
        <section className={s.actions}>
          <Skeleton width={140} height={20} />
          <Skeleton width="100%" height={8} />
          <Skeleton width="60%" height={14} />
        </section>
        <section className={s.actions}>
          <Skeleton width={120} height={18} />
          <Skeleton width={160} height={14} />
        </section>
      </aside>
    </div>
  </Container>
);
