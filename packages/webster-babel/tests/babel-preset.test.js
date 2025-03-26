"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
const index_1 = __importDefault(require("../index"));
describe('babel-preset-e2e-test', () => {
    describe('legacy decorator tests', () => {
        it('transforms code without errors or warnings', async () => {
            const { code } = (0, core_1.transform)(sampleCode, configFactory({ presetOptions: { typescript: true } }));
            expect(code).toBe(expectedTransformedSampleCode.trim());
            // The test content must contain a function called `Test`, so that
            // we can call it and get the result of running that code
            // eslint-disable-next-line no-new-func
            const sampleCodeExecutionResult = Function(`${code};\nreturn Test()`)();
            expect(sampleCodeExecutionResult).toStrictEqual({
                decoratorOutput: 'TEST',
            });
        });
        it('throws an error when encountering invalid code, if decorator transforms are not enabled', async () => {
            expect(() => {
                (0, core_1.transform)(sampleCode, configFactory());
            }).toThrow('Unexpected token');
        });
    });
});
function configFactory({ presetOptions = {}, targets = 'current node', } = {}) {
    return {
        presets: [[index_1.default, presetOptions]],
        targets,
        filename: 'test-script.ts',
        configFile: false,
    };
}
const sampleCode = `
function Test() {
  function uppercase() {
    return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function(...args: any[]) {
        return originalMethod.apply(this, args).toUpperCase();
      };
      return descriptor;
    };
  };

  class ExampleClass {
    @uppercase()
    method() {
      return 'test';
    }
  }
  return {
    decoratorOutput: new ExampleClass().method(),
  };
}
`;
const expectedTransformedSampleCode = `
"use strict";

function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function Test() {
  var _dec, _class;
  function uppercase() {
    return function (_target, _propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args) {
        return originalMethod.apply(this, args).toUpperCase();
      };
      return descriptor;
    };
  }
  ;
  let ExampleClass = (_dec = uppercase(), _class = class ExampleClass {
    method() {
      return 'test';
    }
  }, _applyDecoratedDescriptor(_class.prototype, "method", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype), _class);
  return {
    decoratorOutput: new ExampleClass().method()
  };
}
`;
