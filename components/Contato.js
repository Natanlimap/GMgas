import Image from "next/image";
import Link from 'next/link'


export default function Contato() {
    return (
        <div className='h-screen' id='Contato'>
            <div className='grid lg:grid-cols-2 h-screen'>
                <div className='h-2/4 flex justify-end my-auto'>
                    <div className='lg:w-2/6 lg:mr-20 lg:text-justify lg:pb-0 md:mx-60 lg:pt-10 sm:mx-40 mx-20 w-full  pb-20  text-center '>
                        <Image
                            alt=''
                            src='/contato-logo.svg'
                            width={200}
                            height={100}
                        />
                        <h2 className='font-bold text-xl pb-4'>Maranata premium</h2>
                        <p className='text-base pb-4'> MARANATA SALINEIRA DO BRASIL LTDA CNPJ: 07.851.963/0001-48 Av. Industrial Dehuel Vieira Diniz, 5000 Mossoró - RN, CEP 59623-310</p>
                        <p className='text-base'> contato@grupomaranata.com.br</p>
                        <p className='text-base pb-10'>(84) 3422-0100</p>

                        <div className='lg:mx-0 lg:ml-0 flex flex-row flex-nowrap lg:justify-start md:mx-30 justify-around mx-30 ml-4'>
                            <div className='lg:mr-4 '>
                                <Link href='https://www.linkedin.com/company/salmaranata'>
                                    <a>
                                        <Image
                                            alt=''
                                            src='/contato-icone-link.svg'
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className='lg:mr-4'>
                                <Link href='https://www.instagram.com/salmaranata/?hl=pt-br'>
                                    <a>
                                        <Image
                                            alt=''
                                            src='/contato-icone-insta.svg'
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                            </div>

                            <div className='lg:mr-4'>
                                <Link href='https://api.whatsapp.com/send?phone=558434220100'>
                                    <a>
                                        <Image
                                            alt=''
                                            src='/contato-icone-wpp.svg'
                                            width={50}
                                            height={50}
                                        />
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='lg:pt-10 pt-20'>
                <iframe  className='h-full my-auto my-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8199903379177!2d-37.34703678477317!3d-5.132673296275158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba06d5a470206b%3A0x2100ce51091ea445!2sENGEPETROL%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1606226758336!5m2!1spt-BR!2sbr" width="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                </div>
            </div>
        </div>
    )
}