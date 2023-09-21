const getDebounce = (delay) => {
  let debouncerTimer;
  return function (func, ...params) {
    clearTimeout(debouncerTimer);
    debouncerTimer = setTimeout(() => func(...params), delay);
  };
};

export const debounce = getDebounce(100);
