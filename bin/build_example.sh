#!/bin/bash
echo "Removing old build"
rm -rf ./dist
rm -rf ./node_modules
mkdir ./dist
echo "Installing dependencies"
npm install
echo "Building"
./node_modules/.bin/webpack --progress -d
mv webpack.config.js 1.webpack.config.js
mv example.webpack.config.js webpack.config.js
./node_modules/.bin/webpack --progress -d
mv webpack.config.js example.webpack.config.js
mv 1.webpack.config.js webpack.config.js
echo -e 'Done\n'

cat node_modules/react/dist/react.js >> ./dist/vendor.js
cat node_modules/react/dist/react-with-addons.js >> ./dist/vendor.js
cat ./dist/r34k7.js >> ./dist/vendor.js
rm ./dist/r34k7.js
http-server ./ -p 8888
