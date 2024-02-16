import Image from 'next/image';
// import Loading from './loading';
import PostTemplate from '../../../components/post/PostTemplate';

export default async function newsPost(postID: any){
        
        const response = await fetch(`http://kku.aaa:81/ar/api/v1/news/${postID.params.nid}`);
        const posts = await  response.json();


        return(
        <>
                <PostTemplate CTColor="red" CTName="News" CTPath="/news" image= {posts[0].image_large} title= {posts[0].title}>    
                        <p> {posts[0].body}</p>
                </PostTemplate>
        </>
        )

}
