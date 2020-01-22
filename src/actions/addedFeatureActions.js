export const addFeature = newFeature => {
    console.log(newFeature, "actions.js payload")
    
    return { type: "ADD_FEATURE", payload: newFeature}
}