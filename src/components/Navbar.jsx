import React from 'react'
import Carrito from './Carrito'

const Navegacion = () => {
  return (
    <div className="border-top py-4">
        <div className="navbar navbar-expand-lg container navbar-ligth">
            <a href="index.html" className="navbar-brand nombre-sitio d-lg-none fs-2 fw-bold text-uppercase">
                Tienda Muebles
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacion">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div id="navegacion" className="collapse navbar-collapse">
                <nav className="navbar-nav container-xl d-flex flex-md-row text-center justify-content-md-between">
                    <a className="text-dark text-decoration-none" href="#">Nosotros</a>
                    <a className="text-dark text-decoration-none" href="#">Tienda</a>
                    <a className="text-dark text-decoration-none" href="#">Blog</a>
                    <a className="text-dark text-decoration-none" href="#">Galeria</a>
                    <Carrito/>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navegacion