//  Reducer function jo sare  actions ko handle karega )
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      //( naye todo or task  ko list main add krne k liye
      return [...state, action.payload];

    case "TOGGLE_TODO":
      //  task ko complete ya incomplete mark krne k liye )
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_TODO":
      // ( kisi bhi todo ko delete krne k liye )
      return state.filter((todo) => todo.id !== action.id);

    case "EDIT_TODO":
      //  kisi bhi todo ka text update krne k liye )
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.newText } : todo
      );

    case "REORDER_TODOS":
      //drag and drop ke zariye list ka order change krne k liye
      return action.payload;

    default:
      return state; //  ( agar koi unknown action aye to state waisi ki waisi rahay
  }
};
