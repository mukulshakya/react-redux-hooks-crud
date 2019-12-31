import React, { useRef } from "react";
import { connect } from "react-redux";

function EditComponent(props) {
  const getTitle = useRef();
  const getMessage = useRef();

  const handleEdit = e => {
    e.preventDefault();

    const newTitle = getTitle.current.value;
    const newMessage = getMessage.current.value;
    const data = { newTitle, newMessage };

    props.dispatch({ type: "UPDATE", id: props.post.id, data: data });
  };

  return (
    <div className="post">
      <form onSubmit={handleEdit} className="form">
        <input
          required
          type="text"
          ref={getTitle}
          defaultValue={props.post.title}
          placeholder="Enter Post Title"
        />
        <br />
        <br />
        <textarea
          required
          rows="5"
          ref={getMessage}
          defaultValue={props.post.message}
          cols="28"
          placeholder="Enter Post"
        />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}

export default connect()(EditComponent);
