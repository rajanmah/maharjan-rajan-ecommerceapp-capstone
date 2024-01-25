# Ecommerce App (MERN Stack)
This is a restaurant website built on MongoDb, Express, React and Node (MERN). I have tried to follow best practices if ES6 syntax and tools and DRY principles to build this full functioning application.

I used Axios to fetch data from APIs. I have made two collections in MongoDB database, Menus and Users to fulfill the requirements. I used Node and Express to establish connection between frontend and backend and for CRUD operations. 

I connected Mongoose to connect with the MongoDB database. 

I used React useState, useEffect, useContext, useNavigate, useLocation Hooks for state management and React Router to create routes.

The website has 
> Homepage: displays brief introduction about the page and carousel of featured menu items
> Menu page: displays different newarei cuisines, names, price and add to bag options
> Individual item page displays brief description of the food and again option to add to bag
> Add to bag leads to Delivery Bag (cart) where you can increase /decrease the number of items you want to order. You can remove them from the bag too. It displays total number of items in the order and the total price.
> Proceed to payment leads to Sign in page, If you are already a member just enter email and password to proceed to the payment selection option.
> If not a member, you can just fill the sign up form and sign in back to continue to login page and complete the online order. 
> After successful payment, the page will end at order confirmation page.