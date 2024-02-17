import { PostTemplateProps } from "../../types/postTemplate.type";
import { Suspense } from 'react';
import Link from "next/link"; 
import Image from "next/image";
import Styles from "./PostTemplate.module.css"

const PostTemplate = ({ title, image, children ,CTName, CTPath, CTColor}: PostTemplateProps) => {
  const loaingImage = (
    <div> <h1 style={{fontSize:"70px"}}>  wait Image  --------------------------------------- </h1> </div>
  );

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
            <Suspense fallback={loaingImage}>
                {/* <img src={image} alt="kku" /> */}
                <Image src={image} width={1200} className={Styles.image_respo} height={600} alt='kku' />
            </Suspense>
            
            <h2>{title}</h2>
            {children}
        </article>
    </section> 

  );
};

export default PostTemplate;