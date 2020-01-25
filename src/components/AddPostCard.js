import React, { useContext } from 'react';
import { Grid, Card,Form,Button } from "semantic-ui-react";

import PostContext from '../context/postContext';
import { useForm } from '../hooks/useForm';

const AddPostCard = () => {
  const postContext = useContext(PostContext);
  const {addPost,loading,error} = postContext;

  const {values,onChange,onSubmit} = useForm(addMiddlePost,{
    body:''
  })

  function addMiddlePost(){
    const token = localStorage.getItem('jwtToken');
    addPost(values,token);
  }
    return (
        <Grid.Column style={{marginTop:"20px"}}>
        <Card fluid>
          <Card.Content>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>What do you think?</label>
                <input  type="text" name="body" placeholder="Please insert your body" value={values.body} onChange={onChange}/>
                <Button type="submit" color="teal" style={{marginTop:"20px"}} >
                      Add Post
                </Button>
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
}

export default AddPostCard
