import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarRange,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from 'lucide-react';

import { PAGES } from '@shared/constants';
import { Button, Container } from '@shared/ui';

import s from './HomePage.module.scss';

type HeroHighlightItem = {
  title: string;
  note: string;
  icon: LucideIcon;
};

type BoardStateItem = {
  label: string;
  title: string;
  note: string;
  tone: 'soft' | 'bright' | 'calm';
};

type JourneyItem = {
  id: 'volunteer' | 'organizer';
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

type StepItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type OpportunityItem = {
  title: string;
  meta: string;
  tag: string;
  description: string;
  highlight: string;
  accent: 'emerald' | 'teal' | 'gold';
};

type StoryItem = {
  quote: string;
  author: string;
  details: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ProofItem = {
  title: string;
  note: string;
};



const boardStates: BoardStateItem[] = [
  {
    label: 'Для волонтёра',
    title: 'Все этапы участия собраны в одном месте',
    note: 'можно посмотреть мероприятие, подать заявку и отследить её статус.',
    tone: 'soft',
  },
  {
    label: 'Для организатора',
    title: 'Создание события и работа с заявками идут последовательно',
    note: 'мероприятия, отклики и подтверждение участия ведутся в одной системе.',
    tone: 'bright',
  },
];

const journeys: JourneyItem[] = [
  {
    id: 'volunteer',
    label: 'Для волонтёра',
    title: 'Выбирайте мероприятия, подавайте заявки и получайте подтверждённые часы после участия.',
    description:
      'Здесь собраны события, статусы заявок и история волонтёрской активности.',
    icon: HeartHandshake,
    points: [
      'Мероприятия с описанием задач, дат и условий участия.',
      'Статусы заявок и информация по каждому отклику.',
      'Учтённые часы и история посещённых мероприятий.',
    ],
  },
  {
    id: 'organizer',
    label: 'Для организатора',
    title: 'Публикуйте мероприятия, принимайте заявки и подтверждайте участие волонтёров.',
    description:
      'Платформа подходит для организации набора, сопровождения события и учёта часов.',
    icon: Building2,
    points: [
      'Создание мероприятия с основной информацией и датами.',
      'Работа со списком заявок и статусами участников.',
      'Подтверждение участия и автоматическое начисление часов.',
    ],
  },
];

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Выберите роль',
    description:
      'При регистрации можно перейти в сценарий волонтёра или организатора.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Найдите или создайте мероприятие',
    description:
      'Волонтёры выбирают подходящие события, а организаторы публикуют новые мероприятия.',
    icon: CalendarRange,
  },
  {
    number: '03',
    title: 'Работайте с заявками и статусами',
    description:
      'Во время подготовки к мероприятию видно, кто подал заявку и какой у неё статус.',
    icon: UsersRound,
  },
  {
    number: '04',
    title: 'Подтвердите участие и часы',
    description:
      'После мероприятия организатор отмечает участие, а часы сохраняются в профиле волонтёра.',
    icon: BadgeCheck,
  },
];

const opportunities: OpportunityItem[] = [
  {
    title: 'Весенний городской субботник',
    meta: 'конец апреля · Екатеринбург · офлайн',
    tag: 'Набор открыт',
    description:
      'Регистрация участников, навигация на площадке и координация экологических активностей.',
    highlight: 'подтверждение участия после смены',
    accent: 'emerald',
  },
  {
    title: 'Фестиваль добрых инициатив',
    meta: 'начало мая · гибридный формат',
    tag: 'Популярно',
    description:
      'Помощь гостям, работа со стойкой информации и поддержка команд партнёров мероприятия.',
    highlight: 'подходит для больших команд',
    accent: 'teal',
  },
  {
    title: 'Сбор гуманитарной помощи',
    meta: 'каждую субботу · городской центр',
    tag: 'Проверенный формат',
    description:
      'Сценарий для организаций, которым нужен стабильный поток волонтёров и прозрачный учёт часов.',
    highlight: 'прозрачный итог по участию',
    accent: 'gold',
  },
];

const stories: StoryItem[] = [
  {
    quote:
      'Я могу посмотреть, на какие мероприятия уже записывалась, где участвовала и сколько часов мне подтвердили после события.',
    author: 'Алина, волонтёр',
    details: 'участвует в городских мероприятиях и ведёт учёт своей активности',
  },
  {
    quote:
      'Мы размещаем мероприятия, смотрим заявки и после события отмечаем, кто действительно участвовал. Часы начисляются автоматически.',
    author: 'Координатор благотворительной организации',
    details: 'организует набор волонтёров на социальные инициативы',
  },
];

const proofItems: ProofItem[] = [
  {
    title: 'Перед записью видно основные условия участия',
    note: 'волонтёр может посмотреть дату, формат, задачи и другую информацию по мероприятию до подачи заявки.',
  },
  {
    title: 'По каждой заявке отображается текущий статус',
    note: 'в системе видно, принята заявка, находится на рассмотрении или участие уже подтверждено.',
  },
  {
    title: 'После мероприятия часы сохраняются в профиле',
    note: 'когда организатор подтверждает участие, часы автоматически добавляются в историю волонтёра.',
  },
];

const faqItems: FaqItem[] = [
  {
    question: 'Как подтверждаются волонтёрские часы?',
    answer:
      'После завершения мероприятия организатор отмечает участие волонтёра и указывает количество часов. После этого данные сохраняются в профиле.',
  },
  {
    question: 'Подходит ли платформа для разных типов организаций?',
    answer:
      'Да. Её можно использовать для НКО, образовательных учреждений, городских инициатив и других проектов, где нужны публикация мероприятий, работа с заявками и учёт часов.',
  },
  {
    question: 'Что видит волонтёр в своём аккаунте?',
    answer:
      'Волонтёр видит доступные мероприятия, свои заявки, статусы по ним, подтверждённые часы и историю участия.',
  },
  {
    question: 'Можно ли участвовать сразу в нескольких мероприятиях?',
    answer:
      'Да, можно подать заявки на разные события и отслеживать статус по каждому из них отдельно.',
  },
];

const trustSectors = ['НКО и фонды', 'Вузы и школы', 'Городские проекты', 'Корпоративные программы'];

export const HomePage = () => {
  return (
    <Container className={s.home}>
      <section className={s.hero}>
        <div className={s.hero__content}>
        

          <div className={s.hero__copy}>
            <h1 className={s.hero__title}>
              Сервис для учёта
              <span className={s.hero__titleAccent}>волонтёрских мероприятий, заявок и часов участия.</span>
            </h1>
            <p className={s.hero__subtitle}>
              Организаторы создают мероприятия и работают с заявками, а волонтёры выбирают события, записываются
              на них и получают часы после подтверждения участия.
            </p>
          </div>

          <div className={s.hero__actions}>
            <Link href={PAGES.REGISTER} className={s.hero__action}>
              <Button color="primary">
                Стать волонтёром
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link
              href={{ pathname: PAGES.REGISTER, query: { variant: 'organizer' } }}
              className={s.hero__action}
            >
              <Button color="white">
                Для организаторов
                <Building2 size={18} />
              </Button>
            </Link>
          </div>

         

         
        </div>

        <div className={s.hero__visual}>
          <div className={s.dashboardCard}>
            

            <div className={s.dashboardCard__lead}>
              <div>
               
                <h2 className={s.dashboardCard__headline}>
                  От публикации мероприятия до подтверждения часов один рабочий процесс.
                </h2>
              </div>

              <div className={s.dashboardCard__pulse}>
                <BadgeCheck size={22} />
                <strong>Основные действия собраны вместе</strong>
                <span>создание события, заявки участников и учёт часов доступны в одной системе</span>
              </div>
            </div>
<div className={s.dashboardMetrics}>
              {boardStates.map((item) => (
                <article key={item.label} className={`${s.metricCard} ${s[`metricCard--${item.tone}`]}`}>
                  <span className={s.metricCard__label}>{item.label}</span>
                  <strong className={s.metricCard__value}>{item.title}</strong>
                  <p className={s.metricCard__note}>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journeys" className={s.section}>
          <div className={s.sectionHeading}>
          <div className={s.sectionHeading__main}>
           
            <h2 className={s.sectionTitle}>Возможности платформы</h2>
          </div>
        
        </div>
<div className={s.roleGrid}>
          {journeys.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.id} className={`${s.roleCard} ${s[`roleCard--${item.id}`]}`}>
                <div className={s.roleCard__icon}>
                  <Icon size={28} />
                </div>
                <span className={s.roleCard__label}>{item.label}</span>
                <h3 className={s.roleCard__title}>{item.title}</h3>
                <p className={s.roleCard__description}>{item.description}</p>

                <ul className={s.roleCard__list}>
                  {item.points.map((point) => (
                    <li key={point} className={s.roleCard__listItem}>
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className={s.roleCard__footer}>
                  {item.id === 'volunteer' ? (
                    <Link href={PAGES.REGISTER} className={s.roleCard__action}>
                      <Button color="primary">
                        Открыть путь волонтёра
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      href={{ pathname: PAGES.REGISTER, query: { variant: 'organizer' } }}
                      className={s.roleCard__action}
                    >
                      <Button color="white">
                        Открыть кабинет организатора
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className={s.section}>
        <div className={s.sectionHeading}>
          <div className={s.sectionHeading__main}>
            
            <h2 className={s.sectionTitle}>Как начать пользоваться платформой?</h2>
          </div>
         
        </div>

        <div className={s.processGrid}>
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className={s.processCard}>
                <div className={s.processCard__top}>
                  <span className={s.processCard__number}>{step.number}</span>
                  <span className={s.processCard__icon}>
                    <Icon size={20} />
                  </span>
                </div>
                <h3 className={s.processCard__title}>{step.title}</h3>
                <p className={s.processCard__description}>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>


      <section className={`${s.section} ${s.proofSection}`}>
        <div className={s.proofPanel}>
          <h2 className={s.sectionTitle}>Как мы вам поможем?</h2>
          <p className={s.sectionDescription}>
            Вместо лишних обещаний – понятный сценарий: увидеть подходящее мероприятие, оставить заявку, отследить статус и сохранить часы после участия.
          </p>

          <div className={s.proofStats}>
            {proofItems.map((item) => (
              <article key={item.title} className={s.proofStat}>
                <strong>{item.title}</strong>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
        </div>

        <div className={s.storyColumn}>
          <div className={s.storyGrid}>
            {stories.map((story) => (
              <article key={story.author} className={s.storyCard}>
                <p className={s.storyCard__quote}>“{story.quote}”</p>
                <div className={s.storyCard__footer}>
                  <strong>{story.author}</strong>
                  <span>{story.details}</span>
                </div>
              </article>
            ))}
          </div>

          <div className={s.sectorsCard}>
            <span className={s.sectionLabel}>Подходит для разных сценариев</span>
            <div className={s.sectorList}>
              {trustSectors.map((sector) => (
                <span key={sector} className={s.sectorChip}>
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.sectionHeading}>
          <div className={s.sectionHeading__main}>
           
            <h2 className={s.sectionTitle}>Часто задаваемые вопросы</h2>
          </div>
        
        </div>

        <div className={s.faqGrid}>
          {faqItems.map((item) => (
            <details key={item.question} className={s.faqItem}>
              <summary className={s.faqQuestion}>{item.question}</summary>
              <p className={s.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

    </Container>
  );
};
