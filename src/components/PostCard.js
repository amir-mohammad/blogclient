import React, { useContext } from "react";
import { GridColumn, Card, Image,Button, Icon, Label,Transition, Grid ,Modal,Header, Form } from "semantic-ui-react";
import moment from "moment";
import UserContext from "../context/user/userContext";
import {withRouter} from 'react-router-dom';
import PostContext from "../context/postContext";
import {useForm} from '../hooks/useForm';
import { useState } from "react";



const PostCard = (props) => {
    const { 
      _id, username, body, createAt, likeCount, commentCount
     } = props.post;
    const userContext = useContext(UserContext);
    const postContext = useContext(PostContext);
    const {user} = userContext;
    const {likePost,addAComment} = postContext;
    const {values,onChange,onSubmit} = useForm(addComment,{
      body:''
    })
    const [open,setOpen] = useState(false);
    function addComment(){
      const token = localStorage.getItem('jwtToken');
      addAComment(_id,values.body,token);
      setOpen(false);
    }
    const likeClickHandler = () => {
   
      const token = localStorage.getItem('jwtToken');
        if(user){
        
         likePost(_id,token);
        }else{
          
          props.history.push('/login');
        }
    }

    const commentHandler = () =>{
      const token = localStorage.getItem('jwtToken');
      if(user){

      }else{
        props.history.push('/login');
      }
    }
  return (
    <>
    
    
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />

          <Card.Header>{username}</Card.Header>
          <Card.Meta>{moment(createAt).fromNow()}</Card.Meta>
          <Card.Description>{body}</Card.Description>

          <Button as="div" labelPosition="right" style={{marginTop:"20px"}} onClick={likeClickHandler}>
              <Button color="red">
                  <Icon name="heart"/>
                  Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>
                        {likeCount}
             </Label>
          </Button>
         {user ? (  <Modal open={open} trigger={<Button as="div" labelPosition="right" style={{marginTop:"20px"}} onClick={()=> setOpen(true)}>
              <Button color="teal">
                  <Icon name="comments"/>
                  Comments
              </Button>
              <Label as='a' basic color='teal' pointing='left'>
                        {commentCount}
             </Label>
          </Button>}>
    <Modal.Header>Put Your Comment</Modal.Header>
    <Modal.Content>
     
      <Modal.Description>
      <Form onSubmit={onSubmit}>
      <Form.TextArea label='Please insert your comment' placeholder='Put your Comment' value={values.body} onChange={onChange} name="body"/>
      <Button type="submit" color="teal">Send Comment</Button>
      </Form>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>):( <Button as="div" labelPosition="right" style={{marginTop:"20px"}} onClick={commentHandler}>
              <Button color="teal">
                  <Icon name="comments"/>
                  Comments
              </Button>
              <Label as='a' basic color='teal' pointing='left'>
                        {commentCount}
             </Label>
          </Button>)}
        </Card.Content>
      </Card>
      </>
   

  
    
  );
};

export default withRouter(PostCard) ;
