import { useCallback, useReducer } from "react";

function reducer(state, action) {
  const { type, payload } = action;

  if (type === "update_pages") {
    return {
      ...state,
      pages: payload,
      subtotal: payload * state.languages * 30,
    };
  }

  if (type === "update_languages") {
    return {
      ...state,
      languages: payload,
      subtotal: state.pages * payload * 30,
    };
  }

  if (type === "reset_values") {
    return {
      pages: 1,
      languages: 1,
      subtotal: 30,
    };
  }

  return state;
}

export default function useReduce() {
  const [state, dispatch] = useReducer(reducer, {
    pages: 1,
    languages: 1,
    subtotal: 30,
  });

  const setPages = useCallback((value) => {
    dispatch({ type: "update_pages", payload: value });
  }, []);

  const setLangs = useCallback((value) => {
    dispatch({ type: "update_languages", payload: value });
  }, []);

  const resetValues = useCallback(() => {
    dispatch({ type: "reset_values" });
  }, []);

  return { state, setPages, setLangs, resetValues };
}
