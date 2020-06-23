export default (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      console.log(state);
      return {
        state: {
          url: action.url,
        },
      };
    default:
      return state;
  }
};
