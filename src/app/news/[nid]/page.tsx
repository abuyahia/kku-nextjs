import Image from 'next/image';
// import Loading from './loading';
import PostTemplate from '../../../components/post/PostTemplate';

export default async function newsPost(postID: any){
        try {
        
        const response = await fetch(`https://portal.aseer.gov.sa/ar/allnews/one/api/v1/${postID.params.nid}`);
        const posts = await  response.json();


        return(
        <>
                <PostTemplate CTColor="red" CTName="News" CTPath="/news" image= {posts[0].Image} title= {posts[0].Title}>    
                        <p> {posts[0].Description}</p>
                </PostTemplate>
        </>
        )
        } catch (err) {
                return(<h1>not result</h1>)
        }

}
