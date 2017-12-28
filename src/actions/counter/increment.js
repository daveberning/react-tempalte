export const INCREMENT = 'INCREMENT';

export function increment(value) {
  const newValue = value + 1;

  return {
    type: INCREMENT,
    payload: newValue
  };
}
