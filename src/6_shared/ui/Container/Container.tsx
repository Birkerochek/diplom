import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
