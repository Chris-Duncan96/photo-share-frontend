const tsJest = require('ts-jest');

const tsJestTransformer = tsJest.createTransformer({
  tsconfig: {
    jsx: 'react',
  },
});

module.exports = tsJestTransformer;
