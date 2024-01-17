# Micro Frontend with Module Federation POC - Angular

This project is the POC of implementing Micro Frontend with Module Federation upon Angular applications, which includes the following applications:

* host-app: the shell app
* products-app: the remote micro-frontend for products
* carts-app: the remote micro-frontend for shopping cart items

In this POC, each application has its own dependencies, however, the styles cannot be shared through the webpack configuration. So,

* To make each application can run independently, Bootstrap is installed and configured in all the application.
* In runtime, when access pages in products-app and carts-app from host-app, these pages are actually depending on the Bootstrap in host-app.

# Shared library
## Use the shared library locally
> cd mfe-shared  
> ng build mfe-shared-lib  
> cd dist/mfe-shared-lib  
> npm link

> cd host-app  
> npm link mfe-shared-lib

Do the same for products-app and carts-app as well

## Use the shared library in non-local environment
publish the shared library to an npm registry

# Development server

Run `ng serve` for each application, and Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
