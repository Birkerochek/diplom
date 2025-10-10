"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { Container, Input, Button } from "@shared/ui";
import { PAGES, ROLES } from "@shared/constants";
import { signIn, getSession } from "@shared/api";
import { loginSchema, LoginFormValues } from "@shared/zod/auth";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      setServerError(null);

      const result = await signIn(values.email, values.password);

      if (result?.error) {
        setServerError("Неверный email или пароль");
        return;
      }

      const session = await getSession();
      const role = session?.user?.role;

      const redirectTo = role === ROLES.ORGANIZER ? PAGES.ORGANIZER_DASHBOARD : PAGES.VOLUNTEER_DASHBOARD;

      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      console.error("Login error", error);
      setServerError("Не удалось войти. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {serverError ? <p className={styles.serverError}>{serverError}</p> : null}

              <Input
                label="Email"
                placeholder="you@email.com"
                type="email"
                icon={<Mail size={18} strokeWidth={1.6} />}
                error={errors.email?.message}
                {...register("email")}
              />

              <Input
                label="Пароль"
                type="password"
                placeholder="Минимум 8 символов"
                icon={<Lock size={18} strokeWidth={1.6} />}
                error={errors.password?.message}
                {...register("password")}
              />

              <Button type="submit" color="primary" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Входим..." : "Войти"}
              </Button>
            </form>

            <div className={styles.footer}>
              Нет аккаунта? <Link href={PAGES.REGISTER}>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};