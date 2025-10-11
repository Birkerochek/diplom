"use client";

import Link from "next/link";
import { Container } from "@shared/ui";
import { PAGES } from "@shared/constants";
import styles from "./LoginPage.module.scss";
import { LoginForm } from "./LoginForm";


export const LoginPage = () => {

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.heading}>
          <h1>Добро пожаловать</h1>
          <p>Войдите в свою учетную запись</p>
        </div>
       
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>Вход в систему</h2>
              <span>Введите свои данные для входа</span>
            </div>

            <LoginForm />

            <div className={styles.footer}>
              Нет аккаунта? <Link href={PAGES.REGISTER}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};