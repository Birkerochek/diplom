"use client";

import Link from "next/link";
import { Container, Typography } from "@shared/ui";
import { PAGES } from "@shared/constants";
import s from "./LoginPage.module.scss";
import { LoginForm } from "./LoginForm";


export const LoginPage:React.FC = () => {

  return (
    <section className={s.page}>
      <Container>
        <div className={s.heading}>
          <Typography variant="h1" as={'h2'}>Добро пожаловать</Typography>
          <Typography variant="body" as={'p'} color="gray">Войдите в свою учетную запись</Typography>
        </div>
       
        <div className={s.cardWrapper}>
          <div className={s.card}>
            <div className={s.cardHeading}>
              <Typography variant="h2" as={'h1'}>Вход в систему</Typography>
              <Typography variant="settings" color="gray">Введите свои данные для входа</Typography>
            </div>

            <LoginForm />

            <div className={s.footer}>
              Нет аккаунта? <Link href={PAGES.REGISTER}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};