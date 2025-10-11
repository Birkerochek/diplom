import { Button } from "@shared/ui";

type LoginButtonProps = {
  isSubmitting: boolean;
};

export const LoginButton = ({ isSubmitting }: LoginButtonProps) => (
  <Button type="submit" color="primary" fullWidth disabled={isSubmitting}>
    {isSubmitting ? "Входим..." : "Войти"}
  </Button>
);