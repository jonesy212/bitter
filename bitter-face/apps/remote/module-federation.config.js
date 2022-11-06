// @ts-check
const coreLibraries = new Set(['react','react-dom','react-router-dom','@bitter-face/shared/data-context']);

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
        return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
},
};

module.exports = moduleFederationConfig;
