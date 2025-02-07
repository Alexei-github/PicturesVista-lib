import prettierBaseConfig from './prettier.config.js';
export default {
  ...prettierBaseConfig,
  organizeImportsSkipDestructiveCodeActions: false,
};
