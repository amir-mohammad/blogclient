import {GET_ALL_POSTS,FAIL_GET_ALL_POSTS,ADD_POST,FAIL_POST,LIKE_POST,ADD_COMMENT} from './types';


export default (state,action) => {
    switch(action.type){
        case GET_ALL_POSTS:
            return{
                ...state,
                posts:action.payload,
                loading:false,
                errors:null
            }

        case FAIL_GET_ALL_POSTS:
            return{
                ...state,
                posts:[],
                loding:false,
                errors:action.payload
            } 
            
        case ADD_POST:
            return{
                ...state,
                posts:[...state.posts,action.payload].reverse(),
                loading:false,
                errors:null
            }

        case LIKE_POST:
            return{

                ...state,
                posts: state.posts.map(post => post['_id'] === action.payload['_id'] ? post = action.payload:post),
                loading:false,
                errors:null

            }   
            
        case ADD_COMMENT:
            return{

                ...state,
                posts:state.posts.map(post => post['_id'] === action.payload['_id'] ? post = action.payload : post),
                loading:false,
                errors:null
            }    
    }
}