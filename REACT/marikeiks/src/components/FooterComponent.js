import React from "react";
import "../styles/styleFooter.css";

const FooterComponent = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{
        backgroundColor: "#929fba",
      }}
    >
      <div className="text-center container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4">Marikeiks</h6>
              <p>Los pasteles te acompañan siempre.</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4">Productos</h6>

              <p>
                <a className="text-white noLink" href="/productos">
                  Tortas
                </a>
              </p>
              <p>
                <a className="text-white noLink" href="www.google.cl">
                  CandyBar
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4">Contacto</h6>
              <p>Av. Consistorial 5778. Santiago, Peñalolén.</p>
              <p>marikeiks@gmail.com</p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4">Siguenos</h6>

              <p>
                <a
                  className="noLink bi-facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://es-la.facebook.com/MariKeiks/"
                >
                  <span> </span>Facebook
                </a>
              </p>

              <p>
                <a
                  className="noLink bi-instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/marikeiks/"
                >
                  <span> </span> Instagram
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <span>© 2022 Copyright: </span>
        <a className="text-white noLink" href="https://www.google.cl/" rel="noreferrer">
          Marikeiks.cl
        </a>
      </div>
    </footer>
  );
};
export default FooterComponent;
