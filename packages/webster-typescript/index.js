module.exports = function(api, options = {}) {
  api.assertVersion(7);

  const presets = [
    require('@babel/preset-env'),
    [require('@babel/preset-typescript'), { allowDeclareFields: true }],
  ];

  const plugins = [
    [require('@babel/plugin-transform-runtime'), { corejs: 3 }],
    [require('@babel/plugin-proposal-decorators'), { version: '2023-05' }],
    require('@babel/plugin-transform-class-properties'),
  ];

  return {
    presets,
    plugins,
  };
};
