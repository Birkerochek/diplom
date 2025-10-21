import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import s from "./EventCard.module.scss";

export const EventCardSkeleton: FC = () => {
  return (
    <div className={s.cardSkeleton}>
      <Skeleton
        className={s.cardSkeleton__overlay}
        style={{ width: "100%", height: "100%" }}
        borderRadius={10}
      />
      <div className={s.cardSkeleton__content}>
        <div className={s.card__top}>
          <Skeleton width={140} height={24} />
          <Skeleton width={24} height={24} circle />
        </div>
        <div className={s.card__status}>
          <Skeleton width={110} height={20} />
          <Skeleton width={150} height={40} />
        </div>
        <div className={s.card__info}>
          <Skeleton width="60%" height={18} />
          <Skeleton width="80%" height={18} />
          <Skeleton width="65%" height={18} />
          <Skeleton width="45%" height={18} />
        </div>
        <div className={s.card__bottom}>
          <div className={s.card__bottom_left}>
            <Skeleton width={90} height={18} />
            <Skeleton width={60} height={18} />
          </div>
          <Skeleton width={140} height={40} />
        </div>
      </div>
    </div>
  );
};
