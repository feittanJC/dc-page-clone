import React from 'react'
import libro from '../assets/LIBRO_DE_RECLAMACIONES.webp'

function Footer() {
  return (
    <footer>
        <section className='flex flex-col border-t px-14 pb-12 border-gray-400 justify-center text-center '>
            <h1 className='py-8'>DC SHOES PERU</h1>
            <p className='text-xs text-left pb-4 text-gray-600'>No hay duda de que <span className='text-black font-medium'> DC Shoes</span>  es la mejor marca con origenes en el <span className='text-black font-medium'>skate</span>. Fundada con una actitud ganadora y una mente innovadora, <span className='text-black font-medium'> DC Shoes</span> ha seguido evolucionando. Somos más que una marca de ropa urbana, somos un estilo de vida que nace en la cultura del skate y la <span className='text-black font-medium'>calle</span>. Trabajamos constantemente para encontrar nuevas formas de progresar en el skate a través de nuevos productos y diseños. Nos apasiona el skateboarding, el arte y la música. Estamos a la vanguardia de las tendencias para rendir al máximo en el skate o fuera de él. <span className='text-black font-medium'> DC Shoes</span> es una marca en la que puedes confiar para estar siempre en el centro del skateboard y en la vanguardia del estilo urbano. Entra en el universo DC Shoes y descubre las últimas colecciones de Zapatillas para Hombre, Zapatillas para Mujeres, Ropa y Accesorios para Hombres. Compra online <span className='text-black font-medium'> DC Shoes en Perú </span>  con envíos a nivel nacional.</p>
            <p className='text-xs text-left'>OLA Y MONTAÑA S.AC. RUC 20520673670</p>
        </section>
        <section className='bg-[#181818] text-white '>
            <div className="flex px-[20%] justify-between pt-10 pb-24 border-b border-black">
                <div className="w-[24%]">
                    <h1 className='text-[13px] pb-9'>VER RED DE TIENDAS PARA CAMBIOS Y DEVOLUCIONES</h1>
                    <a href="#" className='hover:underline'>Encuentra tu Tienda Más Cercana</a>
                </div>
                <div className="w-[24%] flex flex-col text-[14px]">
                    <h1 className='text-[13px] pb-9'>SERVICIO AL CLIENTE</h1>
                    <a href="" className='font-medium hover:underline pb-1'>Retiro en Tienda</a>
                    <a href="" className='font-medium hover:underline pb-1'>Preguntas Frecuentes</a>
                    <a href="" className='font-medium hover:underline pb-1'>Guía de Tallas</a>
                    <a href="" className='font-medium hover:underline pb-1'>Términos y Condiciones</a>
                    <a href="" className='font-medium hover:underline pb-1'>Cambios y Devoluciones</a>
                    <a href="" className='font-medium hover:underline pb-1'>Privacidad y Confidencialidad</a>
                    <a href="" className='font-medium hover:underline pb-3'>Seguimiento de mi Pedido</a>
                    <a href=""> <img src={libro} alt="" width={"174px"} height={"150px"} /> </a>
                </div>
                <div className="w-[24%] flex flex-col">
                    <h1 className='text-[13px] pb-9'>¡Subscribete para recibir novedades y ofertas exclusivas!</h1>
                    <form className='flex flex-col'>
                        <input type="text" placeholder='Dirección de correo electronico' className='py-2 px-4 w-[95%]'/>
                        <p className='pt-2'> <input type='checkbox' /> <span className='text-[#31373d]'>He leído y acepto </span> términos y condiciones y política de privacidad y confidencialidad</p>
                        <button type='submit' className='bg-[#31373d] py-3 text-[14px] font-semibold'>SUSCRIBIRSE</button>
                    </form>
                </div>
                <div className="w-[24%]">
                    <h1 className='text-[13px] pb-9'>CONTÁCTANOS</h1>
                    <p className='pb-5'>contacto@dcshoesperu.com</p>
                    <p>(L - V 9:00AM - 6:00PM)</p>
                </div>
            </div>
            <div className="text-white pt-6 pb-16 flex justify-end">
                <div className="flex flex-col justify-end w-[30%]">
                <p className='text-xs'>© 2023, DC Shoes Peru</p>
                <p className='text-xs'>Av. Camino Real 1278, San Isidro, Lima, Perú</p>
                </div>            
            </div>
        </section>
    </footer>
  )
}

export default Footer