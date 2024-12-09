"use strict";

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };
  composed.on = (eventName, handler) => {
    if (eventName === "error" && typeof(handler) === "function") {
      handlers.push(handler);
    }
  };
  return composed;
};

module.exports = { compose };
