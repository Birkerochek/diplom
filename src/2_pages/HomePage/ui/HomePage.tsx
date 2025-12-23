import { Button, Container} from "@shared/ui"
import { Hero } from "./Hero"
import { Abilities } from "./Abilities"
import { Ready } from "./Ready"
import s from './HomePage.module.scss'
export const HomePage = () => {
  return (
    <Container className={s.home}>
      <Hero/>
      <Abilities/>
      <Ready/>
    </Container>
  )
}