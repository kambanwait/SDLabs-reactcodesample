import React from 'react';

const AdminControls = (props) => {
  return (
    <footer className="card-footer">
      <p className="card-footer-item">
        <a className="button is-primary" onClick={() => { props.toggleEdit(props.index) }}>Edit</a>
      </p>
      <p className="card-footer-item">
        <a className="button is-danger" onClick={() => { props.removeRecipe(props.recipe) }}>Remove</a>
      </p>
    </footer>
  );
}

export default AdminControls;