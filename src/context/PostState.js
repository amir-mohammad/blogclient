import React,{useReducer} from 'react';
import postReducer from './postReducer';
import PostContext from './postContext';
import axios from 'axios';
import {GET_ALL_POSTS,FAIL_GET_ALL_POSTS} from './types';



const PostState = (props) =>{
    const initialState ={
        posts:[],
        post:{},
        loading:true,
        errors:null
    }

    const [state,dispatch] = useReducer(postReducer,initialState);

    

    const getPosts = async () =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

      try {
        const postsArray = await axios.get('http://localhost:2500/posts/',config);

        dispatch({
            type:GET_ALL_POSTS,
            payload:postsArray.data
        });
     

       
      } catch (error) {
          dispatch({
              type:FAIL_GET_ALL_POSTS,
              payload:error
          })
      }
    }



    return(<PostContext.Provider value={{
        posts:state.posts,
        post:state.post,
        loading:state.loading,
        errors:state.errors,
        getPosts
    }}>
        {props.children}
    </PostContext.Provider>)
}

export default PostState;