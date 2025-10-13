"use client";

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
import s from "./Styles.module.scss";
import { CATEGORY_OPTIONS } from "../model/categories";
import { useCreateEventForm } from "../model/useCreateEventForm";

export const CreateEventPage = () => {
  const {
    form,
    handleFormSubmit,
    isOtherActivity,
    isSubmitting,
  } = useCreateEventForm();

  const {
    control,
    register,
    formState: { errors },
  } = form;

  return (
    <Container>
      <Typography variant="h2" as={"h1"}>
        Создание мероприятия
      </Typography>
      <form className={s.form} onSubmit={handleFormSubmit} noValidate>
        <div className={s.inputsCont}>
        <div className={s.titleCont}>
          <Typography variant="h4" as={"h4"}>
            Основная информация
          </Typography>
          <Typography variant="settings" as={"p"} color="gray">
            Название и описание мероприятия
          </Typography>

        </div>

          <Input
            placeholder="Например: Уборка городского парка"
            required
            label="Название мероприятия"
            error={errors.title?.message}
            {...register("title")}
          />

          <Input
            isTextarea
            required
            label="Описание"
            placeholder="Подробное описание мероприятия, целей и задач. Расскажите волонтёрам чем они будут заниматься и какую пользу принесут."
            error={errors.description?.message}
            {...register("description")}
          />

          <Controller
            control={control}
            name="activityType"
            render={({ field }) => (
              <Select
                label="Тип активности"
                required
                placeholder="Выберите направление мероприятия"
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
              label="Введите своё направление"
              placeholder="Например: Помощь бездомным животным"
              error={errors.customActivityType?.message}
              {...register("customActivityType")}
              required
            />
          ) : null}
        </div>

        <div className={s.inputsCont}>
        <div className={s.titleCont}>
          <Typography variant="h4" as={"h4"}>
            Дата и время
          </Typography>
          <Typography variant="settings" as={"p"} color="gray">
            Когда состоится мероприятие
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

          <div className={s.timeRow}>
            <Input
              className={s.timeField}
              type="time"
              label="Время начала"
              required
              placeholder="--:--"
              error={errors.startTime?.message}
              icon={<Clock size={18} />}
              {...register("startTime")}
            />
            <Input
              className={s.timeField}
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

        <div className={s.inputsCont}>
        <div className={s.titleCont}>
          <Typography variant="h4" as={"h4"}>
            Место проведения

          </Typography>
          <Typography variant="settings" as={"p"} color="gray">
           Где будет проходить мероприятие

          </Typography>
        </div>
          <Input
          label="Название места"
          required
          placeholder="Например: Центральный парк"
          error={errors.location?.message}
          {...register("location")}
          />
          {/* address */}
          <Input
          label="Полный адрес"
          placeholder="Улица, дом, ориентиры"
          error={errors.address?.message}
          {...register("address")}
          />
        </div>
         <div className={s.inputsCont}>
        <div className={s.titleCont}>
          <Typography variant="h4" as={"h4"}>
            Участники


          </Typography>
          <Typography variant="settings" as={"p"} color="gray">
          Сколько волонтёров требуется


          </Typography>
        </div>
          <Input
          label="Максимальное количество волонтёров"
          placeholder="20"
          required
          subtitle="Укажите максимальное количество волонтёров, которые могут участвовать"
          error={errors.maxParticipants?.message}
          {...register("maxParticipants", { valueAsNumber: true })}
          />
        </div>
            <div className={s.inputsCont}>
        <div className={s.titleCont}>
          <Typography variant="h4" as={"h4"}>
            Требования и навыки

          </Typography>
          <Typography variant="settings" as={"p"} color="gray">
           Что нужно знать волонтёрам

          </Typography>
        </div>
        <Input
        label="Требования к волонтёрам"
        placeholder="Например: возраст от 18 лет, физическая выносливость"
        error={errors.requirements?.message}
        {...register("requirements")}
        />
        <Input
        label="Необходимые навыки"
        placeholder="Например: работа с детьми, знание английского языка"
        subtitle="Укажите навыки через запятую"
        error={errors.skills?.message}
        {...register("skills")}
        />
        </div>
        <div className={s.actions}>
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Сохраняем..." : "Создать мероприятие"}
          </Button>
        </div>
      </form>
    </Container>
  );
};