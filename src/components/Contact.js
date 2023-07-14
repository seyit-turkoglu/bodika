import React from 'react'
import Header from "./Header"
import Footer from './Footer'
export default function Contact({cart}) {
  return (
    <>
    <Header cart={cart} ></Header>
    <div className='flex flex-row mt-24 mb-28'>
        <div className='basis-1/4 ml-72 '>
            <div className='mb-16 mt-40'>
            <h1 className='font-bold'>ADRES:</h1>
            <p>Mersin/Yenisehir/Barbaros/2134.sokak no:8 kat:3</p>  
            </div>
            <div className='mb-16'>
            <h1 className='font-bold'>TELEFON: </h1>
            <p> 0545 605 67 42</p>  
            </div>
            <div className='mb-16'>
            <h1 className='font-bold'>MAİL: </h1>
            <p>seyitturkoglu0@gmail.com</p>  
            </div>
           
        </div>
        <div className='basis-3/4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.6145334235107!2d34.57373497645204!3d36.779813668847545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4b5359f9bf7%3A0x202ced15a59c0f4e!2sBarbaros%2C%202134.%20Sk.%20No%3A8%2C%2033150%20Yeni%C5%9Fehir%2FMersin!5e0!3m2!1str!2str!4v1686775437203!5m2!1str!2str" width="800" height="600" style={{border:0}} allowFullScreen="" title='this a uniqe title' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
    <Footer/>
    </>
  )
}