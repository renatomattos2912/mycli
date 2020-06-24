module.exports = function (plop) {
  // Helpers
  const H_CWD = require('./helpers/cwd');
  plop.setHelper('cwd', H_CWD);

  // Generators
  const G_USE_CASE_CREATE = require('./generators/use-case/create');
  plop.setGenerator('Use Case: Create', G_USE_CASE_CREATE);
};
