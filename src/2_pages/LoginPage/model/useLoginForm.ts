import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { PAGES, ROLES } from "@shared/constants";
import { LoginFormValues } from "@shared/zod/auth";
import { loginUser, fetchUserSession } from "../api/login";

export const useLoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = useCallback(
    async (values: LoginFormValues) => {
      try {
        setIsSubmitting(true);
        setServerError(null);

        const result = await loginUser(values.email, values.password);

        if (result?.error) {
          setServerError("Неверный email или пароль");
          return;
        }

        const session = await fetchUserSession();
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
    },
    [router]
  );

  return {
    handleLogin,
    serverError,
    isSubmitting,
  };
};
