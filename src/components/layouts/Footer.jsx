import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className="bg3 p-t-75 p-b-32">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            Categorias
                        </h4>

                        <ul>
                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Mujer
                                </a>
                            </li>

                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Hombre
                                </a>
                            </li>

                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Carteras
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            Ayuda
                        </h4>

                        <ul>
                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Seguir envío
                                </a>
                            </li>

                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Devoluciones 
                                </a>
                            </li>

                            <li className="p-b-10">
                                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Transporte
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            PONERSE EN CONTACTO
                        </h4>

                        <p className="stext-107 cl7 size-201">
                        ¿Alguna pregunta? Háganos saber en la tienda en el piso 8, 379 Hudson St, New York, NY 10018 o llámenos al (+1) 96 716 6879
                        </p>

                        <div className="p-t-27">
                            <a href="#/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-instagram"></i>
                            </a>

                            <a href="#/" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">
                            Noticias
                        </h4>

                        <form>
                            <div className="wrap-input1 w-full p-b-4">
                                <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com"></input>
                                <div className="focus-input1 trans-04"></div>
                            </div>

                            <div className="p-t-18">
                                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                    Subscribirse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
