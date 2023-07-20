import React from 'react'
import  galery1  from '../assets/galery1.webp'
import  galery2  from '../assets/galery2.webp'
import  galery3  from '../assets/galery3.webp'

function Galery() {
  return (
    <section className='flex justify-around flex-wrap py-9 '>
        <div className="w-[30%]">
            <img src={galery1} alt="" height={"575px"}/>
            <h1 className='py-5 font-bold text-xl'>CALZADO</h1>
            <p>TOMA LA CIUDAD CON ZAPATILLAS DC</p>
            <div className="flex py-3 w-48 font-bold text-base items-center relative overflow-hidden hover:translate-x-4 ease-in duration-300"> 
            <div className="flex items-center relative -left-5 w-full hover:translate-x-12 ease-in duration-300">
            <span className=' text-2xl relative'>→</span> <h1 className=''>COMPRAR AHORA</h1> <span className='text-3xl relative' >→</span> 
            </div>
            </div>
        </div>
        <div className="w-[30%]">
            <img src={galery2} alt="" height={"575px"}/>
            <h1 className='py-5 font-bold text-xl'>ACCESORIOS</h1>
            <p>COMPLEMENTOS CON ESTILO</p>
            <div className="flex py-3 w-48 font-bold text-base items-center relative overflow-hidden hover:translate-x-4 ease-in duration-300"> 
            <div className="flex items-center relative -left-5 w-full hover:translate-x-12 ease-in duration-300">
            <span className=' text-2xl relative'>→</span> <h1 className=''>COMPRAR AHORA</h1> <span className='text-3xl relative' >→</span> 
            </div>
            </div>
        </div>
        <div className="w-[30%]">
        <img src={galery3} alt="" height={"575px"}/>
            <h1 className='py-5 font-bold text-xl'>ROPA HOMBRE</h1>
            <p>DC SHOES MODA URBANA</p>
            <div className="flex py-3 w-48 font-bold text-base items-center relative overflow-hidden hover:translate-x-4 ease-in duration-300"> 
            <div className="flex items-center relative -left-5 w-full hover:translate-x-12 ease-in duration-300">
            <span className=' text-2xl relative'>→</span> <h1 className=''>COMPRAR AHORA</h1> <span className='text-3xl relative' >→</span> 
            </div>
            </div>
        </div>
    </section>
  )
}

export default Galery