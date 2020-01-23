import React from 'react';

const AddedFeature = props => {
  console.log("this is AddedFeature", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick ={() => props.removeFeature(props.item)} >X</button>
      {props.price}
      {props.name}
      
    </li>
  );
};

export default AddedFeature;
