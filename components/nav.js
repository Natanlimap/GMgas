import { useState } from "react";
import { Link } from "react-scroll";



export default function MyNavbar({ fixed }) {
  const [teste, setTeste] = React.useState(<div></div>)

  function openNav(event) {
    event.preventDefault()
    setTeste(
      <div id='floatSide' style={{backgroundColor: '#ff0000'}} className='h-screen w-3/4 '>
        <div className='flex flex-row justify-end'>
          <button  onClick={closeNav} className='text-white pr-5 pt-5'>x</button>
        </div>
        <div className='flex text-left flex-col ml-5'>
          <Link to={'Artesanal'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Artesanal</p></Link>
          <Link to={'Produtos'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Produtos</p></Link>
          <Link to={'Loja'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Loja</p></Link>
          <Link to={'Contato'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Contato</p></Link>
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
    <div>
      {teste}
      <div className='md:pt-20 pt-10 mx-10 flex flex-row md:justify-center justify-between'>

        <div className='hidden md:flex flex-row my-auto'>
         <img className=' w-2/4 lg:mr-20' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>
           <Link href='/' to={'Artesanal1'} style={{color: "#d54243"}} smooth={true} className='text-white text-base mx-5'><p>Artesanal</p></Link>
           <Link href='/' to={'Produtos'} style={{color: "#d54243"}} smooth={true} className='text-white text-base mx-5'><p>Produtos</p></Link>
           <Link href='/' to={'Loja'} style={{color: "#d54243"}} smooth={true} className='text-white text-base mx-5'><p>Loja</p></Link>
           <Link href='/' to={'Contato'} style={{color: "#d54243"}} smooth={true} className='text-white text-base mx-5'><p>Contato</p></Link>
        </div>
        <img className='md:hidden w-2/4 lg:mr-20' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>

        <a className='flex md:hidden' style={{width: '30px'}} onClick={openNav}><img src='./header-hamburguer.svg'></img></a>
      </div>
    </div>
  );
}