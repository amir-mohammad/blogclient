import {SUCCES_REGISTER_USER,FAIL_REGISETER_USER,GET_TOKEN,FAIL_LOGIN_USER, LOGIN_USER, LOG_OUT} from  '../types';

export default (state,action) =>{
    switch(action.type){
        case SUCCES_REGISTER_USER:
            return{
                ...state,
                user:action.payload,
                load:true
                
            }

        case FAIL_REGISETER_USER:
            return{
                ...state,
                user:null,
                load:true,
                errors:action.payload
            }   
            
            
        case GET_TOKEN:
            return{
                ...state,
                user:action.payload,
                load:true,
                errors:null
            }


        case LOGIN_USER:
            return{
                ...state,
                user:action.payload,
                load:true,
                errors:null
            }    
        case FAIL_LOGIN_USER:
            return {
                ...state,
                user:null,
                load:true,
                errors:action.payload
            } 

        case LOG_OUT:
            return{
                ...state,
                user:null,
                load:true,
                errors:null
            }    
    }
}