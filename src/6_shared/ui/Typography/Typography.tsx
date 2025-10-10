import cn from 'classnames';
import { TypographyProps } from "./types";
import styles from './Typography.module.scss';
export const Typography: React.FC<TypographyProps> = ({ as = 'p',variant = 'body', color= 'black', className, children, ...props}) =>{

    const Component = as as React.ElementType
    const classes = cn(
        styles.typography,
        styles[`typography--${variant}`],
        styles[`typography--color-${color}`],
        className
    )

        return (
            <Component className={classes} {...props}>
                {children}
            </Component>
        )
}

