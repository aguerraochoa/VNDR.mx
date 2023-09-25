import React from 'react';
import img1 from "./img/iphone6.png"
import img2 from "./img/iphone6s.png"

const Home = () => {
    return (
        <>
            <header>
                <div className="logo">VNDR.mx</div>
                <nav>
                    <a href="#vndr">VNDR</a>
                    <a href="#products">Productos</a>
                    <a href="#contact">Contactar</a>
                </nav>
            </header>
            <section className="intro">
                <h1>VNDR.mx</h1>
            </section>
            <section id="products">
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="item-image card-img-top border-bottom py-2" src={img1} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">IPHONE 6 16GB</h5>
                                            $1200
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Comprar</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    <img className="item-image card-img-top border-bottom py-2" src={img2} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">IPHONE 6S 16GB</h5>
                                            $1500
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Comprar</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </section>
        </>
    );
};

export default Home;