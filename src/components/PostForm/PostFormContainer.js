/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import { createPost } from '../../utils/creators';
import UsersModule from '../../modules/users';

class PostFormContainer extends Component {
  state = {
    textAreaVisible: true,
    curUser: UsersModule.me(),
    body: '',
  }

  toggleTextArea = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState((prevState) => ({
      textAreaVisible: !prevState.textAreaVisible,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { curUser } = this.state;
    const { handleAddPost } = this.props;
    const post = createPost(e.target.body.value, curUser);
    handleAddPost(post);
    this.setState({ body: '' });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { textAreaVisible, body } = this.state;
    return (
      <PostForm
        toggleTextArea={this.toggleTextArea}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        textAreaVisible={textAreaVisible}
        body={body}
      />
    );
  }
}

PostFormContainer.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
};

export default PostFormContainer;
