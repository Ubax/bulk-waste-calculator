# St. Gallen bulky waste stamps calculator

## Setting up the environment

### Prerequisites

Node.js 16.19, npm 8.19

### Modules installation

In the project directory run: `npm install`

## Run the project in development mode

In the project directory run: `npm start`.

Open [http://localhost:3000/stellar-trash](http://localhost:3000/stellar-trash) to view it in your browser.

## Making changes

The page will reload when you make changes in development mode.

You may also see any lint errors in the console.

### Add/Edit/Delete predefined items

To add/edit/delete item with a predefined number of stamps edit the file `src/constants.js`.

To add a new item append `INITIAL_ITEMS` with new record with desired properties. For objects names remember to add those to all language files - `src/lang/en.json` and `src/lang/de.json`.

All photos have to be put in the `public/img/` folder to be available for reference in the `src/constants.js` file.

### Edit the stamp price

Edit the `STAMP_PRICE` in `src/constants.js` file.

### Translations

Current implementation uses `i18next` for translations. The files with german and english translations are located in `src/lang`.

The default language is English. If you would like to change it you need to change `lng` property in `src/i18n.js`.

You can learn more about i18n in https://react.i18next.com/ and https://www.i18next.com/.

## Build

### Configuration

The repository is configured to be built for sub path `/stellar-trash`. This can be changed, by adjusting `homepage` in `package.json`. If you want it to be available as a root directory (e.g. `example.com/`), set `homepage` to `/` or remove it all together. In code you can access this value via `process.env.PUBLIC_URL`

### Building

To build project run `npm run build` in project directory.

### Deploying website

After building website you can deploy it by copying all the files from `build` folder to your server. If you have ssh access to server the best solution is using `scp`. If you want to host the website using github pages you can create a repository for it and copy the files to root directory.
