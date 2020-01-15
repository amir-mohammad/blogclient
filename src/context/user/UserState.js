import React,{useReducer, useContext} from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import axios from 'axios';
import {SUCCES_REGISTER_USER,FAIL_REGISETER_USER,GET_TOKEN,LOGIN_USER,FAIL_LOGIN_USER,LOG_OUT} from '../types';
import jwtDecode from 'jwt-decode';

const UserState = (props) =>{
    const initialState = {
        users:[],
        user:null,
        load:false,
        errors:null
    }


   

    const [state,dispatch] = useReducer(userReducer,initialState);
    const authenticationUser = () =>{
            const token = localStorage.getItem('jwtToken');
            if(token){
                    const user = jwtDecode(token);
                    if(user.exp * 1000 < Date.now()){
                        localStorage.removeItem('jwtToken');
                    }
                    dispatch({
                        type:GET_TOKEN,
                        payload: user.user
                    })

            }else{
               
            }
    }
    const registerUser = async (user) =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
       try {
        const res = await axios.post('http://localhost:2500/users/register',{...user},config);
        dispatch({
            type:SUCCES_REGISTER_USER,
            payload:res.data
        });
        localStorage.setItem("jwtToken",res.data.token);
        
       } catch (error) {
        dispatch({
            type:FAIL_REGISETER_USER,
            payload:error.response.data.msg
        })
       }
    }

    const login = async (user) => {
        
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        try {
            const userlogin = await axios.post('http://localhost:2500/users/login',{...user},config);

            dispatch({
                type:LOGIN_USER,
                payload:userlogin.data
            })
          
           localStorage.setItem('jwtToken',userlogin.data.token)
        } catch (error) {
          
            dispatch({
                type:FAIL_LOGIN_USER,
                payload:error
              })
        }
    }

        const  logout =() =>{
            localStorage.removeItem('jwtToken');
            dispatch({
                type:LOG_OUT
                
            })
        }


    return(
        <UserContext.Provider value={{
            users:state.users,
            user:state.user,
            load:state.load,
            errors:state.errors,
            registerUser,
            authenticationUser,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;