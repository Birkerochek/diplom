'use client';

import { useMemo, useRef } from 'react';

import { Button, Container, Typography } from '@shared/ui';
import s from './VolunteerDashboard.module.scss';
import { Welcome } from './Welcome';
import { useVolunteerDashboard } from './model/useVolunteerDashboard';
import { VolunteerStatsWidget } from '@widgets/Volunteer/Dashboard/StatsSummary';
import { MonthlyProgressWidget } from '@widgets/Volunteer/Dashboard/MonthlyProgress';
import {
  VolunteerCertificate,
  useCertificateGenerator,
} from '@widgets/Volunteer/Certificate';

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
  } = useVolunteerDashboard();
  const certificateRef = useRef<HTMLDivElement | null>(null);
  const { generate, isGenerating } = useCertificateGenerator({
    filename: `certificate-${volunteerName || 'volunteer'}.pdf`,
  });
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'ВолонтёрТайм';

  const certificateMeta = useMemo(() => {
    const now = new Date();
    return {
      issueDate: formatDate(now),
      periodLabel: activityPeriodLabel,
    };
  }, [activityPeriodLabel]);

  const handleGenerateCertificate = () => {
    generate(certificateRef.current);
  };

  const disableCertificateButton = isGenerating || isLoading || isError;

  return (
    <Container>
      <div className={s.page}>
        <div className={s.actions}></div>

        <Welcome name={volunteerName} />
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
