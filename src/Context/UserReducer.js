export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "GET_USER":
      return state;
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case "UPDATE_USER":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
