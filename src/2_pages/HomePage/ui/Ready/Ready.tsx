import { Button, Typography } from '@shared/ui';
import s from './Ready.module.scss';
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
        <Button>Зарегистрироваться</Button>
        <Button color="white">Уже есть аккаунт?</Button>
      </div>
    </div>
  );
};
