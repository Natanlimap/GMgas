import Acabou from '../components/Acabou'
import Comodidade from '../components/Comodidade'
import Contato from '../components/Contato'
import Header from '../components/Header'
import Mapa from '../components/Mapa'

export default function IndexPage() {
  return (
    <div className='w-screen body'>
       <a  href='https://api.whatsapp.com/send?phone=+5584988718045&text=' class="float" target="_blank">
        <i class="my-float"><img src='./wpp.png'></img></i>
      </a>
      <Header />
      <Acabou/>
      <Comodidade/>
      <Contato/>
      <Mapa/>
      <footer id='Footer' className='flex flex-row justify-center' style={{backgroundColor: '#313c90'}}>
        <img style={{ width: '5rem' }} className='py-5 my-auto' src='./agencia.svg'></img>
      </footer>
    </div>
  )
}
