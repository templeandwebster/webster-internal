import { transform } from '@babel/core';
import websterCommonPreset from '../index';

describe('typescript-preset-e2e-test', () => {
  it('transforms TypeScript code without errors', () => {
    const code = `
      interface Test {
        name: string;
      }

      const test: Test = {
        name: 'test'
      };
    `;

    const result = transform(code, {
      presets: [[websterCommonPreset, { typescript: true }]],
      filename: 'test.ts',
    });

    expect(result?.code).toBeDefined();
    expect(result?.code).not.toContain('interface');
  });

  it('handles TypeScript decorators correctly', () => {
    const code = `
      function decorator(target: any, propertyKey: string) {
        console.log('Decorator called');
      }

      class Test {
        @decorator
        method() {
          return 'test';
        }
      }
    `;

    const result = transform(code, {
      presets: [[websterCommonPreset, { typescript: true }]],
      filename: 'test.ts',
    });

    expect(result?.code).toBeDefined();
    expect(result?.code).toContain('_applyDecs');
  });
});
