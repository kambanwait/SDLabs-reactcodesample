import React from 'react';

const AdminControls = () => {
  return (
    <div>
      <small>Admin control: </small>
      <button onClick={() => { props.editRecipe(props.index) }}>Edit</button>
      <button onClick={() => { props.removeRecipe(props.recipe) }}>Remove</button>
      <br />
    </div>
  );
}

export default AdminControls;