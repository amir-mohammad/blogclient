import React, { useContext,useEffect } from 'react';
import PostContext from '../context/postContext';
import  {Grid} from 'semantic-ui-react'
import PostCard from '../components/PostCard';


const Home = () => {
    const postContext = useContext(PostContext);
    const {posts,getPosts,errors,loading} = postContext;

    useEffect(() =>{
       
           getPosts();


       
    },[])

    return (
        <div className="posts">
           {posts && (<Grid columns={3} >
                <Grid.Row >
                    {posts.length> 0 && (posts.map( post => <PostCard key={post.id} post={post} />))}
                </Grid.Row>
           </Grid>)}
        </div>
    )
}

export default Home
