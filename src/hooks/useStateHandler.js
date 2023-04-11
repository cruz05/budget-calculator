import { useCallback, useReducer } from "react";
import useLocalStorage from "./useLocalStorage";

function reducer(state, action) {
  const { type, payload } = action;

  if (type === "update_services") {
    return {
      ...state,
      services: state.services.map((s, i) => i === payload.id ? {...s, checked: payload.checked} : s)
    };
  }

  if (type === "calculate_total") {
    return {
      ...state,
      total: state.services.filter(s => s.checked === true).reduce((accumulator, { price }) => accumulator + price, 0) + state.subtotal
    };
  }

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
      ...state,
      subtotal: 0,
    };
  }

  return state;
}

export default function useStateHandler() {
  const initialValue = {
    services: [{ label: 'Web page', price: 500 }, { label: 'SEO consultancy', price: 300 }, { label: 'Google Ads campaign', price: 200 }],
    pages: 1,
    languages: 1,
    subtotal: 0,
    total: 0
  }
  const [storedData] = useLocalStorage({ key: 'data', initialValue })

  const [state, dispatch] = useReducer(reducer, storedData || initialValue);

  const setPages = useCallback((value) => {
    dispatch({ type: "update_pages", payload: value });
  }, []);

  const setLangs = useCallback((value) => {
    dispatch({ type: "update_languages", payload: value });
  }, []);

  const resetValues = useCallback(() => {
    dispatch({ type: "reset_values" });
  }, []);

  const setServices = useCallback((payload) => {
    dispatch({ type: "update_services", payload });
  }, []);

  const setTotal = useCallback(() => {
    dispatch({ type: "calculate_total"});
  }, []);
  
  return { state, setPages, setLangs, resetValues, setServices, setTotal };
}
