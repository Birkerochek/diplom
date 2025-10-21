"use client";

import { Button, Container, Logo } from "@shared/ui";
import s from "./Header.module.scss";
import { PAGES, ROLES } from "@shared/constants";
import Link from "next/link";
import { useSession, signOut } from "@shared/api";
import { useMemo } from "react";

export const Header = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" && Boolean(session?.user);
  const dashboardPath = useMemo(() => {
    const role = session?.user?.role;
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
