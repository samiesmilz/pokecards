import { useState, useEffect } from "react";
import axios from "axios";

const useFlip = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const flipCard = () => {
    setState((isUp) => !isUp);
  };

  return [state, flipCard];
};

const useAxios = (key, baseURL) => {
  const [state, setState] = useLocalStorage(key);

  const addItem = async (newItem = "", formatter = (data) => data) => {
    try {
      const response = await axios.get(`${baseURL}${newItem}`);
      setState((cards) => [...cards, formatter(response.data)]);
    } catch (error) {
      console.log(error);
    }
  };

  const clearItems = () => {
    setState([]);
  };

  return [state, addItem, clearItems];
};

const useLocalStorage = (key, initialState = []) => {
  if (window.localStorage.getItem(key)) {
    initialState = JSON.parse(window.localStorage.getItem(key));
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Store the state in local storage
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export { useFlip, useAxios, useLocalStorage };
