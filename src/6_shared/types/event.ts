import type {
  EventStatus,
  RegistrationStatus,
} from "../../../app/generated/prisma";

/**
 * Общий блок расписания, описывающий когда проходит событие.
 */
export interface EventSchedule {
  eventDate: string;
  startTime: string;
  endTime: string;
  requiredHours: number;
}

/**
 * Данные о месте проведения события. Адрес может отсутствовать для онлайн-формата.
 */
export interface EventLocation {
  name: string;
  address: string | null;
}

/**
 * Информация о вместимости события и заполнении мест.
 */
export interface EventCapacity {
  maxParticipants: number | null;
  currentParticipants: number | null;
  confirmedParticipants: number;
  fillRate: number | null;
}

/**
 * Сведения об организаторе, которые приходят вместе с событием.
 */
export interface EventOrganizer {
  id: string;
  name: string;
  email: string;
}

/**
 * Метки времени, возвращаемые API для отслеживания жизненного цикла события.
 */
export interface EventTimestamps {
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

/**
 * Сводка по статусам регистраций с общим числом участников.
 */
export type EventRegistrationSummary = Record<RegistrationStatus, number> & {
  total: number;
};

/**
 * Блок статистики, входящий в ответ событий.
 */
export interface EventStats {
  registrations: EventRegistrationSummary;
  volunteerHours: number;
}

/**
 * Детальная информация по волонтёрам, зарегистрированным на событие.
 */
export interface EventVolunteer {
  id: string;
  status: RegistrationStatus;
  registeredAt: string;
  motivationLetter: string | null;
  hoursCompleted: number | null;
  totalVolunteerHours: number;
  volunteer: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    avatarUrl: string | null;
  };
}

/**
 * Базовый контракт события, общий для списка и детализации.
 */
export interface EventBase {
  id: string;
  title: string;
  description: string | null;
  status: EventStatus;
  activityType: string;
  schedule: EventSchedule;
  location: EventLocation;
  capacity: EventCapacity;
  stats: EventStats;
  organizer: EventOrganizer;
  tags: string[];
  timestamps: EventTimestamps;
}

/**
 * Структура события в списке событий (ответ коллекции).
 */
export type EventListItem = EventBase;

/**
 * Расширенная структура события, используемая на детальной странице.
 */
export interface EventDetails extends EventBase {
  requirements: string | null;
  skillsNeeded: string[];
  volunteers: EventVolunteer[];
}

/**
 * Элемент сводки по статусам событий.
 */
export interface EventSummaryByStatus {
  status: EventStatus;
  count: number;
}

/**
 * Элемент сводки по типам активности.
 */
export interface EventSummaryByActivityType {
  activityType: string;
  count: number;
}

/**
 * Блок агрегированной сводки по списку событий.
 */
export interface EventSummary {
  byStatus: EventSummaryByStatus[];
  byActivityType: EventSummaryByActivityType[];
}

/**
 * Поле сортировки коллекции событий.
 */
export type EventCollectionSortField =
  | "eventDate"
  | "createdAt"
  | "updatedAt"
  | "title"
  | "status";

/**
 * Допустимые направления сортировки коллекции событий.
 */
export type EventCollectionSortDirection = "asc" | "desc";

/**
 * Набор фильтров, который сервер возвращает в метаданных списка событий.
 */
export interface EventCollectionFilters {
  status: string | null;
  search: string | null;
  dateFrom: string | null;
  dateTo: string | null;
  organizerId: string | null;
}

/**
 * Метаданные ответа со списком событий (пагинация, сортировка, фильтры).
 */
export interface EventCollectionMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  sort: {
    field: EventCollectionSortField;
    direction: EventCollectionSortDirection;
  };
  filters: EventCollectionFilters;
}

/**
 * Ответ списочного эндпоинта событий: данные, метаданные и агрегированная статистика.
 */
export interface EventListResponse {
  data: EventListItem[];
  meta: EventCollectionMeta;
  summary: EventSummary;
}
