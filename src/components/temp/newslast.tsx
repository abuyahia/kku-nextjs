/** @format */

import Link from "next/link";
import Image from "next/image";
export default async function NewsLast() {
  const response = await fetch("http://kku.aaa:81/ar/api/v1/news-last", {
    next: { revalidate: 40 * 1000  },
  });
  const getNews = await response.json();
  //console.log(getNews[0]);
  const mainNews: any = { ...getNews[0] };
  // const subNews: any[] = [getNews[1], getNews[2], getNews[3]];
  // console.log(mainNews.length);
  const newsFirst = (
    <div>
      <h2>{mainNews.title}</h2>
    </div>
  );

  const newsL = getNews.map((news: any) => {
    return (
      <div key={news.nid}>
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            maxWidth: "500px",
            textAlign: "start",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              width: "100px",
              display: "flex",
              color: "#fff",
            }}
          >
            {" "}
            {news.nid} -{" "}
          </h2>
          <h2>{news.title}</h2>
          {/* <img src={news.image_large} alt='kku' /> */}
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OiAcEKYFke_7WcK6Effo5EZ-eXFLN9u6Fm6qdOMn&s" alt="Landscape picture" width={800} height={500} />  
          <Link href={`/news/${news.nid}`}>more</Link>
        </div>
      </div>
    );
  });

  return (
    <section className='news-Last'>
      <div className='news-Last--header'>
        List News
        {newsFirst}
      </div>
      <div className='news-Last--content'>{newsL}</div>
    </section>
  );
}
