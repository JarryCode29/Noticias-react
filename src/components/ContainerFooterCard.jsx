import { Card } from "./Card"
import images from "../hooks/images"

export const ContainerFooterCard = () => {
  return (
    <div className='footer'>
        <Card 
        image={images.card1}
        alt="img"
        titulo="01" 
        subTitulo="Reviving Retro PCs"
        parrafo="What happens whent old PCs 
        are givin modern upgrades?
        "
        ></Card>
         <Card 
        image={images.card2}
        alt="img"
        titulo="02" 
        subTitulo="Top 10 Laptops of 2022"
        parrafo="Our best picks for various
        needs and budgets.
        "
        ></Card>
         <Card 
        image={images.card3}
        alt="img"
        titulo="03" 
        subTitulo="The Growth of Gaming"
        parrafo="How the pandemic has sparked
        fresh opportunities
        "
        ></Card>
    </div>
  )
}
