
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
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "auto" },
    "@ngx-translate/core": { singleton: true, strictVersion: true, requiredVersion: "15.0.0" },
    "@ngx-translate/http-loader": { singleton: true, strictVersion: true, requiredVersion: "8.0.0" }
  }
});

