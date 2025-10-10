import { z } from "zod";

export const roles = ["volunteer", "organizer"] as const;

export const passwordRequirements = {
  minLength: 8,
  hasUppercase: /[A-ZА-ЯЁ]/,
  hasNumber: /\d/,
  hasSpecial: /[^A-Za-z0-9А-Яа-яЁё]/,
};

export const registerSchema = z
  .object({
    role: z.enum(roles),
    firstName: z
      .string()
      .trim()
      .min(1, "Укажите имя"),
    lastName: z
      .string()
      .trim()
      .min(1, "Укажите фамилию"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Некорректный email"),
    organizationName: z
      .string()
      .trim()
      .optional()
      .transform((value) => value || undefined),
    password: z
      .string()
      .min(passwordRequirements.minLength, "Минимум 8 символов")
      .refine((value) => passwordRequirements.hasUppercase.test(value), {
        message: "Нужна хотя бы одна заглавная буква",
      })
      .refine((value) => passwordRequirements.hasSpecial.test(value), {
        message: "Нужен хотя бы один спецсимвол",
      })
      .refine((value) => passwordRequirements.hasNumber.test(value), {
        message: "Нужна хотя бы одна цифра",
      }),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "organizer" && !data.organizationName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Укажите организацию",
        path: ["organizationName"],
      });
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      });
    }
  });

export const loginSchema = z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Некорректный email"),
    password: z.string().min(1, "Введите пароль"),
  });

export type RegisterFormValues = z.input<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
