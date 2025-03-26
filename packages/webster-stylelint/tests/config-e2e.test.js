const {resolve, relative} = require('path');
const stylelint = require('stylelint');
const {readFileSync} = require('fs');

/**
 * Tests that report errors in multiple files may change the order of the files
 * across multiple runs.
 * To avoid flaky tests, assert the reporting of errors in one file only per
 * test case. Asserting no errors are reported across multiple files is ok.
 */
describe('stylelint-plugin E2E Tests', () => {
  it('configures value-keyword-case', async () => {
    const result = await runStylelint('value-keyword-case.invalid.scss');
    expect(result.status).toBe(2);
    expect(result.error).toContain('Expected "Value" to be "value" (value-keyword-case)');
    expect(result.error).toContain('Expected "VALUE" to be "value" (value-keyword-case)');
    expect(result.error).toContain('Expected "Monaco" to be "monaco" (value-keyword-case)');
  });

  it('configures scss files', async () => {
    const result = await runStylelint('scss.invalid.scss');
    expect(result.status).toBe(2);
    expect(result.error).toContain('Expected "$value * 1px" instead of "#{$value}px"');
    expect(result.error).toContain('Unexpected union class name with the parent selector (&)');
    expect(result.error).toContain('Expected ".n3" to have no more than 2 classes');
    expect(result.error).toContain('Expected ".n3" to have no more than 1 combinator');
  });
});

async function runStylelint(pattern) {
  const stylelintCwd = resolve(__dirname, 'fixtures');
  const configFile = resolve(stylelintCwd, 'stylelint.config.js');

  try {
    const result = await stylelint.lint({
      configFile,
      files: resolve(stylelintCwd, pattern),
      formatter: 'json',
    });

    const errorLines = [];
    const jsonErrors = JSON.parse(result.output);

    for (const error of jsonErrors) {
      for (const warning of error.warnings) {
        errorLines.push(
          `${warning.text} (at ${relative(stylelintCwd, error.source)}:${warning.line}:${warning.column})`,
        );
      }
    }

    return {
      status: result.errored ? 2 : 0,
      output: result.output,
      error: errorLines.join('\n'),
    };
  } catch (error) {
    console.error('Stylelint error:', error);
    return {
      status: null,
      output: '',
      error: error.message,
    };
  }
}
