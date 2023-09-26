import React from 'react';
import Item from './Item';
import iphone6 from "./img/iphone6.png"
import iphone6s from "./img/iphone6s.png"
import ipadmini1 from "./img/ipadmini1.png"
import ipadair1 from "./img/ipadair1.png"

const Home = () => {
    return (
        <>
            <header>
                <div className="logo">VNDR.mx</div>
                <nav>
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
                            <Item image={iphone6} title="IPHONE 6 16GB" price="$1200" site={"https://www.facebook.com/marketplace/item/668803871865438/?ref=marketplace_profile&referral_code=undefined"}/>
                            <Item image={iphone6s} title="IPHONE 6S 16GB" price="$1400" site={"https://www.facebook.com/marketplace/item/1492075248226298/?ref=marketplace_profile&referral_code=undefined"}/>
                            <Item image={ipadmini1} title="IPAD MINI 1 32GB" price="$1300" site={"https://www.facebook.com/marketplace/item/3792942620933027/?ref=marketplace_profile&referral_code=undefined"}/>
                            <Item image={ipadmini1} title="IPAD MINI 1 64GB" price="$1500" site={"https://www.facebook.com/marketplace/item/331842332734702/?ref=marketplace_profile&referral_code=undefined"}/>
                            <Item image={ipadair1} title="IPAD AIR 1 16GB" price="$1700" site={"https://www.facebook.com/marketplace/item/1462166861227700/?ref=marketplace_profile&referral_code=undefined"}/>
                        </div>
                    </div>
                </section>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </section>
            <section className="contact" id="contact">
                <h1>Contáctanos</h1>
                <div>
                    <a href="mailto:vndr.mexico@gmail.com" target="_blank">Correo</a>
                    <a href="https://www.instagram.com/vndr.mx" target="_blank">Instagram</a>
                </div>
            </section>
        </>
    );
};

export default Home;