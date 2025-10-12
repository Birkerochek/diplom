import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { PAGES, ROLES } from "@shared/constants";
import { authDefaultValues } from "@shared/zod";
import { registerSchema, RegisterFormValues } from "@shared/zod/auth";
import { registerUser, signInAfterRegister, fetchSession } from "../api/register";
import { getPasswordRequirementList } from "./requirementsList";

export const useRegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: authDefaultValues,
  });

  const { setValue, watch } = form;

  const selectedRole = watch("role");
  const passwordValue = watch("password");

  const requirementList = useMemo(
    () => getPasswordRequirementList(passwordValue ?? ""),
    [passwordValue]
  );

  const submitRegister = useCallback(
    async (values: RegisterFormValues) => {
      try {
        setIsSubmitting(true);
        setServerError(null);

        await registerUser(values);

        const redirectTo =
          values.role === ROLES.VOLUNTEER
            ? PAGES.VOLUNTEER_DASHBOARD
            : PAGES.ORGANIZER_DASHBOARD;

        const signInResult = await signInAfterRegister(
          values.email,
          values.password
        );

        if (signInResult?.error) {
          setServerError(
            "Не удалось войти автоматически. Попробуйте авторизоваться вручную."
          );
          router.push(PAGES.LOGIN);
          return;
        }

        await fetchSession();
        router.push(redirectTo);
        router.refresh();
      } catch (error) {
        console.error("Register error", error);
        if (error instanceof AxiosError) {
          const message = (
            error.response?.data as { message?: string } | undefined
          )?.message;
          setServerError(message ?? "Не удалось завершить регистрацию");
        } else {
          setServerError("Что-то пошло не так. Попробуйте снова.");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [router]
  );

  const setRole = useCallback(
    (role: RegisterFormValues["role"]) => {
      setValue("role", role, { shouldValidate: true });
    },
    [setValue]
  );

  return {
    form,
    selectedRole,
    requirementList,
    serverError,
    isSubmitting,
    onSubmit: submitRegister,
    setRole,
  };
};
