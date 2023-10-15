import {Navbar} from './components/Navbar'
import {ContainerNews} from './components/ContainerNews'
import { ContainerFooterCard } from './components/ContainerFooterCard'
export const NewsHomepage = () => {
  return (
    <main>
   <Navbar />
   <ContainerNews />
   <ContainerFooterCard />
    </main>
  )
}
