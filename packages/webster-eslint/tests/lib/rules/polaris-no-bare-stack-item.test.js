const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/webster-no-bare-stack-item');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

const errors = [
  {
    type: 'JSXElement',
    message:
      'You don’t need to wrap content in a Stack.Item or LegacyStack.Item unless you need to customize one of its props.',
  },
];

ruleTester.run('webster-no-bare-stack-item', rule, {
  valid: [
    {
      code: `
        import {Stack} from '@tpw/webster';
        <Stack>Content</Stack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from '@tpw/webster';
        <LegacyStack>Content</LegacyStack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Stack} from '@tpw/webster';
        <Stack>Content<Stack.Item fill>More content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from '@tpw/webster';
        <LegacyStack>Content<LegacyStack.Item fill>More content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Stack} from 'other-module';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from 'other-module';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Stack} from '@tpw/webster';
        <Stack.Item fill>Content</Stack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from '@tpw/webster';
        <LegacyStack.Item fill>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
  ],
  invalid: [
    {
      code: `
        import {Stack} from '@tpw/webster';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
    {
      code: `
        import {LegacyStack} from '@tpw/webster';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
    {
      code: `
        import {Stack} from '@tpw/webster';
        <Stack.Item>Content</Stack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
    {
      code: `
        import {LegacyStack} from '@tpw/webster';
        <LegacyStack.Item>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
    {
      code: `
        import * as P from '@tpw/webster';
        <P.Stack.Item>Content</P.Stack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
    {
      code: `
        import * as P from '@tpw/webster';
        <P.LegacyStack.Item>Content</P.LegacyStack.Item>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors,
    },
  ],
});
