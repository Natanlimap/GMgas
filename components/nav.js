import { useState } from "react";
import { Link } from "react-scroll";



export default function MyNavbar({ fixed }) {
  const [teste, setTeste] = React.useState(<div></div>)

  function openNav(event) {
    event.preventDefault()
    setTeste(
      <div id='floatSide' style={{backgroundColor: '#303b8e'}} className='h-screen w-3/4 '>
        <div className='flex flex-row justify-end'>
          <button  onClick={closeNav} className='text-white pr-5 pt-5'>x</button>
        </div>
        <div className='flex text-left flex-col ml-5'>
          <Link to={'Artesanal'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>QUEM SOMOS</p></Link>
          <Link to={'Produtos'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>SERVIÇOS E VALORES</p></Link>
          <Link to={'Loja'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>PEÇA JÁ O SEU</p></Link>
          <Link to={'Contato'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>RETIRE NA LOJA</p></Link>
          <Link to={'Contato'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>CONTATO</p></Link>

        </div>
      </div>
    )
  }

  function closeNav() {
    setTeste(
      <div></div>
    )
  }
  return (
    <div style={{backgroundColor: '#2f3b8d'}}>
      {teste}
      <div className='md:pt-10 pt-10 mx-10 flex flex-row md:justify-center justify-between'>

        <div className='hidden md:flex flex-row my-auto'>
         <img className=' w-20 lg:mr-20' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>
           <Link href='/' to={'Artesanal1'} style={{color: "#f2cc35"}} smooth={true} className='text-white font-bold text-sm mx-5 my-auto'><p>QUEM SOMOS</p></Link>
           <Link href='/' to={'Produtos'} style={{color: "#f2cc35"}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>SERVIÇOS E VALORES</p></Link>
           <Link href='/' to={'Loja'} style={{color: "#f2cc35"}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>PEÇA JÁ O SEU</p></Link>
           <Link href='/' to={'Contato'} style={{color: "#f2cc35"}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>RETIRE NA LOJA</p></Link>
           <Link href='/' to={'Contato'} style={{color: "#f2cc35"}} smooth={true} className='text-white text-sm font-bold mx-5 my-auto'><p>CONTATO</p></Link>

        </div>
        <img className='md:hidden w-2/4 lg:mr-20' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>

        <a className='flex md:hidden' style={{width: '30px'}} onClick={openNav}><img src='./header-hamburguer.svg'></img></a>
      </div>
    </div>
  );
}