const test = require('tape');
const righto = require('righto');
const rightoSeries = require('../');

test('generator works without error', t => {
  t.plan(2);

  function * seriesTest () {
    return 1;
  }

  rightoSeries(seriesTest, function (error, result) {
    t.notOk(error);
    t.equal(result, 1);
  });
});

test('generator works with rejection', t => {
  t.plan(2);

  function * seriesTest () {
    yield righto.fail(new Error('oh no'));
    return 1;
  }

  rightoSeries(seriesTest, function (error, result) {
    t.equal(error.message, 'oh no');
    t.notOk(result);
  });
});

test('normal function works', t => {
  t.plan(2);

  function seriesTest (callback) {
    callback(null, 1);
  }

  rightoSeries(seriesTest, function (error, result) {
    t.notOk(error);
    t.equal(result, 1);
  });
});
