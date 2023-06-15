#!/bin/bash

:'
This is going to build the project, copy the public folder to docs, 
delete the public folder, stash current changes, checkout to 
deployment branch, pull from dev, add all, commit, push and go to dev, 
'
clear

printf 'This will stash your current changes and update your dev branch after deployment. Do you want to continue? (y/n) '
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then 
    echo "LET'S GO!";
else
    echo "Ok, bye!";
    exit 0;
fi

echo "**** Removing ./docs folder ..." &&
rm -rf ./docs &&
echo "**** Building ..." &&
npm run build &&
echo "**** Copying build to ../web-build ..." &&
cp -r ./public ./docs &&
rm -r ./public && 
rm -rf ../web-build/*; 
cp -r public/* ../web-build/ &&
cd ../web-build &&
echo "**** Adding all the build and pushing to deployment ..." &&
git add . &&
git commit -m "update" &&
git push origin deployment && 
echo "**** Deployment succeeded!" 
