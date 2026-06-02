import { hash } from "argon2";
import {
  EventModerationStatus,
  EventStatus,
  PrismaClient,
  RegistrationStatus,
  Role,
  SourceType,
} from "../app/generated/prisma";

const ORGANIZER_EMAIL = "organizer@gmail.com";
const ORGANIZER_PASSWORD = "Organizer1234/";
const DEFAULT_EVENTS_COUNT = 20;
const DEFAULT_VOLUNTEERS_COUNT = 15;
const VOLUNTEER_PASSWORD = "Volunteer1234/";

const prisma = new PrismaClient();

type EventSeed = {
  title: string;
  description: string;
  activityType: string;
  location: string;
  address: string;
  requirements: string;
  skillsNeeded: string[];
  tags: string[];
};

type VolunteerSeed = {
  email: string;
  name: string;
  bio: string;
};

const eventSeeds: EventSeed[] = [
  {
    title: "Субботник в городском парке",
    description:
      "Волонтеры помогут убрать мусор, собрать сухие ветки и подготовить прогулочные дорожки к летнему сезону.",
    activityType: "ecology",
    location: "Центральный парк",
    address: "ул. Парковая, 12",
    requirements: "Удобная одежда, перчатки и готовность работать на улице.",
    skillsNeeded: ["командная работа", "аккуратность"],
    tags: ["экология", "город", "парк"],
  },
  {
    title: "Помощь в пункте выдачи гуманитарной поддержки",
    description:
      "Нужно принимать, сортировать и выдавать продуктовые наборы семьям, которым требуется адресная помощь.",
    activityType: "social-assistance",
    location: "Волонтерский центр",
    address: "пр. Мира, 45",
    requirements: "Возраст от 18 лет, внимательность при работе со списками.",
    skillsNeeded: ["общение", "организация"],
    tags: ["помощь", "семьи", "поддержка"],
  },
  {
    title: "Наставничество для школьников",
    description:
      "Волонтеры проведут занятия по базовой математике и помогут школьникам подготовиться к контрольным работам.",
    activityType: "education",
    location: "Молодежная библиотека",
    address: "ул. Ленина, 8",
    requirements: "Знание школьной программы и умение спокойно объяснять материал.",
    skillsNeeded: ["преподавание", "математика"],
    tags: ["образование", "школьники"],
  },
  {
    title: "Дежурство на благотворительном забеге",
    description:
      "Команда волонтеров будет встречать участников, помогать на точках питания и направлять гостей по маршруту.",
    activityType: "sport",
    location: "Стадион Заря",
    address: "ул. Спортивная, 3",
    requirements: "Пунктуальность и готовность провести несколько часов на ногах.",
    skillsNeeded: ["навигация", "коммуникация"],
    tags: ["спорт", "забег", "событие"],
  },
  {
    title: "Сопровождение экскурсии для пожилых людей",
    description:
      "Волонтеры помогут участникам добраться до музея, ориентироваться в здании и комфортно пройти экскурсию.",
    activityType: "culture-art",
    location: "Краеведческий музей",
    address: "ул. Советская, 21",
    requirements: "Вежливость, терпение и готовность помогать людям с ограниченной мобильностью.",
    skillsNeeded: ["сопровождение", "эмпатия"],
    tags: ["культура", "пожилые"],
  },
  {
    title: "Сортировка книг для детской библиотеки",
    description:
      "Нужно разобрать пожертвованные книги, проверить состояние и подготовить их к передаче в районные библиотеки.",
    activityType: "education",
    location: "Детская библиотека",
    address: "ул. Гагарина, 17",
    requirements: "Аккуратность и внимательность к деталям.",
    skillsNeeded: ["сортировка", "учет"],
    tags: ["книги", "дети", "библиотека"],
  },
  {
    title: "Посадка деревьев во дворе школы",
    description:
      "Волонтеры вместе с учениками высадят саженцы, подготовят лунки и установят таблички ухода.",
    activityType: "ecology",
    location: "Школа N 14",
    address: "ул. Школьная, 5",
    requirements: "Одежда для работы на улице, базовая физическая выносливость.",
    skillsNeeded: ["садовые работы", "работа с детьми"],
    tags: ["экология", "школа", "деревья"],
  },
  {
    title: "Мастер-класс по цифровой грамотности",
    description:
      "Помощь пожилым людям в освоении смартфонов, мессенджеров, электронных услуг и безопасной работы в интернете.",
    activityType: "education",
    location: "Дом культуры",
    address: "ул. Победы, 30",
    requirements: "Уверенное владение смартфоном и спокойное отношение к повторным вопросам.",
    skillsNeeded: ["цифровая грамотность", "обучение"],
    tags: ["обучение", "пожилые", "технологии"],
  },
  {
    title: "Помощь в приюте для животных",
    description:
      "Волонтеры помогут с уборкой, подготовкой корма и организацией прогулок по расписанию приюта.",
    activityType: "other",
    location: "Городской приют",
    address: "ул. Зеленая, 9",
    requirements: "Нет аллергии, готовность соблюдать правила безопасности приюта.",
    skillsNeeded: ["ответственность", "уход"],
    tags: ["приют", "уход"],
  },
  {
    title: "Сбор школьных наборов",
    description:
      "Нужно упаковать канцелярию, проверить списки и подготовить наборы к передаче детям из малообеспеченных семей.",
    activityType: "social-assistance",
    location: "Склад фонда Добро",
    address: "ул. Складская, 4",
    requirements: "Внимательность при комплектации наборов.",
    skillsNeeded: ["упаковка", "учет"],
    tags: ["дети", "школа", "поддержка"],
  },
  {
    title: "Волонтеры на городском фестивале",
    description:
      "Требуются помощники для навигации гостей, работы на стойке информации и поддержки организаторов площадок.",
    activityType: "culture-art",
    location: "Площадь Труда",
    address: "пл. Труда, 1",
    requirements: "Коммуникабельность и готовность работать в шумной среде.",
    skillsNeeded: ["навигация", "публичное общение"],
    tags: ["фестиваль", "город", "культура"],
  },
  {
    title: "Экологический рейд у реки",
    description:
      "Команда соберет бытовой мусор на береговой линии и отметит проблемные участки для дальнейшей уборки.",
    activityType: "ecology",
    location: "Набережная реки Исеть",
    address: "ул. Набережная, 2",
    requirements: "Закрытая обувь, перчатки, готовность работать в группе.",
    skillsNeeded: ["экологический мониторинг", "командная работа"],
    tags: ["река", "экология", "уборка"],
  },
  {
    title: "Поддержка донорской акции",
    description:
      "Волонтеры помогут регистрировать участников, выдавать памятки и сопровождать доноров между зонами.",
    activityType: "healthcare",
    location: "Областная станция переливания крови",
    address: "ул. Медицинская, 6",
    requirements: "Вежливость, аккуратность, соблюдение правил учреждения.",
    skillsNeeded: ["регистрация", "сопровождение"],
    tags: ["донорство", "здоровье"],
  },
  {
    title: "Тренировка дворовой футбольной команды",
    description:
      "Помощь тренеру в организации разминки, игровых упражнений и безопасного распределения детей по группам.",
    activityType: "sport",
    location: "Спортивная площадка Орбита",
    address: "ул. Космонавтов, 18",
    requirements: "Базовое понимание правил футбола и опыт общения с детьми.",
    skillsNeeded: ["спорт", "работа с детьми"],
    tags: ["спорт", "дети", "футбол"],
  },
  {
    title: "Подготовка выставочного зала",
    description:
      "Нужно помочь с расстановкой экспонатов, маркировкой стендов и подготовкой пространства к открытию выставки.",
    activityType: "culture-art",
    location: "Галерея Север",
    address: "ул. Художников, 11",
    requirements: "Аккуратность, бережное отношение к материалам.",
    skillsNeeded: ["монтаж", "внимательность"],
    tags: ["выставка", "искусство"],
  },
  {
    title: "Горячая линия помощи жителям",
    description:
      "Волонтеры будут принимать обращения, уточнять потребности и передавать заявки координаторам.",
    activityType: "social-assistance",
    location: "Ресурсный центр",
    address: "ул. Радищева, 25",
    requirements: "Грамотная речь, стрессоустойчивость, базовые навыки работы с таблицами.",
    skillsNeeded: ["телефонные переговоры", "таблицы"],
    tags: ["звонки", "помощь", "координация"],
  },
  {
    title: "Открытый урок первой помощи",
    description:
      "Помощь инструкторам в регистрации участников, подготовке материалов и сопровождении практических станций.",
    activityType: "healthcare",
    location: "Учебный центр",
    address: "ул. Учебная, 7",
    requirements: "Ответственность и готовность соблюдать инструкции медиков.",
    skillsNeeded: ["организация", "первая помощь"],
    tags: ["здоровье", "обучение"],
  },
  {
    title: "Письма поддержки для одиноких пожилых людей",
    description:
      "Участники подготовят открытки и письма, которые затем передадут подопечным социальных служб.",
    activityType: "social-assistance",
    location: "Коворкинг Точка",
    address: "ул. 8 Марта, 42",
    requirements: "Грамотность и уважительный тон в письмах.",
    skillsNeeded: ["письмо", "эмпатия"],
    tags: ["пожилые", "поддержка", "письма"],
  },
  {
    title: "Инвентаризация спортивного склада",
    description:
      "Волонтеры помогут пересчитать инвентарь, отметить повреждения и разложить оборудование по категориям.",
    activityType: "sport",
    location: "Детско-юношеская спортивная школа",
    address: "ул. Атлетов, 13",
    requirements: "Внимательность и готовность переносить легкий инвентарь.",
    skillsNeeded: ["учет", "сортировка"],
    tags: ["спорт", "склад", "учет"],
  },
  {
    title: "Подготовка городского лектория",
    description:
      "Нужно встретить спикеров, проверить посадку гостей, раздать материалы и помочь с навигацией.",
    activityType: "education",
    location: "Университетский центр",
    address: "пр. Университетский, 2",
    requirements: "Пунктуальность, грамотная речь, аккуратный внешний вид.",
    skillsNeeded: ["организация мероприятий", "общение"],
    tags: ["лекторий", "образование"],
  },
];

const volunteerSeeds: VolunteerSeed[] = [
  {
    email: "volunteer01@gmail.com",
    name: "Анна Смирнова",
    bio: "Помогает на городских акциях и любит задачи с четкой организацией.",
  },
  {
    email: "volunteer02@gmail.com",
    name: "Иван Кузнецов",
    bio: "Участвует в спортивных и экологических мероприятиях.",
  },
  {
    email: "volunteer03@gmail.com",
    name: "Мария Попова",
    bio: "Интересуется наставничеством и образовательными проектами.",
  },
  {
    email: "volunteer04@gmail.com",
    name: "Дмитрий Соколов",
    bio: "Готов помогать с логистикой, учетом и физической работой.",
  },
  {
    email: "volunteer05@gmail.com",
    name: "Елена Новикова",
    bio: "Часто выбирает социальную помощь и поддержку пожилых людей.",
  },
  {
    email: "volunteer06@gmail.com",
    name: "Артем Морозов",
    bio: "Любит командные выезды, субботники и спортивные события.",
  },
  {
    email: "volunteer07@gmail.com",
    name: "Ольга Васильева",
    bio: "Помогает на культурных событиях и выставках.",
  },
  {
    email: "volunteer08@gmail.com",
    name: "Никита Павлов",
    bio: "Уверенно работает с техникой и регистрацией участников.",
  },
  {
    email: "volunteer09@gmail.com",
    name: "София Федорова",
    bio: "Выбирает проекты с детьми, письмами поддержки и обучением.",
  },
  {
    email: "volunteer10@gmail.com",
    name: "Максим Волков",
    bio: "Готов помогать на мероприятиях с большим потоком гостей.",
  },
  {
    email: "volunteer11@gmail.com",
    name: "Ксения Алексеева",
    bio: "Интересуется медицинскими и просветительскими акциями.",
  },
  {
    email: "volunteer12@gmail.com",
    name: "Роман Лебедев",
    bio: "Помогает с сортировкой, складом и инвентаризацией.",
  },
  {
    email: "volunteer13@gmail.com",
    name: "Виктория Егорова",
    bio: "Любит культурные проекты и коммуникацию с участниками.",
  },
  {
    email: "volunteer14@gmail.com",
    name: "Павел Орлов",
    bio: "Участвует в экологических рейдах и городских субботниках.",
  },
  {
    email: "volunteer15@gmail.com",
    name: "Алина Захарова",
    bio: "Предпочитает социальную помощь и спокойные организационные задачи.",
  },
];

const parseCount = () => {
  const countArg = process.argv.find((arg) => arg.startsWith("--count="));
  const parsed = Number(countArg?.split("=")[1]);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : DEFAULT_EVENTS_COUNT;
};

const shouldCreateActiveEvents = () => process.argv.includes("--active");

const shouldSeedVolunteers = () => !process.argv.includes("--events-only");

const parseVolunteersCount = () => {
  const countArg = process.argv.find((arg) => arg.startsWith("--volunteers="));
  const parsed = Number(countArg?.split("=")[1]);

  return Number.isInteger(parsed) && parsed > 0
    ? parsed
    : DEFAULT_VOLUNTEERS_COUNT;
};

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const sample = <T>(items: T[]) => items[randomInt(0, items.length - 1)];

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
};

const toUtcDateOnly = (date: Date) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

const toUtcDateTime = (date: Date, hour: number, minute = 0) =>
  new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      hour,
      minute,
      0,
      0
    )
  );

const shuffle = <T>(items: T[]) => {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
};

const ensureOrganizer = async () => {
  const existing = await prisma.user.findUnique({
    where: { email: ORGANIZER_EMAIL },
    select: { id: true, role: true, isActive: true },
  });

  if (existing) {
    if (existing.role !== Role.organizer || !existing.isActive) {
      return prisma.user.update({
        where: { email: ORGANIZER_EMAIL },
        data: { role: Role.organizer, isActive: true },
        select: { id: true },
      });
    }

    return existing;
  }

  const passwordHash = await hash(ORGANIZER_PASSWORD);

  return prisma.user.create({
    data: {
      email: ORGANIZER_EMAIL,
      passwordHash,
      name: "Организатор мероприятий",
      role: Role.organizer,
      organizationName: "Волонтерский центр Добро",
      organizationDescription:
        "Организация, которая проводит городские волонтерские мероприятия.",
      isActive: true,
      organizerRoleRequest: {
        create: {
          status: "approved",
          reviewedAt: new Date(),
        },
      },
    },
    select: { id: true },
  });
};

const buildEventData = (
  seed: EventSeed,
  index: number,
  active: boolean,
  completed: boolean
) => {
  const eventDay = completed
    ? addDays(new Date(), -(randomInt(5, 60) + index))
    : addDays(new Date(), randomInt(3, 90) + index);
  const startHour = randomInt(9, 16);
  const durationHours = randomInt(2, 6);
  const eventDate = toUtcDateOnly(eventDay);
  const startTime = toUtcDateTime(eventDay, startHour, sample([0, 30]));
  const endTime = toUtcDateTime(eventDay, startHour + durationHours, sample([0, 30]));
  const now = new Date();
  const isApproved = active || completed;

  return {
    title: seed.title,
    description: seed.description,
    activityType: seed.activityType,
    eventDate,
    startTime,
    endTime,
    location: seed.location,
    address: seed.address,
    requiredHours: Math.max(
      1,
      Math.ceil((endTime.getTime() - startTime.getTime()) / 3_600_000)
    ),
    maxParticipants: randomInt(8, 45),
    currentParticipants: 0,
    requirements: seed.requirements,
    skillsNeeded: seed.skillsNeeded,
    tags: seed.tags,
    status: completed
      ? EventStatus.completed
      : active
        ? EventStatus.active
        : EventStatus.pending_moderation,
    submittedForModerationAt: now,
    approvedAt: isApproved ? now : null,
    publishedAt: isApproved ? now : null,
    lastModeratedAt: isApproved ? now : null,
    moderationIteration: 1,
  };
};

const toSnapshot = (event: {
  id: string;
  title: string;
  description: string | null;
  activityType: string;
  eventDate: Date;
  startTime: Date;
  endTime: Date;
  location: string;
  address: string | null;
  maxParticipants: number | null;
  requirements: string | null;
  skillsNeeded: string[];
}) => ({
  ...event,
  eventDate: event.eventDate.toISOString(),
  startTime: event.startTime.toISOString(),
  endTime: event.endTime.toISOString(),
});

const createSeedEvent = async (
  organizerId: string,
  seed: EventSeed,
  index: number,
  active: boolean,
  completed: boolean
) => {
  const eventData = buildEventData(seed, index, active, completed);

  return prisma.$transaction(async (tx) => {
    const event = await tx.event.create({
      data: {
        ...eventData,
        organizerId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        activityType: true,
        eventDate: true,
        startTime: true,
        endTime: true,
        location: true,
        address: true,
        requiredHours: true,
        status: true,
        maxParticipants: true,
        requirements: true,
        skillsNeeded: true,
      },
    });

    await tx.eventModerationRequest.create({
      data: {
        eventId: event.id,
        iteration: 1,
        status: active || completed
          ? EventModerationStatus.approved
          : EventModerationStatus.pending,
        submittedById: organizerId,
        decisionAt: active || completed ? new Date() : null,
        snapshot: toSnapshot(event),
      },
    });

    return event;
  });
};

type SeededEvent = Awaited<ReturnType<typeof createSeedEvent>>;
type SeededVolunteer = {
  id: string;
  email: string;
};

const ensureVolunteers = async (count: number) => {
  const passwordHash = await hash(VOLUNTEER_PASSWORD);
  const selectedSeeds = volunteerSeeds.slice(0, Math.min(count, volunteerSeeds.length));
  const volunteers: SeededVolunteer[] = [];

  for (const seed of selectedSeeds) {
    const volunteer = await prisma.user.upsert({
      where: { email: seed.email },
      update: {
        name: seed.name,
        bio: seed.bio,
        role: Role.volunteer,
        isActive: true,
      },
      create: {
        email: seed.email,
        passwordHash,
        name: seed.name,
        bio: seed.bio,
        role: Role.volunteer,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
      },
    });

    volunteers.push(volunteer);
  }

  return volunteers;
};

const getMotivationLetter = (volunteer: SeededVolunteer, event: SeededEvent) =>
  `Хочу участвовать в мероприятии "${event.title}", потому что готов(а) помочь команде и получить полезный волонтерский опыт.`;

const upsertRegistration = async (
  organizerId: string,
  volunteer: SeededVolunteer,
  event: SeededEvent,
  status: RegistrationStatus
) => {
  const now = new Date();
  const completed = status === RegistrationStatus.completed;
  const reviewed = status !== RegistrationStatus.pending;

  return prisma.$transaction(async (tx) => {
    const registration = await tx.eventRegistration.upsert({
      where: {
        eventId_volunteerId: {
          eventId: event.id,
          volunteerId: volunteer.id,
        },
      },
      update: {
        motivationLetter: getMotivationLetter(volunteer, event),
        status,
        rejectionReason: null,
        attended: completed,
        hoursCompleted: completed ? event.requiredHours : null,
        reviewedById: reviewed ? organizerId : null,
        reviewedAt: reviewed ? now : null,
        completedAt: completed ? event.endTime : null,
      },
      create: {
        eventId: event.id,
        volunteerId: volunteer.id,
        motivationLetter: getMotivationLetter(volunteer, event),
        status,
        attended: completed,
        hoursCompleted: completed ? event.requiredHours : null,
        reviewedById: reviewed ? organizerId : null,
        reviewedAt: reviewed ? now : null,
        completedAt: completed ? event.endTime : null,
      },
      select: {
        id: true,
      },
    });

    if (completed) {
      const existingHour = await tx.volunteerHour.findFirst({
        where: { registrationId: registration.id },
        select: { id: true },
      });

      if (!existingHour) {
        await tx.volunteerHour.create({
          data: {
            volunteerId: volunteer.id,
            eventId: event.id,
            registrationId: registration.id,
            hours: event.requiredHours,
            activityType: event.activityType,
            date: event.endTime,
            title: event.title,
            description: event.description ?? null,
            verified: true,
            verifiedById: organizerId,
            verifiedAt: now,
            source: SourceType.manual,
          },
        });
      }
    }

    const participants = await tx.eventRegistration.count({
      where: {
        eventId: event.id,
        status: {
          in: [RegistrationStatus.approved, RegistrationStatus.completed],
        },
      },
    });

    await tx.event.update({
      where: { id: event.id },
      data: { currentParticipants: participants },
    });

    return registration;
  });
};

const seedRegistrations = async (
  organizerId: string,
  volunteers: SeededVolunteer[],
  events: SeededEvent[]
) => {
  const activeEvents = events.filter((event) => event.status === EventStatus.active);
  const completedEvents = events.filter((event) => event.status === EventStatus.completed);
  let createdOrUpdated = 0;
  let completedRegistrations = 0;

  for (const [volunteerIndex, volunteer] of volunteers.entries()) {
    const primaryActiveEvent = activeEvents[volunteerIndex % activeEvents.length];
    const secondaryActiveEvent = activeEvents[(volunteerIndex + 5) % activeEvents.length];
    const completedEvent = completedEvents[volunteerIndex % completedEvents.length];

    if (primaryActiveEvent) {
      await upsertRegistration(
        organizerId,
        volunteer,
        primaryActiveEvent,
        volunteerIndex % 3 === 0 ? RegistrationStatus.pending : RegistrationStatus.approved
      );
      createdOrUpdated += 1;
    }

    if (secondaryActiveEvent && secondaryActiveEvent.id !== primaryActiveEvent?.id) {
      await upsertRegistration(
        organizerId,
        volunteer,
        secondaryActiveEvent,
        volunteerIndex % 4 === 0 ? RegistrationStatus.pending : RegistrationStatus.approved
      );
      createdOrUpdated += 1;
    }

    if (completedEvent && volunteerIndex < Math.ceil(volunteers.length * 0.6)) {
      await upsertRegistration(
        organizerId,
        volunteer,
        completedEvent,
        RegistrationStatus.completed
      );
      createdOrUpdated += 1;
      completedRegistrations += 1;
    }
  }

  return {
    registrations: createdOrUpdated,
    completedRegistrations,
  };
};

const main = async () => {
  const count = parseCount();
  const seedVolunteers = shouldSeedVolunteers();
  const active = shouldCreateActiveEvents() || seedVolunteers;
  const volunteersCount = parseVolunteersCount();
  const organizer = await ensureOrganizer();
  const seeds = shuffle(eventSeeds);
  const completedEventsCount = seedVolunteers
    ? Math.min(5, Math.max(0, count - 1), Math.max(1, Math.floor(count * 0.25)))
    : 0;

  const created = [];

  for (let index = 0; index < count; index += 1) {
    const seed = seeds[index % seeds.length];
    const completed = index < completedEventsCount;
    created.push(await createSeedEvent(organizer.id, seed, index, active, completed));
  }

  const volunteers = seedVolunteers ? await ensureVolunteers(volunteersCount) : [];
  const registrationStats = seedVolunteers
    ? await seedRegistrations(organizer.id, volunteers, created)
    : { registrations: 0, completedRegistrations: 0 };

  console.log(
    `Создано мероприятий: ${created.length}. Организатор: ${ORGANIZER_EMAIL}. Волонтеров: ${volunteers.length}. Заявок: ${registrationStats.registrations}. Завершенных участий с часами: ${registrationStats.completedRegistrations}.`
  );
};

main()
  .catch((error) => {
    console.error("Не удалось добавить мероприятия", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
