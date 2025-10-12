"use client";

import Link from "next/link";
import cn from "classnames";
import { Container, Input, Button, Typography } from "@shared/ui";
import { PAGES, ROLES } from "@shared/constants";
import {
  Mail,
  UserRound,
  Building2,
  Lock,
  ShieldCheck,
  Phone,
} from "lucide-react";
import s from "./RegisterPage.module.scss";
import { roles } from "../model/RolesCards";
import { useRegisterForm } from "../model/useRegisterForm";
export const RegisterPage = () => {
  const {
    form,
    selectedRole,
    requirementList,
    serverError,
    isSubmitting,
    onSubmit,
    setRole,
  } = useRegisterForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section className={s.page}>
      <Container>
        <div className={s.heading}>
          <Typography variant="h1" as={"h2"}>Присоединяйтесь к нам!</Typography>
          <Typography variant="body" as={"p"} color="gray">Создайте аккаунт и начните помогать</Typography>
        </div>

        <div className={s.cardWrapper}>
          <div className={s.card}>
            <div className={s.cardHeading}>
              <Typography variant="h2" as={'h1'}>Регистрация</Typography>
              <Typography variant="settings" color="gray">Заполните форму для создания аккаунта</Typography>
            </div>

            <div className={s.roles}>
              {roles.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  className={cn(s.roleButton, {
                    [s.roleButtonActive]: selectedRole === role.value,
                  })}
                  onClick={() => setRole(role.value)}
                >
                  {role.icon}
                  <span>{role.title}</span>
                  <p>{role.description}</p>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              <input type="hidden" {...register("role")} />
              {serverError ? (
                <p className={s.serverError}>{serverError}</p>
              ) : null}

              <div className={s.nameRow}>
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

              <Input
                label="Телефон"
                placeholder="+7 (999) 123-45-67"
                type="tel"
                icon={<Phone size={18} strokeWidth={1.6} />}
                error={errors.phone?.message}
                maskOptions={{ mask: "+{7} (000) 000-00-00" }}
                {...register("phone")}
              />

              {selectedRole === ROLES.ORGANIZER ? (
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

              <div className={s.requirements}>
                {requirementList.map((item) => (
                  <div
                    key={item.id}
                    className={cn(s.requirementItem, {
                      [s.completed]: item.met,
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

            <div className={s.footer}>
              Уже есть аккаунт? <Link href={PAGES.LOGIN}>Войти</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};