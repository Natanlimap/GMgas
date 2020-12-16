import Image from "next/image";
import Link from 'next/link'


export default function Contato() {
    return (
        <div id='Contato' style={{ backgroundColor: '#f3f2f1' }}>
            <div className='py-10 flex flex-col'>
                <p style={{ color: '#253891' }} className='text-center text-lg mx-96 px-64 font-semibold'>Ligue para a gente ou mande uma mensagem e peça já o seu!</p>
                <div className='flex flex-row justify-center py-10'>
                    <a href='/'>
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
                <div className='mx-96 px-64 text-center'> 
                    <p className='font-bold'>ENDEREÇO</p>
                    <p>RUA SANTA LUZIA, 1821 - IGAPÓ</p>
                    <p>NATAL - RN, 59104-300</p>
                </div>
            </div>
        </div>
    )
}