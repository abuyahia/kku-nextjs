import Link from "next/link";
import Image from 'next/image';
import LandingTemplate from '../../components/landing/LandingTemplate';

export default async function newsList(){

    try {
 
      




    const response = await fetch("https://portal.aseer.gov.sa/ar/allnews/api/v1", {next:{ revalidate: 20 },});
    
    const getNews = await response.json();
    const newsList = getNews.map((news: any) => {
        return (
            <div className="components-news d-flex col-5 offset-1 flex-column" key={news.nid} >
                    <h4>{news.Title}</h4>     
                    <Link href={`/news/${news.nid}`}>Link</Link>      
                    <Image className='col-6' width={100} height={100} src={`${news.Image}`} alt="kku" />                                                                           
            </div>		
        )
    });



            return(
                <LandingTemplate CTColor="red" CTName="News" CTPath="/news" image= "" title= "News"> 
                    <div  className="d-flex flex-column flex-wrap container">
                        <div  className="d-flex flex-row flex-wrap  col">                        
                            {newsList}                         
                        </div>
                    </div>
                </LandingTemplate>
            );
        } catch (err) {
            return(<h1>not result</h1>)
           }

}
