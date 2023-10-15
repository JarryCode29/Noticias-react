import {ContainerNewsImg} from './ContainerNewsImg'
import { ContainerNewsText } from './ContainerNewsText'
import { ContainerNewsTitle } from './ContainerNewsTitle'
import { ContainerLateral } from './ContainerLateral'
export const ContainerNews = () => {
  return (
    <>
    <div className="container-news">
      <div className='container-info'>
        <ContainerNewsImg />
        <div className="info-title">
          <ContainerNewsTitle />
          <ContainerNewsText />
        </div>
      </div>
      <div className="container-lateral">
        <ContainerLateral />
      </div>
    </div>
    </>
  )
}
