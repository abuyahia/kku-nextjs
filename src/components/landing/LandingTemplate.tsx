import { LandingTemplateProps } from "../../types/landingTemplate.type";
import Link from "next/link"; 
// import Image from "next/image";
import Styles from "./LandingTemplate.module.css"

const LandingTemplate = ({ title, children ,CTName, CTPath, CTColor}: LandingTemplateProps) => {
  return (
    <section>          
          <Link className={`d-flex   CTColor-${CTColor} ${Styles.CTColor}`} href={CTPath}>
            <div className={`container d-flex justify-content-between align-items-center  CTColor-${CTColor}`}>
                <h2 className={Styles.h2}>
                  {CTName}
                </h2>   
                <i className="fa-light fa-angle-right"></i>                   
                {/* <Image src="/images/arrow-right-new.svg" width={30} height={30} alt="" /> */}
            </div>
          </Link>
        
        <article className="d-flex flex-column container">
          <h1>{title}</h1>
          {children}
        </article>
    </section> 

  );
};

export default LandingTemplate;