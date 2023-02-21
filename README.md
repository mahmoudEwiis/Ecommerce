# Store (Ecommerce App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Description
This is an Angular e-commerce app that fetches data from an API and allows users to login with a token that expires after 1 hour. The app also uses the ngx-skeleton-loader library to handle data loading and ngx-infinite-scroll to load more products as the user scrolls down the page.

## Features

* Login.
The app allows users to log in using a username and password. The login form validates the input fields and sends a POST request to the API to retrieve a JWT token. The token is stored in local storage and used to authenticate the user for subsequent requests.

* Token Expiration.
The JWT token has an expiration time of 1 hour. After this time, the user will be automatically logged out and redirected to the login page.

* Product List.
The app displays a list of products fetched from the API. When the user first loads the page, the ngx-skeleton-loader library is used to display a loading animation until the data is fetched from the API.

As the user scrolls down the page, the ngx-infinite-scroll library is used to load more products from the API. The app uses a pagination system to request the next page of products from the API.

* Product Details.
When the user clicks on a product in the list, they are taken to a page that displays the details of a product when the user clicks on the product card. The product details page displays the product name, price, description, and a list of related products.


## Built with
* [Angular](https://angular.io/).
* [Typescript](https://www.typescriptlang.org/)
* [Ngneat/Hot-toast](https://ngneat.github.io/hot-toast/).
* [Bootstrap](https://getbootstrap.com/).
* [Fontawesome](https://fontawesome.com/).
* [ngx-skeleton-loaderngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader).
* [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll).
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
