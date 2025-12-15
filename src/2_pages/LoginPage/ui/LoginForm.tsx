"use client";

import { memo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { Input } from "@shared/ui";
import { useLoginForm } from "../model/useLoginForm";
import styles from "./LoginPage.module.scss";
import { LoginButton } from "./LoginButton";
import { LoginFormValues, loginSchema } from "@shared/zod";

const LoginFormComponent = () => {
  const { handleLogin, isSubmitting, serverError } = useLoginForm();

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

  return (
    <form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
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

      <LoginButton isSubmitting={isSubmitting} />
    </form>
  );
};

export const LoginForm = memo(LoginFormComponent);

LoginForm.displayName = "LoginForm";
