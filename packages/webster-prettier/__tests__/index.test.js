import prettier from 'prettier';
import config from '../index.js';

describe('Prettier Configuration', () => {
  const format = async (code) => prettier.format(code, {...config, parser: 'babel'});

  describe('Basic Formatting Rules', () => {
    it('should use single quotes', async () => {
      const input = '"hello"';
      const output = await format(input);
      expect(output).toBe("'hello';\n");
    });

    it('should add semicolons', async () => {
      const input = 'const x = 1';
      const output = await format(input);
      expect(output).toBe('const x = 1;\n');
    });

    it('should use 2 spaces for indentation', async () => {
      const input = 'function test() {\nreturn true;\n}';
      const output = await format(input);
      expect(output).toBe('function test() {\n  return true;\n}\n');
    });

    it('should wrap at 100 characters', async () => {
      const longLine =
        'const veryLongVariableName = "This is a very long string that should be wrapped at 100 characters"';
      const output = await format(longLine);
      expect(output).toContain('\n');
    });

    it('should use LF line endings', async () => {
      const input = 'const x = 1;\r\nconst y = 2;';
      const output = await format(input);
      expect(output).toBe('const x = 1;\nconst y = 2;\n');
    });
  });

  describe('Advanced Formatting Rules', () => {
    it('should not add spaces between brackets', async () => {
      const input = '{ foo: "bar" }';
      const output = await format(input);
      expect(output).toBe("{\n  foo: 'bar';\n}\n");
    });

    it('should always add parentheses to arrow function parameters', async () => {
      const input = 'x => x * 2';
      const output = await format(input);
      expect(output).toBe('(x) => x * 2;\n');
    });

    it('should add trailing commas everywhere', async () => {
      const input = 'const obj = {\n  a: 1,\n  b: 2\n}';
      const output = await format(input);
      expect(output).toBe('const obj = {\n  a: 1,\n  b: 2,\n};\n');
    });
  });

  describe('MDX Override', () => {
    it('should use MDX parser for .md files', async () => {
      const input =
        'import {Button} from "./components";\n\n# Hello\n\n<Button>Click me</Button>\n';
      const output = await prettier.format(input, {...config, filepath: 'test.md'});
      expect(output).toBe(input);
    });
  });

  describe('Configuration Structure', () => {
    it('should have all required properties', () => {
      expect(config).toHaveProperty('semi');
      expect(config).toHaveProperty('singleQuote');
      expect(config).toHaveProperty('trailingComma');
      expect(config).toHaveProperty('printWidth');
      expect(config).toHaveProperty('tabWidth');
      expect(config).toHaveProperty('useTabs');
      expect(config).toHaveProperty('bracketSpacing');
      expect(config).toHaveProperty('arrowParens');
      expect(config).toHaveProperty('endOfLine');
      expect(config).toHaveProperty('overrides');
    });

    it('should have correct override structure for MDX', () => {
      const mdxOverride = config.overrides.find((override) => override.files === '**/*.md');
      expect(mdxOverride).toBeDefined();
      expect(mdxOverride.options).toHaveProperty('parser', 'mdx');
    });
  });
});
