#!/bin/bash
echo "Removing old build"
rm -rf ./dist
rm -rf ./node_modules
mkdir ./dist
echo "Installing dependencies"
npm install
echo "Building"
./node_modules/.bin/webpack --progress -d
echo -e 'Done\n'
