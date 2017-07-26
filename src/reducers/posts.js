export default function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing likes!!");
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are UPDATING
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after
      ]
    default:
      return state;
  }
}
