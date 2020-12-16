import Image from "next/image";
import MyNavbar from "./nav";


export default function Header(){
    return(
        <div className='text-center'  id='teste'>
            <MyNavbar></MyNavbar>
            <Image
                src='/banner.png'
                width={1920}
                height={1080}
                >
            </Image>
        </div>
    )
}