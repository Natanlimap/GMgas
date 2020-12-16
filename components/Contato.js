import Image from "next/image";
import Link from 'next/link'


export default function Contato() {
    return (
        <div id='Contato'>
            <div className='py-10 flex flex-col' style={{ backgroundColor: '#f3f2f1' }}>
                <p style={{ color: '#253891' }} className='text-center mx-20 text-lg font-semibold sm:mx-40 lg:mx-40 lg:px-64'>Ligue para a gente ou mande uma mensagem e peça já o seu!</p>
                <div className='flex flex-row justify-center py-10' >
                    <a href='https://api.whatsapp.com/send?phone=+5584988718045&text='>
                        <div className='py-3 px-5 rounded-lg' style={{ backgroundColor: '#9dca31' }}>
                            <div className='flex flex-row justify-center'>
                                <Image
                                    src='/Contato-wpp.svg'
                                    width={40}
                                    height={40}
                                ></Image>
                                <p className='ml-2 my-auto'>(84) 9 8871-8045</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='text-center bg-white py-5 lg:mx-0 lg:px-64 '> 
                    <p className='font-bold'>ENDEREÇO</p>
                    <p>RUA SANTA LUZIA, 1821 - IGAPÓ</p>
                    <p>NATAL - RN, 59104-300</p>
                </div>
        </div>
    )
}