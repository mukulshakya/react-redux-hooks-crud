import React, { useRef } from "react";
import { connect } from "react-redux";

function PostForm(props) {
  const getTitle = useRef();
  const getMessage = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const title = getTitle.current.value;
    const message = getMessage.current.value;
    const data = {
      id: props.state.length ? props.state[0].id + 1 : 1,
      title,
      message
    };
    console.log(data);

    props.dispatch({
      type: "ADD_POST",
      data
    });

    console.log("args ", props);

    getTitle.current.value = "";
    getMessage.current.value = "";
  };

  return (
    <div className="post-container">
      <h1 className="post_heading">Create Post</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          ref={getTitle}
          placeholder="Enter Post Title"
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          ref={getMessage}
          cols="28"
          placeholder="Enter Post"
        />
        <br />
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(PostForm);
