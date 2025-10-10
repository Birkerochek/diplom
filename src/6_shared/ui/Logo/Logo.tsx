import { LogoIcon } from '@shared/assets'
import s from './Logo.module.scss'
import Link from 'next/link'
import { PAGES } from '@shared/constants'
export const Logo = () => {
  return (
    <Link href={PAGES.HOME}>
    <div className={s.logoCont}>
        <LogoIcon/> 
    </div>

    </Link>
  )
}