"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Heart, ListChecks, Menu, Users, X } from "lucide-react";

import { useSession, signOut } from "@shared/api";
import { PAGES, ROLES } from "@shared/constants";
import { Button, Container, Logo, Typography } from "@shared/ui";

import s from "./Header.module.scss";

export const Header = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" && Boolean(session?.user);
  const role = session?.user?.role;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dashboardPath =
    role === ROLES.ORGANIZER
      ? PAGES.ORGANIZER_DASHBOARD
      : role === ROLES.VOLUNTEER
        ? PAGES.VOLUNTEER_DASHBOARD
        : PAGES.LOGIN;

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    handleCloseMenu();
    void signOut();
  };

  return (
    <div className={s.headerWrapper}>
      <Container>
        <div className={s.header}>
          <Logo />
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
                {/* <Link className={s.header__center_item} href={PAGES.ORGANIZER_REPORTS}>
                  <ClipboardList size={18} />
                  <Typography color="inherit">Отчеты</Typography>
                </Link> */}
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
                {/* <Link className={s.header__center_item} href={PAGES.VOLUNTEER_REPORTS}>
                  <ClipboardList size={18} />
                  <Typography color="inherit">Отчеты</Typography>
                </Link> */}
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
          <button
            className={s.header__burger}
            type="button"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isMenuOpen ? (
          <>
            <button
              className={s.mobileMenuBackdrop}
              type="button"
              onClick={handleCloseMenu}
              aria-label="Закрыть меню"
            />
            <div className={s.mobileMenu}>
              <div className={s.mobileMenu__section}>
                {role === ROLES.ORGANIZER ? (
                  <>
                    <Link
                      className={s.mobileMenu__link}
                      href={PAGES.ORGANIZER_DASHBOARD}
                      onClick={handleCloseMenu}
                    >
                      <Users size={18} />
                      <Typography color="inherit">Организатор</Typography>
                    </Link>
                    <Link
                      className={s.mobileMenu__link}
                      href={PAGES.ORGANIZER_EVENTS}
                      onClick={handleCloseMenu}
                    >
                      <Calendar size={18} />
                      <Typography color="inherit">Мероприятия</Typography>
                    </Link>
                  </>
                ) : role === ROLES.VOLUNTEER ? (
                  <>
                    <Link
                      className={s.mobileMenu__link}
                      href={PAGES.VOLUNTEER_DASHBOARD}
                      onClick={handleCloseMenu}
                    >
                      <Heart size={18} />
                      <Typography color="inherit">Мой дашборд</Typography>
                    </Link>
                    <Link
                      className={s.mobileMenu__link}
                      href={PAGES.VOLUNTEER_EVENTS}
                      onClick={handleCloseMenu}
                    >
                      <Calendar size={18} />
                      <Typography color="inherit">Мероприятия</Typography>
                    </Link>
                    <Link
                      className={s.mobileMenu__link}
                      href={PAGES.VOLUNTEER_APPLICATIONS}
                      onClick={handleCloseMenu}
                    >
                      <ListChecks size={18} />
                      <Typography color="inherit">Мои заявки</Typography>
                    </Link>
                  </>
                ) : null}
              </div>
              <div className={s.mobileMenu__divider} />
              <div className={s.mobileMenu__actions}>
                {status === "loading" ? null : isAuthenticated ? (
                  <>
                    <Link href={dashboardPath} onClick={handleCloseMenu}>
                      <Button color="white">Перейти в профиль</Button>
                    </Link>
                    <Button color="primary" onClick={handleSignOut}>
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href={PAGES.LOGIN} onClick={handleCloseMenu}>
                      <Button color="white">Войти</Button>
                    </Link>
                    <Link href={PAGES.REGISTER} onClick={handleCloseMenu}>
                      <Button color="primary">Зарегистрироваться</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </>
        ) : null}
      </Container>
    </div>
  );
};
