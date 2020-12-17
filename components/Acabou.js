import Image from "next/image";

export default function Acabou() {
    return (
        <div id='Acabou' id='Somos'>
            <div className='my-10 mx-4 sm:mx-10 flex  flex-col text-left  md:flex-row flex-wrap justify-center'>
                <div style={{ color: '#213282' }} className='sm:mx-28 md:mx-52 lg:mx-0  lg:w-2/6 font-bold'>
                    <h2 className='lg:text-4xl text-4xl'>Está preparando aquela comidinha e o gás acabou? A GM Gás resolve!</h2>
                </div>
                <div className='sm:hidden md:block w-10'></div>

                <div className='flex flex-col justify-center sm:mx-28  md:mx-52 lg:mx-0  lg:w-2/6'>
                    <p className='text-sm lg:text-base mt-5 lg:mt-0'>Somos a representante oficial da ULTRAGAZ na Zona Norte!
                    Faça sua retirada na loja ou peça no conforto do seu lar que entregamos para você!
                    Funcionamos das 7h às 18h de segunda a sábado.
                    </p>
                    <img
                        className='hidden lg:block'
                        src='/Acabou-logo.svg'
                    ></img>
                </div>
            </div>
            <div className='flex flex-col' id='Servicos'>
                <h3 style={{ color: '#e9bc14' }} className='text-center mb-5 sm:text-2xl text-xl font-bold'>Formas de pagamento</h3>
                <div className='flex flex-row justify-evenly sm:mx-28  lg:mx-20 lg:px-60 font-medium' >
                    <div className='text-center'>
                        <img
                            className='mt-2 mx-auto h-10 lg:h-14'
                            src='/Acabou-cartao.png'
                        ></img>
                        <p className='text-xs sm:text-base'>Cartão de crédito</p>
                    </div>

                    <div className='text-center mb-5'>
                        <img
                            src='/Acabou-dinheiro.svg'
                            className='mt-2 mx-auto h-10 lg:h-14'

                        ></img>
                        <p className='text-xs sm:text-base'>Dinheiro</p>
                    </div>
                    <div className='text-center mb-5'>
                        <img
                            className='mt-2 mx-auto h-10 lg:h-14'
                            src='/Acabou-vale.svg'

                        ></img>
                        <p className='text-xs sm:text-base'>Vale Ultragás</p>
                    </div>

                </div>
            </div>
        </div>
    )
}