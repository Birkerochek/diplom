import { FC } from "react";
import clsx from "clsx";
import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
};

export const ProgressBar: FC<ProgressBarProps> = ({ value, max = 100, className }) => {
  const normalizedMax = max > 0 ? max : 100;
  const clampedValue = Math.min(Math.max(value, 0), normalizedMax);
  const width = `${Math.round((clampedValue / normalizedMax) * 100)}%`;

  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.progress__track}>
        <div className={styles.progress__bar} style={{ width }} />
      </div>
    </div>
  );
};

export default ProgressBar;
