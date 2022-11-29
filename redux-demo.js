const redux = require('redux')

// This is Reducer Function That contains 
// Inputs: Old State + Dispatched Action 
// Output: New State Object

// This Reducer Function Default Receives A State And Action 
// And Return New State 
const counterReducer = (state = {counter: 0}, action) => {
  return {
    counter: state.counter + 1
  }
}

// The createStore() is deprecated . Now use the configureStore() 
const store  = redux.createStore(counterReducer)

console.log(store.getState());

const counterSubscriber = () => {
   const latestState = store.getState()
   console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'INCREMENT'  })