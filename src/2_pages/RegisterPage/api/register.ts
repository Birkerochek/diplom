import { api, signIn, getSession } from "@shared/api";
import type { RegisterFormValues } from "@shared/zod/auth.schema";

export const registerUser = (payload: RegisterFormValues) =>
  api.post("api/auth/register", payload);

export const signInAfterRegister = (email: string, password: string) =>
  signIn(email, password);

export const fetchSession = () => getSession();
