import React from "react";

const FooterComponent = () => {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{
        backgroundColor: "#929fba",
      }}
    >
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4">Marikeiks</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ex, eos excepturi voluptatem fugiat illum nulla
                necessitatibus
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4">Productos</h6>

              <p>
                <a class="text-white noLink" href="www.google.cl">
                  Tortas
                </a>
              </p>
              <p>
                <a class="text-white noLink" href="www.google.cl">
                  CandiBar
                </a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4">Contacto</h6>
              <p>
                <i class="mr-3"></i> Direccion (nosecual)
              </p>
              <p>
                <i class="mr-3"></i> correo@nose.cl
              </p>
              <p>
                <i class="mr-3"></i> numerotelefono
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4">Siguenos</h6>

              <p>
                <a
                  class="noLink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://es-la.facebook.com/MariKeiks/"
                >
                  <img src="/assets/svg/facebook.svg" alt=""></img>
                  Facebook
                </a>
              </p>

              <p>
                <a
                  class="noLink"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/marikeiks/"
                >
                  <img src="/assets/svg/instagram.svg" alt=""></img>
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        © 2022 Copyright:
        <a class="text-white noLink" href="www.google.cl" rel="noreferrer">
          Marikeiks.cl
        </a>
      </div>
    </footer>
  );
};
export default FooterComponent;
