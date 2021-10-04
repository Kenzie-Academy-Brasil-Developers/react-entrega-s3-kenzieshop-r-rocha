const token = localStorage.getItem("token") || "";

const defaultState = { token, };

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "@user/SIGN-IN":
        const { token } = action;
        return {...state, token};

      case "@user/SIGN_UP":
        const { token2 } = action;
        return {...state, token2};
  
      default:
        return state;
    }
  };
  
  export default userReducer;