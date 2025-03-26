const {websterComponentFromJSX, docsUrl} = require('../utilities');

const COMPONENTS_WITH_SECTIONED_PROP = [
  'Card',
  'Popover',
  'LegacyCard',
  'Layout',
];

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer the use of the `sectioned` props in Webster components instead of wrapping all contents in a `Section` component.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('webster-prefer-sectioned-prop'),
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const {children} = node;
        const component = websterComponentFromJSX(node, context);
        if (
          !component ||
          !COMPONENTS_WITH_SECTIONED_PROP.includes(component) ||
          children.length === 0 ||
          children.length > 1 ||
          children[0].type !== 'JSXElement' ||
          children[0].openingElement.attributes.length > 0
        ) {
          return;
        }

        const child = websterComponentFromJSX(node.children[0], context);

        if (child === `${component}.Section`) {
          context.report(
            node,
            `Use the \`sectioned\` prop on ${component} instead of wrapping all its contents in a ${child}`,
          );
        }
      },
    };
  },
};
