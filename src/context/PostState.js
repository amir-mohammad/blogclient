import React,{useReducer} from 'react';
import postReducer from './postReducer';
import PostContext from './postContext';
import axios from 'axios';
import {GET_ALL_POSTS,FAIL_GET_ALL_POSTS,ADD_POST,FAIL_POST,LIKE_POST,ADD_COMMENT} from './types';



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
            payload:postsArray.data.reverse()
        });
        
        return postsArray.data;

       
      } catch (error) {
          dispatch({
              type:FAIL_GET_ALL_POSTS,
              payload:error
          })
      }
    }

    const addPost = async (inpost,token) =>{
       
        const config = {
            headers:{
                "Content-Type":"application/json",
                "x-auth-token":token
            }
        }

        try {
            const res  = await axios.post('http://localhost:2500/posts/add',{...inpost},config);
           
            dispatch({
                type: ADD_POST,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:FAIL_POST,
                payload:error
            })
            console.log(error.message);
        }
    }

    const likePost = async (postId,token) => {
       
      console.log(token)
        const config = {
            headers:{
                "Content-Type":"application/json",
                "x-auth-token":token
            }
        }


        try {
            const res = await axios.put(`http://localhost:2500/posts/likepost/${postId}`,{},config);
            dispatch({
                type:LIKE_POST,
                payload:res.data
            })
          
        } catch (error) {
            
        }
    }

    const addAComment = async (postId,body,token) =>{
        const config = {
            headers:{
                "Content-Type":"application/json",
                'x-auth-token':token
            }
        }

       try {
        const res = await axios.put(`http://localhost:2500/posts/addcomment/${postId}`,{body},config);
        
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        })
        
       } catch (error) {
           
       }


    } 

    return(<PostContext.Provider value={{
        posts:state.posts,
        post:state.post,
        loading:state.loading,
        errors:state.errors,
        getPosts,
        addPost,
        likePost,
        addAComment
    }}>
        {props.children}
    </PostContext.Provider>)
}

export default PostState;