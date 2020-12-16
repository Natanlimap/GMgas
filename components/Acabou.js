import Image from "next/image";

export default function Acabou() {
    return (
        <div id='Acabou'>
            <div className='my-20 flex flex-row flex-wrap justify-center'>
                <div style={{ color: '#213282' }} className='w-1/4 font-bold'>
                    <h2 className='text-5xl'>Está preparando aquela comidinha e o gás acabou? A GM Gás resolve!</h2>
                </div>
                <div className='flex flex-col justify-center ml-20 w-1/5'>
                    <p className='text-base'>Somos a representante oficial da ULTRAGAZ na Zona Norte!
                    Faça sua retirada na loja ou peça no conforto do seu lar que entregamos para você!
                    Funcionamos das 7h às 18h de segunda a sábado.
                    </p>
                    <Image
                        src='/Acabou-logo.svg'
                        width={100}
                        height={60}
                    ></Image>

                </div>
            </div>
            <div className='flex flex-col'>
                <h3 style={{ color: '#e9bc14' }} className='text-center mb-10 text-3xl font-bold'>Formas de pagamento</h3>
                <div className='flex flex-row justify-evenly mx-60 px-60 font-medium	' >
                    <div className='text-center mb-5'>
                        <Image
                            src='/Acabou-cartao.png'
                            width={60}
                            height={60}
                        ></Image>
                        <p>Cartão de crédito</p>
                    </div>
                    <div className='text-center mb-5'>
                        <Image
                            src='/Acabou-dinheiro.svg'
                            width={60}
                            height={60}
                        ></Image>
                        <p>Dinheiro</p>
                    </div>
                    <div className='text-center mb-5'>
                        <Image
                            src='/Acabou-vale.svg'
                            width={60}
                            height={60}
                        ></Image>
                        <p>Vale Ultragás</p>
                    </div>

                </div>
            </div>
        </div>
    )
}