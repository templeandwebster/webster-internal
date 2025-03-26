const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/webster-prefer-sectioned-prop');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

function errorsFor(component) {
  return [
    {
      type: 'JSXElement',
      message: `Use the \`sectioned\` prop on ${component} instead of wrapping all its contents in a ${component}.Section`,
    },
  ];
}

ruleTester.run('webster-prefer-sectioned-prop', rule, {
  valid: [
    {
      code: `
        import {Card} from '@tpw/other';
        <Card><Card.Section /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/other';
        <LegacyCard><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {OtherComponent} from '@tpw/webster';
        <OtherComponent><OtherComponent.Section /></OtherComponent>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card />;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard />;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card>Content</Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard>Content</LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card><Card.Section subdued /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard><LegacyCard.Section subdued /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card><Card.Section {...props} /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard><LegacyCard.Section {...props} /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card><Card.Other /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard><LegacyCard.Other /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card><Card.Section /><Card.Section /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard><LegacyCard.Section /><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
    {
      code: `
        import {Layout} from '@tpw/webster';
        <Layout><Layout.AnnotatedSection /></Layout>;
      `,
      filename: fixtureFile('webster-app/index.js'),
    },
  ],
  invalid: [
    {
      code: `
        import {Card} from '@tpw/webster';
        <Card><Card.Section /></Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import {LegacyCard} from '@tpw/webster';
        <LegacyCard><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
    {
      code: `
        import {Popover} from '@tpw/webster';
        <Popover><Popover.Section /></Popover>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('Popover'),
    },
    {
      code: `
        import {Layout} from '@tpw/webster';
        <Layout><Layout.Section /></Layout>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('Layout'),
    },
    {
      code: `
        import * as Webster from '@tpw/webster';
        <Webster.Card><Webster.Card.Section /></Webster.Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import * as Webster from '@tpw/webster';
        <Webster.LegacyCard><Webster.LegacyCard.Section /></Webster.LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
    {
      code: `
        import Webster from '@tpw/webster';
        <Webster.Card><Webster.Card.Section /></Webster.Card>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import Webster from '@tpw/webster';
        <Webster.LegacyCard><Webster.LegacyCard.Section /></Webster.LegacyCard>;
      `,
      filename: fixtureFile('webster-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
  ],
});
