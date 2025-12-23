"use client";

import Link from "next/link";
import { Calendar, ClipboardList, Heart, ListChecks, Users } from "lucide-react";

import { useSession, signOut } from "@shared/api";
import { PAGES, ROLES } from "@shared/constants";
import { Button, Container, Logo, Typography } from "@shared/ui";

import s from "./Header.module.scss";

export const Header = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" && Boolean(session?.user);
  const role = session?.user?.role;

  const dashboardPath =
    role === ROLES.ORGANIZER
      ? PAGES.ORGANIZER_DASHBOARD
      : role === ROLES.VOLUNTEER
        ? PAGES.VOLUNTEER_DASHBOARD
        : PAGES.LOGIN;

  const handleSignOut = () => {
    void signOut();
  };

  return (
    <Container>
      <div className={s.header}>
        <Logo /> фикс 1
        <div className={s.header__center}>
          {role === ROLES.ORGANIZER ? (
            <>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_DASHBOARD}>
                <Users size={18} />
                <Typography color="inherit">Организатор</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_EVENTS}>
                <Calendar size={18} />
                <Typography color="inherit">Мероприятия</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_REPORTS}>
                <ClipboardList size={18} />
                <Typography color="inherit">Отчеты</Typography>
              </Link>
            </>
          ) : role === ROLES.VOLUNTEER ? (
            <>
              <Link className={s.header__center_item} href={PAGES.VOLUNTEER_DASHBOARD}>
                <Heart size={18} />
                <Typography color="inherit">Мой дашборд</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.VOLUNTEER_EVENTS}>
                <Calendar size={18} />
                <Typography color="inherit">Мероприятия</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.VOLUNTEER_APPLICATIONS}>
                <ListChecks size={18} />
                <Typography color="inherit">Мои заявки</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.VOLUNTEER_REPORTS}>
                <ClipboardList size={18} />
                <Typography color="inherit">Отчеты</Typography>
              </Link>
            </>
          ) : null}
        </div>
        <div className={s.header__right}>
          {status === "loading" ? null : isAuthenticated ? (
            <>
              <Link href={dashboardPath}>
                <Button color="white">Перейти в профиль</Button>
              </Link>
              <Button color="primary" onClick={handleSignOut}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link href={PAGES.LOGIN}>
                <Button color="white">Войти</Button>
              </Link>
              <Link href={PAGES.REGISTER}>
                <Button color="primary">Зарегистрироваться</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
