export const addFeature = newFeature => {
    console.log(newFeature, "actions.js payload")
    
    return { type: "ADD_FEATURE", payload: newFeature}
}


export const removeFeature = delFeature => {
    console.log(delFeature, "actions.js payload for delFeture")
    
    return { type: "REMOVE_FEATURE", payload: delFeature}
}