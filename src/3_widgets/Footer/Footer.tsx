import { Container, Logo } from '@shared/ui';
import s from './Footer.module.scss';
export const Footer = () => {
  return (
    <Container className={s.footer}>
      <Logo />
      <p className={s.footer__text}>
        © 2026 ВолонтёрТайм. Все права защищены. Делаем мир лучше вместе
      </p>
    </Container>
  );
};
