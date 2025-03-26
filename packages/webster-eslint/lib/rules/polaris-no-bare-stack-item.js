const {docsUrl, websterComponentFromJSX} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Disallow the use of Webster’s `Stack.Item` and `LegacyStack.Item` without any custom props.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('webster-no-bare-stack-item'),
    },
    schema: [],
  },

  create(context) {
    return {
      JSXElement(node) {
        const component = websterComponentFromJSX(node, context);
        if (
          (component === 'Stack.Item' || component === 'LegacyStack.Item') &&
          node.openingElement.attributes.length === 0
        ) {
          context.report({
            node,
            message:
              'You don’t need to wrap content in a Stack.Item or LegacyStack.Item unless you need to customize one of its props.',
          });
        }
      },
    };
  },
};
