#!/bin/bash

date=$(date)
gitUserMail=$(git config user.email)

clear

printf 'This will clone the deployment repo, push, remove if and update the deploymentsLog file. Continue? (y/n) '
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then 
    echo "LET'S GO!";
else
    echo "Ok, bye!";
    exit 0;
fi

echo "**** Deleting deployment repo if present and clonning it ..." 

rm -rf ../turn2xcom.github.io
cd .. && git clone --depth 1 git@github.com:turn2xcom/turn2xcom.github.io.git &&   
cd - 

echo "**** Deleting old build folder ..."
rm -rf ./public

echo "**** Building ..." 
npm run build 

echo "**** Copying build to deployment repo ../turn2xcom.github.io/ ..." 
rm -rf ../turn2xcom.github.io/*
cp -r ./public/* ../turn2xcom.github.io 
cd ../turn2xcom.github.io/ 

echo "**** Adding all the build and pushing to main ..." 
git add . 
git commit -m "update" 
git push  
echo "**** Deployment completed! ****"

echo "**** Removing deployment repo ..."
cd - 
rm -rf ../turn2xcom.github.io

echo "**** Updating deploymentsLog file ..."
echo "By $gitUserMail on $date" >> ./src/deploymentsLog.txt  
git add ./src/deploymentsLog.txt 
git commit -m "update deploymentsLog"
git push

echo "**** All done!" 
