export default function(state = null, action) {
  switch(action.type) {
    case 'USER_SElECTED':
      return action.payload;
  }
  return state;
}
