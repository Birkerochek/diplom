import { Typography } from '@shared/ui'
import s from './Abilities.module.scss'
import { abilities } from './data'
export const Abilities = () => {

  return (
    <div className={s.abilities}>
        <div className={s.abilities__titles}>
            <Typography variant="h3" as={'h2'}>Возможности платформы</Typography>
            <Typography variant='tag' color='gray'>Всё необходимое для эффективного управления волонтёрской деятельностью</Typography>
        </div>
        <div className={s.abilities__items}>
            {abilities.map((item) => (
                <div className={s.abilities__items__item} key={item.id}>
                    <div className={s.abilities__items__item__iconbg} style={{backgroundColor: item.bgColor}}>
                        {item.icon}
                    </div>
                    <Typography variant="h3" as={'h3'}>{item.title}</Typography>
                    <Typography variant='body' color='gray'>{item.description}</Typography>
                </div>
            ))}
        </div>
    </div>
  )
}