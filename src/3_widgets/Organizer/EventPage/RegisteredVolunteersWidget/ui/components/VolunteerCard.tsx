import { memo, useCallback } from "react";
import { Button, Typography, Avatar } from "@shared/ui";
import { Mail, Phone, Clock } from "lucide-react";
import type { EventVolunteer } from "@shared/api/event/fetchEvent";
import { REGISTRATION_STATUS_LABELS } from "@pages/OrganizerPage/EventDetails/model/constants";
import { InfoBadge } from "./InfoBadge";
import styles from "../../../EventPageWidgets.module.scss";
import { RegistrationStatus } from "../../../../../../../app/generated/prisma";

const MAILTO_PREFIX = "mailto:";
const TEL_PREFIX = "tel:";

type VolunteerCardProps = {
  registration: EventVolunteer;
  onApprove: (registrationId: string) => Promise<void> | void;
  onReject: (registrationId: string) => void;
  isProcessing: boolean;
  isRejectedTab: boolean;
};

const VolunteerCardBase =({ registration, onApprove, onReject, isProcessing, isRejectedTab }: VolunteerCardProps) => {
  const { volunteer, motivationLetter, totalVolunteerHours } = registration;

  const handleApprove = useCallback(() => {
    onApprove(registration.id);
  }, [onApprove, registration.id]);

  const handleReject = useCallback(() => {
    onReject(registration.id);
  }, [onReject, registration.id]);

  const showApproveButton =
    registration.status === RegistrationStatus.pending || registration.status === RegistrationStatus.rejected;
  const showRejectButton =
    (registration.status === RegistrationStatus.pending || registration.status === RegistrationStatus.approved) &&
    !isRejectedTab;

  return (
    <article className={styles.volunteerCard}>
      <div className={styles.volunteerCardHeader}>
        <Avatar
          src={volunteer.avatarUrl ?? undefined}
          name={volunteer.name}
          size="md"
          className={styles.volunteerCardAvatar}
        />
        <div className={styles.volunteerCardMeta}>
          <Typography variant="bodyBold">{volunteer.name}</Typography>
          <Typography variant="body" color="gray">
            {registration.status === RegistrationStatus.approved
              ? "Одобрен"
              : REGISTRATION_STATUS_LABELS[registration.status]}
          </Typography>
        </div>
      </div>

      <div className={styles.volunteerCardInfoRow}>
        <InfoBadge icon={<Mail size={15} />} value={volunteer.email} href={`${MAILTO_PREFIX}${volunteer.email}`} />
        {volunteer.phone ? (
          <InfoBadge icon={<Phone size={15} />} value={volunteer.phone} href={`${TEL_PREFIX}${volunteer.phone}`} />
        ) : null}
      </div>

      <div className={styles.volunteerCardStats}>
        <InfoBadge icon={<Clock size={15} />} value={`${totalVolunteerHours} ч волонтёрства`} />
      </div>

      {motivationLetter ? (
        <Typography variant="body" color="gray" className={styles.volunteerCardNote}>
          “{motivationLetter}”
        </Typography>
      ) : null}

      {showApproveButton || showRejectButton ? (
        <div className={styles.volunteerCardActions}>
          {showApproveButton ? (
            <Button color="primary" disabled={isProcessing} onClick={handleApprove}>
              Одобрить
            </Button>
          ) : null}
          {showRejectButton ? (
            <Button color="white" disabled={isProcessing} onClick={handleReject}>
              Отклонить
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
};

export const VolunteerCard = memo(VolunteerCardBase)
