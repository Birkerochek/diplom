"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { Clock } from "lucide-react";

import {
  Button,
  Container,
  DatePicker,
  Input,
  Select,
  Typography,
} from "@shared/ui";
import { PAGES } from "@shared/constants";

import { CATEGORY_OPTIONS } from "../../CreateEvent/model/categories";
import styles from "../../CreateEvent/ui/Styles.module.scss";
import { useEditEventForm } from "../model/useEditEventForm";

type EditEventPageProps = {
  eventId: string;
};

export const EditEventPage = ({ eventId }: EditEventPageProps) => {
  const {
    form,
    handleFormSubmit,
    isOtherActivity,
    isSubmitting,
    isLoadingInitialData,
    eventQuery,
  } = useEditEventForm({ eventId });

  const {
    control,
    register,
    formState: { errors },
  } = form;

  if (isLoadingInitialData) {
    return (
      <Container className={styles.page}>
        <Typography variant="body">Загружаем данные мероприятия...</Typography>
      </Container>
    );
  }

  if (eventQuery.isError && !eventQuery.data) {
    return (
      <Container className={styles.page}>
        <Typography variant="body" color="secondary">
          Не удалось получить данные мероприятия. Попробуйте ещё раз.
        </Typography>
        <Button color="primary" onClick={() => eventQuery.refetch()}>
          Повторить запрос
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <header className={styles.header}>
        <Typography variant="h2" as="h1">
          Редактирование мероприятия
        </Typography>
        <Link href={PAGES.ORGANIZER_EVENTS} className={styles.cancelLink}>
          <Typography variant="settings" as="span" color="gray">
            Вернуться к списку
          </Typography>
        </Link>
      </header>

      <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
        <div className={styles.inputsCont}>
          <div className={styles.titleCont}>
            <Typography variant="h4" as="h4">
              Информация о событии
            </Typography>
            <Typography variant="settings" as="p" color="gray">
              Обновите основные данные мероприятия
            </Typography>
          </div>

          <Input
            placeholder="Например: мастер-класс по волонтёрству"
            required
            label="Название мероприятия"
            error={errors.title?.message}
            {...register("title")}
          />

          <Input
            isTextarea
            required
            label="Описание"
            placeholder="Расскажите, чем полезно мероприятие и кого вы ищете"
            error={errors.description?.message}
            {...register("description")}
          />

          <Controller
            control={control}
            name="activityType"
            render={({ field }) => (
              <Select
                label="Категория"
                required
                placeholder="Выберите категорию"
                options={CATEGORY_OPTIONS}
                value={field.value ?? ""}
                name={field.name}
                onChange={(value) => field.onChange(value)}
                error={errors.activityType?.message}
              />
            )}
          />

          {isOtherActivity ? (
            <Input
              label="Собственная категория"
              placeholder="Например: помощь пожилым людям"
              error={errors.customActivityType?.message}
              {...register("customActivityType")}
              required
            />
          ) : null}
        </div>

        <div className={styles.inputsCont}>
          <div className={styles.titleCont}>
            <Typography variant="h4" as="h4">
              Дата и время
            </Typography>
            <Typography variant="settings" as="p" color="gray">
              Уточните расписание мероприятия
            </Typography>
          </div>

          <Controller
            control={control}
            name="eventDate"
            render={({ field }) => (
              <DatePicker
                label="Дата проведения"
                required
                value={field.value ?? null}
                onChange={(date) => field.onChange(date ?? undefined)}
                error={errors.eventDate?.message}
              />
            )}
          />

          <div className={styles.timeRow}>
            <Input
              className={styles.timeField}
              type="time"
              label="Время начала"
              required
              placeholder="--:--"
              error={errors.startTime?.message}
              icon={<Clock size={18} />}
              {...register("startTime")}
            />
            <Input
              className={styles.timeField}
              type="time"
              label="Время окончания"
              required
              placeholder="--:--"
              error={errors.endTime?.message}
              icon={<Clock size={18} />}
              {...register("endTime")}
            />
          </div>
        </div>

        <div className={styles.inputsCont}>
          <div className={styles.titleCont}>
            <Typography variant="h4" as="h4">
              Локация
            </Typography>
            <Typography variant="settings" as="p" color="gray">
              Укажите место проведения
            </Typography>
          </div>
          <Input
            label="Площадка"
            required
            placeholder="Например: Дом волонтёров"
            error={errors.location?.message}
            {...register("location")}
          />
          <Input
            label="Адрес"
            placeholder="Город, улица, дом"
            error={errors.address?.message}
            {...register("address")}
          />
        </div>

        <div className={styles.inputsCont}>
          <div className={styles.titleCont}>
            <Typography variant="h4" as="h4">
              Участники
            </Typography>
            <Typography variant="settings" as="p" color="gray">
              Сколько волонтёров требуется
            </Typography>
          </div>
          <Input
            label="Максимальное количество участников"
            placeholder="20"
            required
            subtitle="Это ограничение используется при регистрации волонтёров"
            error={errors.maxParticipants?.message}
            {...register("maxParticipants", { valueAsNumber: true })}
          />
        </div>

        <div className={styles.inputsCont}>
          <div className={styles.titleCont}>
            <Typography variant="h4" as="h4">
              Требования и навыки
            </Typography>
            <Typography variant="settings" as="p" color="gray">
              Добавьте пожелания к участникам
            </Typography>
          </div>
          <Input
            label="Основные требования"
            placeholder="Например: возраст 18+, опыт волонтёрства"
            error={errors.requirements?.message}
            {...register("requirements")}
          />
          <Input
            label="Навыки"
            placeholder="Например: работа в команде, коммуникация"
            subtitle="Перечислите навыки через запятую"
            error={errors.skills?.message}
            {...register("skills")}
          />
        </div>

        <div className={styles.actions}>
          <Button type="submit" color="primary" disabled={isSubmitting}>
            {isSubmitting ? "Сохраняем..." : "Сохранить изменения"}
          </Button>
        </div>
      </form>
    </Container>
  );
};
