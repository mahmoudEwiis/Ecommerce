# Store (Ecommerce App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Description
<!-- This is an Angular e-commerce app that fetches data from an API and allows users to login with a token that expires after 1 hour. The app also uses the ngx-skeleton-loader library to handle data loading and ngx-infinite-scroll to load more products as the user scrolls down the page. -->
This is an Angular E-commerce application that allows users to browse products, add products to cart or wishlist, and checkout products. The application fetches product data through an API and uses a token-based authentication system with an expiration time of 20 days, and the refresh token is valid for 10 hours. It also implements the concept of lazy loading with the application divided into modules, including a user module where users can view and update their personal information.

## Features

* User Authentication with JWT token.
* Data loading using ngx skeleton loader.
* Infinite scrolling to load more products.
* Product details page.
* Product sorting by price and name.
* Product filtering by category.
* Zoom in functionality in product details page.
* Add products to cart or wishlist.
* Lazy loading of modules.
* Checkout products.
 
## Usage

Once the application is running, you can browse products, add products to cart or wishlist, and checkout products. You can also sort products by price or name. The application uses ngx-infinite-scroll to load more products as the user scrolls down the page.

To use the application, you will need to create an account and log in. Once logged in, you will receive a JWT token that will be valid for 20 days, and the refresh token is valid for 10 hours. After 20 days, the token will expire, and you will need to log in again.

The application is divided into modules, including a user module where users can view and update their personal information. Lazy loading is used to optimize the loading of modules.

<!-- * Login.
The app allows users to log in using a username and password. The login form validates the input fields and sends a POST request to the API to retrieve a JWT token. The token is stored in local storage and used to authenticate the user for subsequent requests.

* Token Expiration.
The JWT token has an expiration time of 1 hour. After this time, the user will be automatically logged out and redirected to the login page.

* Product List.
The app displays a list of products fetched from the API. When the user first loads the page, the ngx-skeleton-loader library is used to display a loading animation until the data is fetched from the API.

As the user scrolls down the page, the ngx-infinite-scroll library is used to load more products from the API. The app uses a pagination system to request the next page of products from the API.

* Product Details.
When the user clicks on a product in the list, they are taken to a page that displays the details of a product when the user clicks on the product card. The product details page displays the product name, price, description, and a list of related products. -->


## backend API 

Documentation for the backend API can be found [here](https://fakeapi.platzi.com/en/rest/introduction).

## Built with
* [Angular](https://angular.io/).
* [Typescript](https://www.typescriptlang.org/)
* [Ngneat/Hot-toast](https://ngneat.github.io/hot-toast/).
* [Bootstrap](https://getbootstrap.com/).
* [Fontawesome](https://fontawesome.com/).
* [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader).
* [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll).
* [rxjs](https://rxjs.dev/).

Please leave a ⭐ as motivation if you liked the implementation 😄

## Running the project

In the project directory, you can run:

#### `npm install`

To install all dependencies in package.json.

#### `npm serve`

It runs the app in the development mode.<br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. 
## Contributing

If you want to contribute to this project, you can fork the repository and submit a pull request.
