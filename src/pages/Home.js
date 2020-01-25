import React, { useContext, useEffect, useState } from "react";
import PostContext from "../context/postContext";
import {
  Grid,
  Card,
  Form,
  Button,
  Transition,
  GridColumn
} from "semantic-ui-react";
import PostCard from "../components/PostCard";
import UserContext from "../context/user/userContext";
import AddPostCard from "../components/AddPostCard";

const Home = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const postContext = useContext(PostContext);
  const { posts, getPosts, errors, loading } = postContext;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      <Grid columns={3}>
        <Grid.Row>
          {user && <AddPostCard />}

          <Transition.Group animation="drop">
            {posts &&
              posts.map(post => (
                <Grid.Column key={post.id} style={{ marginTop: "20px" }}>
                  <PostCard  post={post}/>
                </Grid.Column>
              ))}
          </Transition.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
