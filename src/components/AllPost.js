import React from "react";
import { connect } from "react-redux";
import { Post, EditComponent } from ".";

function AllPost(props) {
  return (
    <div>
      <h1 className="post_heading">All Posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          {post.editing ? (
            <EditComponent post={post} key={post.id} />
          ) : (
            <Post key={post.id} post={post} />
          )}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({ posts: state });

export default connect(mapStateToProps)(AllPost);
