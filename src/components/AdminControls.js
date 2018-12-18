import React from 'react';

const AdminControls = (props) => {
  return (
    <footer className="card-footer">
      <p className="card-footer-item">
        <button className="button is-primary" onClick={() => { props.toggleEdit(props.index) }}>Edit</button>
      </p>
      <p className="card-footer-item">
        <button className="button is-danger" onClick={() => { props.removeRecipe(props.recipe) }}>Remove</button>
      </p>
    </footer>
  );
}

export default AdminControls;