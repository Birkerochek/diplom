import { passwordRequirements } from "@shared/zod/auth";

export type PasswordRequirementItem = {
  id: "length" | "uppercase" | "number" | "special";
  label: string;
  met: boolean;
};

export const getPasswordRequirementList = (passwordValue: string): PasswordRequirementItem[] => [
  {
    id: "length",
    label: `Минимум ${passwordRequirements.minLength} символов`,
    met: passwordValue.length >= passwordRequirements.minLength,
  },
  {
    id: "uppercase",
    label: "Хотя бы одна заглавная буква",
    met: passwordRequirements.hasUppercase.test(passwordValue),
  },
  {
    id: "number",
    label: "Хотя бы одна цифра",
    met: passwordRequirements.hasNumber.test(passwordValue),
  },
  {
    id: "special",
    label: "Хотя бы один спецсимвол",
    met: passwordRequirements.hasSpecial.test(passwordValue),
  },
];