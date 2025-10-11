import { signIn, getSession } from "@shared/api";

export const loginUser = (email: string, password: string) => signIn(email, password);

export const fetchUserSession = () => getSession();
