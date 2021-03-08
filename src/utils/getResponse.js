const getResponse = (value, state) => {
  state.push(value);
  return state;
};

export default getResponse;
