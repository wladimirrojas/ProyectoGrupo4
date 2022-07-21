import React from 'react';
import '../styles/styleFooter.css'

const FooterComponent = () => {
  return (
    <footer
      className='text-center text-lg-start text-white'
      style={{
        backgroundColor: '#929fba',
      }}
    >
      <div className='text-center container p-4 pb-0'>
        <section className=''>
          <div className='row'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4'>Marikeiks</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ex, eos excepturi voluptatem fugiat illum nulla
                necessitatibus
              </p>
            </div>

            <hr className='w-100 clearfix d-md-none' />

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4'>Productos</h6>

              <p>
                <a className='text-white noLink' href='www.google.cl'>
                  Tortas
                </a>
              </p>
              <p>
                <a className='text-white noLink' href='www.google.cl'>
                  CandiBar
                </a>
              </p>
            </div>

            <hr className='w-100 clearfix d-md-none' />

            <hr className='w-100 clearfix d-md-none' />

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4'>Contacto</h6>
              <p>
                <i className='mr-3'></i> Direccion (533)
              </p>
              <p>
                <i className='mr-3'></i> correo@alguno.cl
              </p>
              <p>
                <i className='mr-3'></i> numerotelefono
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h6 className='text-uppercase mb-4'>Siguenos</h6>

              <p>
                <a
                  className='noLink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://es-la.facebook.com/MariKeiks/'
                >
                  <img src='/assets/svg/facebook.svg' alt=''></img>
                  Facebook
                </a>
              </p>

              <p>
                <a
                  className='noLink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/marikeiks/'
                >
                  <img src='/assets/svg/instagram.svg' alt=''></img>
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className='text-center p-3'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <span>© 2022 Copyright: </span>
        <a className='text-white noLink' href='www.google.cl' rel='noreferrer'> 
          Marikeiks.cl
        </a>
      </div>
    </footer>
  );
};
export default FooterComponent;
