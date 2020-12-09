import Artesanal from '../components/Artesanal'
import Contato from '../components/Contato'
import Header from '../components/Header'
import Loja from '../components/Loja'
import Produtos from '../components/Produto'

export default function IndexPage() {
  return (
    <div className='w-screen body'>
       <a href="https://api.whatsapp.com/send?phone=+558434220100" class="float" target="_blank">
        <i class="my-float"><img src='./wpp.png'></img></i>
      </a>
      <Header />
      <Artesanal/>
      <Produtos/>
      <Loja/>
      <Contato/>
      <footer id='Footer' className='flex flex-row justify-center'>
        <img style={{ width: '5rem' }} className='py-5 my-auto' src='./agencia.svg'></img>
      </footer>
    </div>
  )
}
