// 'use client'
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
// import '../mainmenu.css'
import  ahmad  from "./mainmenu.module.css";

export default function MainMenu(){
    const router = useRouter();
    return(
        <header className={ahmad.logo}>
            <section className="header-services">
                <div className="container flex mx-auto">
                    <Image src="/images/icon1.svg"  className="img-serveies" width={30} height={30} alt="kku"/>
                    <Image src="/images/icon2.svg"  className="img-serveies" width={30} height={30} alt="kku"/>
                    <Image src="/images/icon3.svg" className="img-serveies" width={30} height={30} alt="kku"/>
                </div>
            </section>
            <section className="header-main">
                <div className="container flex mx-auto">
                    <div className="logo flex">
                        <Image src="/images/logo_kku_new2.png" width={60} height={60} alt="kku"/>
                        <div className="logo-text">
                            <span>جامعة الملك خالد</span>
                            <span>King Khalid University </span>
                        </div>
                    </div>

                    <nav className="mainmenu">
                        <ul className="level-1">
                            {/* <li className={(pathname == "/" ? "active" : "default")}>
                                <Link href="/" >Home</Link>
                            </li> */}
                            <li className={(router.pathname == "/about" ? "active" : "default")}>
                                <Link href="/about">University</Link>
                            </li>
                            <li className={(router.pathname == "/news" ? "active" : "default")}>
                                <Link href="/admission">News</Link>
                            </li>
                            <li className={(router.pathname == "/" ? "active" : "default")}>
                                <Link href="/research">Research</Link>
                            </li>
                            <li className={(router.pathname == "/" ? "active" : "default")}>
                                <Link href="/colleges">Colleges</Link>
                            </li>                                                                                                           
                            <li className={(router.pathname == "/" ? "active" : "default")}>
                                <Link href="/student-live">Student Live</Link>
                            </li>   
                        </ul>
                    </nav>
                    <a href="https://itcsvc.kku.edu.sa/KKU_MyKku" className="kku_btn">My kku</a>
                </div>
            </section>
        </header>        
    );
}