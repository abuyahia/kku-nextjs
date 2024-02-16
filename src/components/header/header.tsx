import  Styles   from "./header.module.css";
import HeaderServices from "./services/header_services";
import MainMenu from "./mainmenu/mainMenu";
import Branding from "./branding/branding";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={`d-flex flex-column ${Styles.header}`}>            
            <HeaderServices />
            <section className={Styles.header_main}>
                <div className="container align-items-end d-flex flex-wrap">
                    <Branding />
                    <MainMenu />
                    <Link href="https://itcsvc.kku.edu.sa/KKU_MyKku" className="kku_btn d-flex justify-self-end me-0 ms-auto">
                        <i className="fa-solid fa-link-simple"></i> 
                        Services MyKKU
                    </Link>
                </div>
            </section>
        </header>        
    );
}