

export default function Comodidade() {
    return (
        <div id="Comodidade" >
            <div className='flex flex-col w-50 text-center'>
                <div className='flex flex-row justify-center'>
                    <h2 style={{ color: "#e9bc14" }} className='mt-10 mb-5 sm:mb-0 text-4xl w-3/4 ml-8 font-bold text-left sm:ml-0 sm:text-4xl sm:w-1/2 lg:text-6xl'>Mais comodidade para você</h2>
                </div>

                <div className=' my-5 flex flex-row flex-wrap justify-center ' id='Peca'>
                    <div className='flex flex-col justify-center rounded-lg' style={{ backgroundColor: '#253791' }}>
                        <div className='w-52 h-52 mb-10 '>
                            <h3 style={{ color: '#d3b02c' }} className='text-3xl mt-5 mx-2 font-bold'>Retire na loja</h3>
                            <div className='flex flex-row text-base  text-left mt-4 mx-3 text-white'>
                                <p>Sem espera. Venha no GM Postos e faça a retirada rápida do seu gás. É Só Chegar!</p>

                            </div>
                        </div>
                    </div>
                    <div className='sm:block hidden md:w-8 lg:w-40 sm:w-2'></div>
                    <div className='mt-2 sm:mt-0 flex flex-col justify-center rounded-lg' style={{ backgroundColor: '#253791' }} id='Retire'>
                        <div className='w-52 h-52  my-10 '>
                            <h3 style={{ color: '#d3b02c' }} className='text-3xl mx-2 font-bold'>Entregamos para você</h3>
                            <div className='flex flex-row text-xs  text-left mt-4 mx-3 text-white'>
                                <p>No conforto do seu lar em até 10 minutos. <br></br><br></br> Entregamos em toda Zona Norte de Natal(frete grátis), São Gonçalo do Amarante, Golandim e Cidade das Rosas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}