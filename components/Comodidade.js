

export default function Comodidade() {
    return (
        <div id="Comodidade">
            <div className='flex flex-col w-50 text-center'>
                <div className='flex flex-row justify-center'>
                    <h2 style={{ color: "#e9bc14" }} className='mt-10 text-6xl font-bold w-1/2 text-left'>Mais comodidade para você</h2>
                </div>

                <div className=' my-5 flex flex-row flex-wrap justify-center '>
                    <div className='flex flex-col justify-center rounded-lg' style={{ backgroundColor: '#253791' }}>
                        <div className='w-52 h-52 mt-10 '>
                            <h3 style={{ color: '#d3b02c' }} className='text-3xl mx-2 font-bold'>Retire na loja</h3>
                            <div className='flex flex-row text-base  text-left mt-4 mx-3 text-white'>
                                <p>Sem espera. Venha no GM Postos e faça a retirada rápida do seu gás. É Só Chegar!</p>

                            </div>
                        </div>
                    </div>
                    <div className='w-2'></div>
                    <div className='flex flex-col justify-center rounded-lg' style={{ backgroundColor: '#253791' }}>
                        <div className='w-52 h-52  '>
                            <h3 style={{ color: '#d3b02c' }} className='text-3xl mx-2 font-bold'>Entregamos para você</h3>
                            <div className='flex flex-row text-xs  text-left mt-4 mx-3 text-white'>
                                <p>No conforto do seu lar em até 10 minutos. Entregamos em toda Zona Norte de Natal(frete grátis), São Gonçalo do Amarante, Golandim e Cidade das Rosas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}