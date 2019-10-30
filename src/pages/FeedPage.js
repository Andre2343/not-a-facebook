/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';
import PostsModel from '../modules/posts';
// import posts from '../__mocks__/posts';

function FeedPage() {
  const [posts] = useState(PostsModel.get());


  handleAddPost = (post) => {
    PostsModel.add(post);
    const posts = PostsModel.get();
    setState({ posts });
  };

  handleRemovePost = (post) => {
    PostsModel.remove(post);
    const posts = PostsModel.get();
    setState({ posts });
  };

  return (
    <>
      <PostForm handleAddPost={handleAddPost} />
      <Feed posts={posts} handleRemovePost={handleRemovePost} />
    </>

  );
}

export default FeedPage;
