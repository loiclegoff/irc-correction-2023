const initialState = {
  robots: [],
};

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ROBOTS':
      return {
        ...state,
        robots: action.payload,
      };
    default:
      return state;
  }
};
