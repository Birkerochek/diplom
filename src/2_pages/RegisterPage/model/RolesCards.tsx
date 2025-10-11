import { CalendarDays, HeartHandshake } from "lucide-react";

export const roles = [
  {
    value: "volunteer" as const,
    title: "Волонтёр",
    description: "Участвую в мероприятиях",
    icon: <HeartHandshake size={22} strokeWidth={1.4} />,
  },
  {
    value: "organizer" as const,
    title: "Организатор",
    description: "Создаю мероприятия",
    icon: <CalendarDays size={22} strokeWidth={1.4} />,
  },
];