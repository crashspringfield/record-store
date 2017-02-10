#Record Store
A minimal AF template for a full-stack webstore built with Node, MongoDB, Express,
and Handlebars. It uses Passport, Cookie-Parser, and Express-Session to keep
users safely logged in, and transactions are completed through Stripe integration.

##Running Locally
Using Express to render .hbs prevents this from being a quick-and-easy Github Pages
demo, but you can install and run locally.

1. Download and install dependencies (you'll need Node.js and MongoDB):

    git clone
    npm install

2. Seed the database with dummy data:

  node ./seed/ProductSeeder

3. Add your test Stripe keys. Once you have a Stripe account, go [here](https://dashboard.stripe.com/account/apikeys) and

  at line 1 of [checkout]() add your Test Publishable Key
  at line 8 of [/routes/index]() add your Test Secret Key

4. Start the server and head on over to localhost:3000

    npm start
