"use client";

import { Button, Container, Logo, Typography } from "@shared/ui";
import s from "./Header.module.scss";
import { PAGES, ROLES } from "@shared/constants";
import Link from "next/link";
import { useSession, signOut } from "@shared/api";
import { useMemo } from "react";
import { Calendar, ClipboardList, Heart, Users } from "lucide-react";

export const Header = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" && Boolean(session?.user);
  const role = session?.user?.role;
  const dashboardPath = useMemo(() => {
    if (role === ROLES.ORGANIZER) return PAGES.ORGANIZER_DASHBOARD;
    if (role === ROLES.VOLUNTEER) return PAGES.VOLUNTEER_DASHBOARD;
    return PAGES.LOGIN;
  }, [session?.user?.role]);
  const handleSignOut = () => {
    void signOut();
  };
  return (
    <Container>
      <div className={s.header}>
        <Logo />
        <div className={s.header__center}>
          {role === ROLES.ORGANIZER ? (
            <>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_DASHBOARD}>
                <Users size={18} />
                <Typography color="inherit">Управление</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_EVENTS}>
                <Calendar size={18} />
                <Typography color="inherit">Мероприятия</Typography>
              </Link>
              <Link className={s.header__center_item} href={PAGES.ORGANIZER_REPORTS}>
                <ClipboardList size={18} />
                <Typography color="inherit">Отчёты</Typography>
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
              <Link className={s.header__center_item} href={PAGES.VOLUNTEER_REPORTS}>
                <ClipboardList size={18} />
                <Typography color="inherit">Отчёты</Typography>
              </Link>
            </>
          ) : (
            null
          )}

        </div>
        <div className={s.header__right}>
          {status === "loading" ? null : isAuthenticated ? (
            <>
              <Link href={dashboardPath}>

                <Button color="white">Личный кабинет</Button>
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
                <Button color="primary">Регистрация</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
