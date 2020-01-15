import React from "react";
import { GridColumn, Card, Image,Button, Icon, Label } from "semantic-ui-react";
import moment from "moment";

const PostCard = ({
  post: { id, username, body, createAt, likeCount, commentCount }
}) => {
  return (
    
    <GridColumn  style={{marginTop:"20px"}}>
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

          <Button as="div" labelPosition="right" style={{marginTop:"20px"}}>
              <Button color="red">
                  <Icon name="heart"/>
                  Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>
                        {likeCount}
             </Label>
          </Button>
          <Button as="div" labelPosition="right" style={{marginTop:"20px"}}>
              <Button color="teal">
                  <Icon name="comments"/>
                  Comments
              </Button>
              <Label as='a' basic color='teal' pointing='left'>
                        {commentCount}
             </Label>
          </Button>
        </Card.Content>
      </Card>
    </GridColumn>
    
  );
};

export default PostCard;
