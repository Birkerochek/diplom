import { Button, Typography } from '@shared/ui';
import s from './Hero.module.scss';
import { Heart, Users } from 'lucide-react';
import Link from 'next/link';
import { PAGES } from '@shared/constants';
export const Hero = () => {
  return (
    <div className={s.hero}>
      <div>
        <Typography variant="h1" as={'h1'}>
          Система учета
        </Typography>
        <Typography variant="h1" as={'h1'} color="green">
          волонтёрских часов
        </Typography>
      </div>
      <Typography color="gray" variant="h4" className={s.hero_subtitle}>
        Удобная платформа для волонтёров и организаторов. Регистрируйте
        активности, отслеживайте часы и получайте сертификаты о волонтёрской
        деятельности.
      </Typography>
      <div className={s.hero__buttons}>
        <Link href={PAGES.REGISTER}>
          <Button color="primary">
            <Heart size={20} />
            Стать волонтёром
          </Button>
        </Link>
       
        <Link href={{pathname: PAGES.REGISTER, query: {variant: 'organizer'}}}>
        
        <Button color="white">
          <Users size={20} />
          Для организаций
        </Button>
        </Link>
      </div>
    </div>
  );
};
