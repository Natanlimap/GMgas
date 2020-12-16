import Image from "next/image";
import MyNavbar from "./nav";


export default function Header(){
    return(
        <div className='text-center'  id='teste' style={{backgroundColor: '#2f3b8d'}}>
            <MyNavbar></MyNavbar>
            <div className='sm:block hidden'>
            <Image
                src='/banner.png'
                width={1920}
                height={1080}
                >
            </Image>
            </div>
            <div className='block sm:hidden'>
            <Image
                src='/header-background-mobile.svg'
                width={1080}
                height={1380}
                >
            </Image>
            </div>
        </div>
    )
}