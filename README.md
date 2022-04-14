# angular-brandy-store

The client side is a single page app, dynamically updating with Angular and Firebase. The application consists of users, products and orders. Each user can register, login and logout. Users can also view each products details and make orders. Admins can add, edit and delete entries.

## Functionality

User Login:
 - login in the application via email and password

User Register:
 - register a new user via email and password

User Logout:
 - Logouts from the application

## Not Register user can:
- see the store
- register
- product details
- sort and filter products
- read articles

## An register user can:
- order
- see product details
- comment products
- like products
- dislike products
- see "my likes" page

## An admin user can:
- create new offer
- edit product
- delete product
- create new article
- edit article
- delete article

### Home:
- List of products last 3 products

### Catalog:
- product details. Each user can comment the product
- product details. Each user can like products

### Details:
- product details. Each user can comment the product
- product details. Each user can like products

### Cart:
 - Users add product to the card
 - Users select quantity of the chosen product
 - Users have option to remove product from the cart or change the quantity

### Profile:
- Users can see the products they like
 
Product add:
- Admin route only
- Create a new entry and save it to the database

Product edit:
 - Admin route only
 - Edit an existing entry and save it to the database

Product delete:
 - Admin route only
 - Remove an entry from the database

