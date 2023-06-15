#!/bin/bash

date=$(date)

clear

printf 'This will build and deploy to github pages of this repo. Continue? (y/n) '
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
echo "**** Copying build to ./docs ..." &&
cp -r ./public ./docs &&
echo "**** Updating deployment log... " &&
echo $date >> ./src/deploymentsLog.txt &&
echo "**** Adding all the build and pushing to deployment ..." &&
git add . &&
git commit -m "update" &&
git push origin deployment && 
echo "**** Deployment succeeded!" 
