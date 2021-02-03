export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_JOB_TO_FAV":
        return {
          ...state,
          fav: {
            ...state.fav,
            fav: state.fav.concat(action.payload),
          },
        };
      case "REMOVE_JOB_FROM_FAV":
        return {
          ...state,
          cart: {
            ...state.fav,
            fav: [
              ...state.fav.filter(
                (job) => job !== action.payload
              ),
            ],
          },
        };
      default:
        return state;
    }
  }