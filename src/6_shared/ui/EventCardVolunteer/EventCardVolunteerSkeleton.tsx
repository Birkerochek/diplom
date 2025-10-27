import { FC } from "react";
import Skeleton from "react-loading-skeleton";

import s from "./EventCardVolunteer.module.scss";

export const EventCardVolunteerSkeleton: FC = () => {
  return (
    <div className={s.cardSkeleton}>
      <Skeleton
        className={s.cardSkeleton__overlay}
        style={{ width: "100%", height: "100%" }}
        borderRadius={16}
      />
      <div className={s.cardSkeleton__content}>
        <div className={s.card__top}>
          <div className={s.card__top_left}>
            <Skeleton width="70%" height={26} />
            <Skeleton width="50%" height={18} />
          </div>
          <div className={s.card__top_right}>
            <Skeleton width={120} height={24} />
            <Skeleton width={90} height={20} />
          </div>
        </div>

        <div className={s.card__info}>
          <div className={s.card__info_top}>
            <Skeleton width="90%" height={16} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="60%" height={16} />
          </div>
          <div className={s.card__info_bottom}>
            <div className={s.card__info_item}>
              <Skeleton width={18} height={18} circle />
              <Skeleton width="50%" height={16} />
            </div>
            <div className={s.card__info_item}>
              <Skeleton width={18} height={18} circle />
              <Skeleton width="60%" height={16} />
            </div>
            <div className={s.card__info_item}>
              <Skeleton width={18} height={18} circle />
              <Skeleton width="55%" height={16} />
            </div>
            <div className={s.card__info_item}>
              <Skeleton width={18} height={18} circle />
              <Skeleton width="45%" height={16} />
            </div>
          </div>
        </div>

        <div className={s.card__bottom}>
          <div className={s.card__bottom_left}>
            <Skeleton width={120} height={16} />
            <Skeleton width={60} height={16} />
          </div>
          <Skeleton width={160} height={40} />
        </div>
      </div>
    </div>
  );
};
