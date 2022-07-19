const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      state = { ...initialState, good: (initialState.good += 1) };
      return state;
    case 'OK':
      state = { ...initialState, ok: (initialState.ok += 1) };
      return state;
    case 'BAD':
      state = { ...initialState, bad: (initialState.bad += 1) };
      return state;
    case 'ZERO':
      state = { good: 0, ok: 0, bad: 0 };
      return state;
    default:
      return state;
  }
};

export default counterReducer;
