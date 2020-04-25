const righto = require('righto');

function series (fn, callback) {
  if (fn.constructor.name === 'GeneratorFunction') {
    const generator = righto.iterate(fn);
    const result = righto(generator);
    return result(callback);
  }

  return righto(fn)(callback);
}

module.exports = series;
