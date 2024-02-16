import Image from "next/image";
import Link from "next/link";
import Styles from "../header.module.css"


export default function Branding(){
return(
    <div className={Styles.logo}>
        <Link href="/" className="d-flex">
            <Image src="/images/logo_kku_new2.png" width={50} height={50} alt="kku"/>
            <div className={`d-flex flex-column ${Styles.logo_text}`}>
                <span>جامعة الملك خالد</span>
                <span>King Khalid University </span>
            </div>
        </Link>
    </div>
);
}