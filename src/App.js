import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

//actions
import { addFeature, removeFeature } from "./actions/featureActions";



const App = props => {
  console.log(props, "this is props in app")
  
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("this is item in removeFeature", item)
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("this is item", item)
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} additionalFeatures={props.additionalFeatures} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  console.log("this is mapStateToProps", state )
  return {
    car: state.car, 
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps, {addFeature, removeFeature})(App);
