"use client";

import Link from "next/link";

import { Button, Typography } from "@shared/ui";
import { PAGES } from "@shared/constants";

import s from "./VolunteerDashboard.module.scss";

type WelcomeProps = {
  name: string;
};

export const Welcome = ({ name }: WelcomeProps) => (
  <div className={s.welcome}>
    <div className={s.welcome__text}>
      <Typography as="h1" variant="h2">
        Добро пожаловать, {name}!
      </Typography>
      <Typography variant="body" color="gray">
        Ваш прогресс в волонтёрской деятельности
      </Typography>
    </div>
    <Link href={PAGES.VOLUNTEER_EVENTS} className={s.welcome__action}>
      <Button icon="plus">Добавить часы</Button>
    </Link>
  </div>
);
