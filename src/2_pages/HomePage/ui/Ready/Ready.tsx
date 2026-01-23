import { Button, Typography } from '@shared/ui';
import s from './Ready.module.scss';
import Link from 'next/link';
import { PAGES } from '@shared/constants';
export const Ready = () => {
  return (
    <div className={s.ready}>
      <Typography variant="h3" as={'h2'}>
        Готовы начать волонтёрскую деятельность?
      </Typography>
      <Typography variant="body" color="gray">
        Присоединяйтесь к нашему сообществу и начните делать мир лучше уже
        сегодня
      </Typography>
      <div className={s.ready__buttons}>
        <Link href={PAGES.REGISTER} className={s.ready__buttons_button}>
          <Button>Зарегистрироваться</Button>
        </Link>
        <Link href={PAGES.LOGIN} className={s.ready__buttons_button}>
          <Button color="white" >Уже есть аккаунт?</Button>
        </Link>
      </div>
    </div>
  );
};
