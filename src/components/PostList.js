// can directly import the Component class
import React, { Component } from "react";
// import the connect function, notice lower case
import { connect } from "react-redux";
// import the action creator function: using curly braces
// since it was originally a named export from its file
import { fetchPosts } from "../actions";

// no longer need to use React.Component call
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
