import { DefaultValues } from "react-hook-form";
import { RegisterFormValues } from "./auth.schema";

export const authDefaultValues: DefaultValues<RegisterFormValues> = {
  role: "volunteer",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organizationName: "",
  password: "",
  confirmPassword: "",
};