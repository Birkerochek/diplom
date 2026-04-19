"use client";

import Link from "next/link";

import { useSession } from "@shared/api";
import { PAGES, ROLES } from "@shared/constants";
import { Container, Logo } from "@shared/ui";

import s from "./Footer.module.scss";

const ORGANIZER_LINKS = [
  {
    href: PAGES.ORGANIZER_DASHBOARD,
    label: "Кабинет организатора",
  },
  {
    href: PAGES.ORGANIZER_EVENTS,
    label: "Мои мероприятия",
  },
];

const VOLUNTEER_LINKS = [
  {
    href: PAGES.VOLUNTEER_DASHBOARD,
    label: "Дашборд волонтёра",
  },
  {
    href: PAGES.VOLUNTEER_EVENTS,
    label: "Доступные мероприятия",
  },
  {
    href: PAGES.VOLUNTEER_APPLICATIONS,
    label: "Мои заявки",
  },
  {
    href: PAGES.VOLUNTEER_ATTENDED_EVENTS,
    label: "Посещённые события",
  },
];

export const Footer = () => {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const quickLinks =
    role === ROLES.ORGANIZER
      ? ORGANIZER_LINKS
      : role === ROLES.VOLUNTEER
        ? VOLUNTEER_LINKS
        : [];

  return (
    <div className={s.footerWrap}>
      <Container className={s.footer}>
        <div className={s.footer__brand}>
          <Logo />
          <p className={s.footer__description}>
            Платформа для учёта волонтёрских часов, координации событий и прозрачной
            коммуникации между волонтёрами и организаторами.
          </p>
        </div>

        <div className={s.footer__content}>
          {quickLinks.length ? (
            <nav className={s.footer__nav} aria-label="Навигация по роли">
              <span className={s.footer__title}>
                {role === ROLES.ORGANIZER ? "Разделы организатора" : "Разделы волонтёра"}
              </span>
              <div className={s.footer__links}>
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={s.footer__link}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}

          <div className={s.footer__meta}>
            <Link href={PAGES.PRIVACY} className={s.footer__policyLink}>
              Политика конфиденциальности
            </Link>
            <p className={s.footer__text}>
              © 2026 ВолонтёрТайм. Все права защищены. Делаем мир лучше вместе.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
