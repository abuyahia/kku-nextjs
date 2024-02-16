
import Image from "next/image";
import Styles from "./../header.module.css"
export default function HeaderServices(){
    return(
            <section className={Styles.header_services}>
                <div className="container d-flex justify-content-end   w-100">
                    <Image src="/images/icon1.svg"  className="img-serveies" width={30} height={30} alt="kku"/>
                    <Image src="/images/icon2.svg"  className="img-serveies" width={30} height={30} alt="kku"/>
                    <Image src="/images/icon3.svg"  className="img-serveies" width={30} height={30} alt="kku"/>
                </div>
            </section>
    );
}