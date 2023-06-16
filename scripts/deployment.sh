#!/bin/bash

date=$(date)

clear

printf 'This will clone the deployment repo, push, remove if and update the deploymentsLog file. Continue? (y/n) '
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then 
    echo "LET'S GO!";
else
    echo "Ok, bye!";
    exit 0;
fi

echo "**** Checking if you have the deployment repo ..." 
cd ../turn2x.github.io || { cd .. && git clone --depth 1 git@github.com:turn2x/turn2x.github.io.git; }   
cd - 

echo "**** Building ..." 
npm run build 

echo "**** Copying build to deployment repo ../turn2x.github.io/ ..." 
rm -rf ../turn2x.github.io/*
cp -r ./public/* ../turn2x.github.io 
cd ../turn2x.github.io/ 

echo "**** Adding all the build and pushing to main ..." 
git add . 
git commit -m "update" 
git push  

echo "**** Removing deployment repo ..."
cd - 
rm -rf ../turn2x.github.io/.git 

echo "**** Updating deploymentsLog file ..."
echo $date >> ./src/deploymentsLog.txt 

echo "**** Removing build folder ..." 
rm -rf ./public 
echo "**** Deployment succeeded!" 

