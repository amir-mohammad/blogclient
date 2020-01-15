import {GET_ALL_POSTS,FAIL_GET_ALL_POSTS} from './types';


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
    }
}