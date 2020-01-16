Clique em ROW ou Blame !!!!!

# MERN---mongo-express-react-node--1-app
node --version
npm --version
npm install -g npm
npm init
npm install express

# Express
node server.js
npm start

# JSX Transform
npm install --save-dev @babel/core@7 @babel/cli@7
node_modules/.bin/babel --version
npx babel --version
npm install --save-dev @babel/preset-react@7
npx babel src --presets @babel/react --out-dir public

# Suporte a navegadores antigos
npm install --no-save @babel/plugin-transform-arrow-functions@7
npx babel src --presets @babel/react --plugins=@babel/plugin-transform-arrow-functions --out-dir public
npm uninstall @babel/plugin-transform-arrow-functions@7
npm install --save-dev @babel/preset-env
npx babel src --out-dir public

# Automatizar
npm install nodemon@1
