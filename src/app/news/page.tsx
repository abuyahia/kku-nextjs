import Link from "next/link";
import Image from 'next/image';
import LandingTemplate from '../../components/landing/LandingTemplate';

export default async function newsList(){

    try {
 
      




    const response = await fetch("http://kku.edu.sa/ar/api/v1/news", {next:{ revalidate: 20 },});
    
    const getNews = await response.json();
    const newsList = getNews.map((news: any) => {
        return (
            <div className="components-news d-flex col-5 offset-1 flex-column" key={news.nid} >
                    <h4>{news.title}</h4>     
                    <Link href={`/news/${news.nid}`}>Link</Link>      
                    <img className='col-6' src={`${news.image_large}`} alt="kku" />                                                                           
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
