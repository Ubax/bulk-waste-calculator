# St. Gallen bulky waste stamps calculator

## Setting up the environment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Prerequisites
Node.js 16.19, npm 8.19 
### Modules installation
In the project directory run: `npm install`

## Run the project in development mode

In the project directory run: `npm start`.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Making changes

The page will reload when you make changes in development mode.\
You may also see any lint errors in the console.
### Add/Edit/Delete predefined items

To add/edit/delete item with a predefined number of stamps edit the file `src/constants.js`. To add a new item simply append `INITIAL_ITEMS` with new line with desired properties. All photos have to be put in the `public/img/` folder to be available for reference in the `src/constants.js` file.

### Edit the stamp price

Edit the `STAMP_PRICE` in `src/constants.js` file.