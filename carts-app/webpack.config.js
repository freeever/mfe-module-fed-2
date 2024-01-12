
const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'carts',
  filename: "remoteEntry.js",

  exposes: {
    './CartsModule': './src/app/carts/carts.module',
  },
  
  shared: {
    "@angular/core": { singleton: true, strictVersion: false, requiredVersion: "auto" },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: "auto" },
    "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: "auto" },
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "auto" }
  }
});

