
const ItemListContainer = ({backgroundImage}) => {
    const estilo={
            backgroundImage: `url(${backgroundImage})`,
            height: '35rem',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
    }
  return (
    <div style={estilo} className='card-img-top' alt='imagen fondo'>{backgroundImage.imagen}</div>
  )
}

export default ItemListContainer