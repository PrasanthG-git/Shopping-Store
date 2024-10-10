# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


This project is a simple e-commerce store built using React. It fetches product data from the Fake Store API and allows users to add products to a cart. The app features the following:

Display of products fetched from an API with images, descriptions, and prices.

Add-to-cart functionality with the ability to view and remove items from the cart.

A header that displays the cart icon and the total number of items in the cart.

Utilizes Tailwind CSS for styling.


Features


Product List:
     Displays a list of products fetched from the Fake Store API, with each product showing an image, title, description, and price (rounded to 2 decimal places).

Add to Cart:
     Each product has an "Add to Cart" button. Clicking the button adds the item to the cart. If the product is already added, an alert informs the user that the product is already in the cart.

Cart Icon: 
    The header contains a cart icon that displays the current number of items in the cart. Clicking on the icon opens the cart.

Cart Modal:
     A modal that shows the products currently in the cart. Users can also remove items from the cart via a "Remove" button.