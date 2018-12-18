import React from 'react';

const AdminControls = (props) => {
  return (
    <div>
      <small>Admin control: </small>
      <button onClick={() => { props.toggleEdit(props.index) }}>Edit</button>
      <button onClick={() => { props.removeRecipe(props.recipe) }}>Remove</button>
      <br />
    </div>
  );
}

export default AdminControls;