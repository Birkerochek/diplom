"use client";

import { useMemo, useState } from "react";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import cn from "classnames";
import { registerSchema, RegisterFormValues } from "@shared/zod/auth";
import { Container, Input, Button } from "@shared/ui";
import { PAGES, ROLES } from "@shared/constants";
import { api, signIn, getSession } from "@shared/api";
import { AxiosError } from "axios";
import {
  Mail,
  UserRound,
  Building2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import styles from "./RegisterPage.module.scss";
import { roles } from "../model/RolesCards";
import { getPasswordRequirementList } from "../model/requirementsList";

export const RegisterPage = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultValues: DefaultValues<RegisterFormValues> = {
    role: "volunteer",
    firstName: "",
    lastName: "",
    email: "",
    organizationName: "",
    password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const selectedRole = watch("role");
  const passwordValue = watch("password");

  const requirementList = useMemo(
    () => getPasswordRequirementList(passwordValue ?? ""),
    [passwordValue]
  );

  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    try {
      setIsSubmitting(true);
      setServerError(null);

      await api.post("api/auth/register", values);

      const redirectTo =
        values.role === ROLES.VOLUNTEER
          ? PAGES.VOLUNTEER_DASHBOARD
          : PAGES.ORGANIZER_DASHBOARD;

      const signInResult = await signIn(values.email, values.password);

      if (signInResult?.error) {
        setServerError("Не удалось войти автоматически. Попробуйте авторизоваться вручную.");
        router.push(PAGES.LOGIN);
        return;
      }

      await getSession();
      router.push(redirectTo);
    } catch (error) {
      console.error("Register error", error);
      if (error instanceof AxiosError) {
        const message = (error.response?.data as { message?: string } | undefined)?.message;
        setServerError(message ?? "Не удалось завершить регистрацию");
      } else {
        setServerError("Что-то пошло не так. Попробуйте снова.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.heading}>
          <h1>Присоединяйтесь к нам!</h1>
          <p>Создайте аккаунт и начните помогать</p>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>Регистрация</h2>
              <span>Заполните форму для создания аккаунта</span>
            </div>

            <div className={styles.roles}>
              {roles.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  className={cn(styles.roleButton, {
                    [styles.roleButtonActive]: selectedRole === role.value,
                  })}
                  onClick={() => setValue("role", role.value, { shouldValidate: true })}
                >
                  {role.icon}
                  <span>{role.title}</span>
                  <p>{role.description}</p>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <input type="hidden" {...register("role")} />
              {serverError ? (
                <p className={styles.serverError}>{serverError}</p>
              ) : null}

              <div className={styles.nameRow}>
                <Input
                  label="Имя"
                  placeholder="Иван"
                  icon={<UserRound size={18} strokeWidth={1.6} />}
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
                <Input
                  label="Фамилия"
                  placeholder="Иванов"
                  icon={<UserRound size={18} strokeWidth={1.6} />}
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <Input
                label="Email"
                placeholder="you@email.com"
                type="email"
                icon={<Mail size={18} strokeWidth={1.6} />}
                error={errors.email?.message}
                {...register("email")}
              />

              {selectedRole === "organizer" ? (
                <Input
                  label="Организация"
                  placeholder="Название организации"
                  icon={<Building2 size={18} strokeWidth={1.6} />}
                  error={errors.organizationName?.message}
                  {...register("organizationName")}
                />
              ) : null}

              <Input
                label="Пароль"
                type="password"
                placeholder="Минимум 8 символов"
                icon={<Lock size={18} strokeWidth={1.6} />}
                error={errors.password?.message}
                {...register("password")}
              />

              <div className={styles.requirements}>
                {requirementList.map((item) => (
                  <div
                    key={item.id}
                    className={cn(styles.requirementItem, {
                      [styles.completed]: item.met,
                    })}
                  >
                    <ShieldCheck size={16} strokeWidth={1.6} />
                    {item.label}
                  </div>
                ))}
              </div>

              <Input
                label="Подтвердите пароль"
                type="password"
                placeholder="Повторите пароль"
                icon={<Lock size={18} strokeWidth={1.6} />}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />

              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
              </Button>
            </form>

            <div className={styles.footer}>
              Уже есть аккаунт? <Link href={PAGES.LOGIN}>Войти</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};