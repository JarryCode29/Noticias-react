
export const Card = ({image, alt, titulo, subTitulo, parrafo }) => {

  return (
    <div className="card">
        <div className="img">
            <img src={image} alt={alt} />
        </div>
        <div className="title-card">
            <h1><b>{titulo}</b></h1>
            <h2><b><a href="#">{subTitulo}</a></b></h2>
            <p>{parrafo}</p>
        </div>
    </div>
  )
}
