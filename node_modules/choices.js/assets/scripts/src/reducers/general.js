const general = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        loading: action.isLoading
      };
    }

    default: {
      return state;
    }
  }
};

export default general;
