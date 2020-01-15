import React, { useContext } from 'react'
import {Form,Button} from 'semantic-ui-react';
import {useForm} from '../hooks/useForm';
import UserContext from '../context/user/userContext';

const Login = (props) => {
    const userContext = useContext(UserContext);
    const {login} = userContext;

    const {values,onChange,onSubmit} = useForm(loginUser,{
        email:'',
        password:''
    })

    function loginUser(){
        login(values);
       props.history.push('/');

    }
    return (
        <div className="form-container">
          <Form onSubmit={onSubmit}>
              <Form.Field>
                  <Form.Input
                    name="email"
                    placeholder="Enter Yout Email ..."
                    type="email"
                    value={values.email}
                    onChange={onChange}

                  />
                  <Form.Input
                    name="password"
                    placeholder="Enter Yout Password ..."
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    
                  />

                  <Button color="blue">Login</Button>
              </Form.Field>
          </Form>
        </div>
    )
}

export default Login
