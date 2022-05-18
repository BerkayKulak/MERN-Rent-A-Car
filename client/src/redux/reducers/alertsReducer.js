const initialData = {
  loading: false,
};

export const alertsReducer = (state = initialData, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
