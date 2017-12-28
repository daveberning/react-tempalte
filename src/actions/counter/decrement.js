export const DECREMENT = 'DECREMENT';

export function decrement(value) {
  const newValue = value - 1;

  return {
    type: DECREMENT,
    payload: newValue
  };
}
