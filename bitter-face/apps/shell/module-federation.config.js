
// @ts-check
// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set(['react','react-dom','react-router-dom','@bitter-face/shared/data-context']);

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: ['remote'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
        return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
},
};

module.exports = moduleFederationConfig;
