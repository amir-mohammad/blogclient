import React,{useContext} from 'react'
import {Form,Button} from  "semantic-ui-react";
import {useForm} from '../hooks/useForm';
import UserContext from '../context/user/userContext';

const Register = () => {
    const userContext = useContext(UserContext);
    const {registerUser,load,errors} = userContext;

    const {values,onChange,onSubmit} = useForm(register,{
        name:'',
        email:'',
        password:'',
        confirmPassword:''

    })

     function register(){
        registerUser(values);
    }

    const checkError = (name) =>{
    
       if(errors){
           const err = errors.filter(error => error.param === name);
           if(err){
            return true;
           } else{
            return false;
           }
       }else{
           return false
       }
    }
    return (
        <div className="form-container">
           <Form onSubmit={onSubmit}>
               <Form.Field>
                   <Form.Input
                        name='name'
                        placeholder='Enter Your Name'
                        type ="text"
                        value={values.name}
                        onChange={onChange}
                      
                       
                   />
                    <Form.Input
                        name='email'
                        placeholder='Enter Your Email'
                        type ="email"
                        value={values.email}
                        onChange={onChange}
                       
                       
                   />
                   <Form.Input
                        name='password'
                        placeholder='Enter Your Password'
                        type ="password"
                        value={values.password}
                        onChange={onChange}
                     
                   />
                   <Form.Input
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        type ="password"
                        value={values.confirmPassword}
                        onChange={onChange}
                        
                   />

                   <Button type="submit" color="blue">
                       Register
                   </Button>
               </Form.Field>
           </Form>
           {errors && ( <ul className="ui error message" style={{padding:"30px"}}>
                    {errors.map(error => <li>{error.msg}</li> )}
           </ul> )}
        </div>
    )
}

export default Register
