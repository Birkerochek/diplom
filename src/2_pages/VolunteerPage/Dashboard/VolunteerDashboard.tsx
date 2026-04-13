'use client';

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import { PAGES } from '@shared/constants';
import { Container, Typography } from '@shared/ui';
import { AttendedEventsWidget } from '@widgets/Volunteer/Dashboard/AttendedEvents';
import { MonthlyProgressWidget } from '@widgets/Volunteer/Dashboard/MonthlyProgress';
import { VolunteerStatsWidget } from '@widgets/Volunteer/Dashboard/StatsSummary';
import {
  VolunteerCertificate,
  useCertificateGenerator,
} from '@widgets/Volunteer/Certificate';
import { useVolunteerDashboard } from './model/useVolunteerDashboard';
import s from './VolunteerDashboard.module.scss';
import { Welcome } from './Welcome';

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);

export const VolunteerDashboard = () => {
  const {
    volunteerName,
    stats,
    isLoading,
    isError,
    monthlyProgress,
    activityPeriodLabel,
    attendedEvents,
    attendedEventsTotal,
    organizerApplication,
  } = useVolunteerDashboard();
  const searchParams = useSearchParams();
  const certificateRef = useRef<HTMLDivElement | null>(null);
  const { generate, isGenerating } = useCertificateGenerator({
    filename: `certificate-${volunteerName || 'volunteer'}.pdf`,
  });
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'ВолонтёрТайм';

  const certificateMeta = {
    issueDate: formatDate(new Date()),
    periodLabel: activityPeriodLabel,
  };

  const handleGenerateCertificate = () => {
    generate(certificateRef.current);
  };

  const disableCertificateButton = isGenerating || isLoading || isError;
  const isFreshOrganizerRegistration = searchParams.get('organizerApplication') === 'pending';
  const organizerBanner =
    organizerApplication.status === 'pending'
      ? {
          title: isFreshOrganizerRegistration
            ? 'Заявка на роль организатора отправлена'
            : 'Заявка на подтверждение организатора ожидает рассмотрения',
          text: 'С вами свяжутся для подтверждения аккаунта. До одобрения заявки вам доступны права волонтёра.',
          background: '#FFF7E8',
          border: '#F2C46D',
        }
      : organizerApplication.status === 'rejected'
        ? {
            title: 'Заявка на роль организатора отклонена',
            text: organizerApplication.rejectionReason
              ? `Причина: ${organizerApplication.rejectionReason}`
              : 'Ваш аккаунт продолжает работать как аккаунт волонтёра.',
            background: '#FFF1F1',
            border: '#E58F8F',
          }
        : null;

  return (
    <Container>
      <div className={s.page}>
        <div className={s.actions}></div>

        <Welcome name={volunteerName} />
        {organizerBanner ? (
          <div
            style={{
              border: `1px solid ${organizerBanner.border}`,
              background: organizerBanner.background,
              borderRadius: 20,
              padding: '16px 20px',
              marginBottom: 20,
            }}
          >
            <Typography variant="h4">{organizerBanner.title}</Typography>
            <Typography variant="body" color="gray">
              {organizerBanner.text}
            </Typography>
          </div>
        ) : null}
        {isLoading ? (
          <Typography variant="body" color="gray">
            Загрузка статистики...
          </Typography>
        ) : isError ? (
          <Typography variant="body" color="secondary">
            Не удалось загрузить статистику волонтёра.
          </Typography>
        ) : (
          <>
            <VolunteerStatsWidget
              handleGenerateCertificate={handleGenerateCertificate}
              disableCertificateButton={disableCertificateButton}
              isGenerating={isGenerating}
              stats={stats}
              className={s.stats}
            />
            <MonthlyProgressWidget data={monthlyProgress} />
            <AttendedEventsWidget
              events={attendedEvents}
              total={attendedEventsTotal}
              viewAllHref={PAGES.VOLUNTEER_ATTENDED_EVENTS}
              className={s.attended}
            />
          </>
        )}

        <div className={s.certificatePreview} aria-hidden="true">
          <VolunteerCertificate
            ref={certificateRef}
            name={volunteerName}
            totalHours={stats.totalHours.value}
            eventsCount={stats.eventsCompleted.value}
            periodLabel={certificateMeta.periodLabel}
            primaryActivity="Не указана"
            issueDate={certificateMeta.issueDate}
            companyName={companyName}
          />
        </div>
      </div>
    </Container>
  );
};
